import React, { useEffect } from 'react'
import Header from './Header'

import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'

import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'

const Body = () => {
const dispatch=useDispatch();

const router=createBrowserRouter([
     
        {
            path:"/browse",
            element:<Browse/>,

        },
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/header",
            element:<Header/>,
        },

    ])
   
  return (
    <div className='    '   
      >
      <RouterProvider router={router}  />

    </div>
  )
}

export default Body