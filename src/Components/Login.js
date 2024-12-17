import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'; // Updated Twitter icon
import BackImage from '../assets/Back.jpg';
import { Validate } from '../utils/Validate';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, googleProvider } from '../utils/firebase';
import { GithubAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useNavigation } from 'react-router-dom';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false); // Toggle between Sign In and Sign Up
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' }); // Unified feedback state
  const [user, setUser] = useState(null);

  const provider = new GithubAuthProvider();
const navigate =useNavigate();
  const handleTwitterSignIn = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log(result.user);

      setFeedback({ type: 'success', message: `Welcome ${result.user.displayName}!` });
      navigate("/browse");
    } catch (error) {
      setFeedback({ type: 'error', message: error.message });
    }
  };

  const handleAuth = async () => {
    // Validation
    const validationMessage = Validate(email.current.value, password.current.value);
    if (validationMessage) {
      setFeedback({ type: 'error', message: validationMessage });
      return;
    }
    if (!isSignIn && password.current.value !== confirmPassword.current.value) {
      setFeedback({ type: 'error', message: 'Passwords do not match!' });
      return;
    }

    try {
      if (!isSignIn) {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        await updateProfile(userCredential.user, { displayName: name.current.value });
        setUser(userCredential.user);
        setFeedback({ type: 'success', message: 'Account created successfully!' });
      } else {
        // Sign In Logic
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        setUser(userCredential.user);
        setFeedback({ type: 'success', message: `Welcome back, ${userCredential.user.displayName}!` });
      }
    } catch (error) {
      setFeedback({ type: 'error', message: error.message });
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BackImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Form */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-[90%] max-w-md bg-gray-950 bg-opacity-90 p-8 rounded-lg shadow-lg">
          <p className="text-3xl font-bold mb-6 text-white text-center">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </p>
          <div className="flex flex-col gap-4 mb-4">
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
            {!isSignIn && (
              <input
                ref={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
              />
            )}
            {feedback.message && (
              <p className={`text-sm ${feedback.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {feedback.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <button
            className="w-full py-3 bg-red-600 rounded text-white font-semibold hover:bg-red-700"
            onClick={handleAuth}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 mt-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
          </button>
          <button
            onClick={handleTwitterSignIn}
            className="w-full py-3 mt-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} style={{color: 'white',  backgroundColor:'black' }} /> Sign In with GitHub
          </button>

          {/* Toggle Sign In/Sign Up */}
          <div className="mt-6 text-center">
            <p className="text-white ">
              {isSignIn ? 'New to Netflix? ' : 'Already have an account? '}
              <button
                className="text-red-500 hover:underline"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? 'Sign Up Now' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
