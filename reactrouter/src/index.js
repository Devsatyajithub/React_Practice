import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.js'
import Home from './components/Header/Footer/Home/Home.js'
import About from './components/Header/Footer/About/About.js'
import Contact from './components/Contact/Contact.js'
import User from './components/User/User.js'
import Github, { githubInfoLoader } from './components/Github/Github.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [ 
//       {
//         path: "",
//         element: <Home />

//       },{
//         path: "about",
//         element:<About />
//       },{
//         path: "contact",
//         element:<Contact />
//       },{
//         path:"Github",
//         element:<Github/>
//       },{
//         path:"user/:userid",
//         element:
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

