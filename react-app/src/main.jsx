import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Project from './project';

const routes = createBrowserRouter([
  {
    Path: '/',
    element: <div> hello world</div>
  },
  {
    path:'aboutme',
    element:<About />,
  },
  {
    path:'contactme',
    element:<Contact />,
  },
  {
    Path:'myproject',
    element:<Project />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} /> 
  </React.StrictMode>
);