import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Project from './projects';
import Root from './root';
import Assignment from './assignment';
import navbar from './components/navbar';






const routes = createBrowserRouter([
  <navbar/>,
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
          path:'Assignment',
          Element:<Assignment />,
        },
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