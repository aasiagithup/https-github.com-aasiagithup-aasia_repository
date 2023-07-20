import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import './index.css'
import Project from './project';

const routes = createBrowserRouter([
  {
   path:'/',
  element:<div>hello world<div/>,
  },
  {
    path: 'about me',
    element:<About />,
  },

  {
    path: 'contact',
    element: <Contact />,
},
{
  path:'project',
  element:<Project />,
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} /> 
    </React.StrictMode>
)