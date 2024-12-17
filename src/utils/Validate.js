export const Validate = (email, password) => {
    const isPasswordValid = /^\d{8}$/.test(password);
  
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };
  