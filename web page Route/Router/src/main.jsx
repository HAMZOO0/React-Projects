import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {  Route, Router, RouterProvider , createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx"
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx';
import Github from './components/Github/Github.jsx';



//*  CreateBrowserRouter:
// This function helps you define the different pages or routes of your application.
// Each route is associated with a specific URL path and a component that should be displayed when the user navigates to that path.

// *RouterProvider:
// This component takes the router you've created with createBrowserRouter and makes it available throughout your application.
// It tells your app to use this router for managing all the routes and navigation.

//!  version 1 for declarting routes

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     children:[

//       // home and defualt route 
//       {
//         path: "", // it is defgault route ""
//         element : <Home/>
//       },
//       {
//         path: "about", // it is defgault route ""
//         element : <About/>
//       },
//       {
//         path: "contact", // it is defgault route ""
//         element : <Contact/>
//       }
//     ]
//   },
// ]);


//! version 2 for declarting routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login/:userid" element={<Login />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

/*,What is react-router-dom?
react-router-dom is a library that helps you manage navigation (moving between pages) in a React app. Instead of loading new HTML pages from the server, it lets you switch between different components based on the URL, making your app feel like a single-page application (SPA). */