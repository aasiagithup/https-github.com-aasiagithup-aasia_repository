import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Project from './projects';
import Root from './root';





const routes = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
    {
      path:'aboutme',
      element:<About />,
    },
    {
      path:'contactme',
      element:<Contact />,
    },
    {
      path:'myprojects',
      element:<Project />,
      Children:[
        {
          path:'myproject',
          Element:<aasigment 1
        }
      ]
    
    },
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} /> 
  </React.StrictMode>
);