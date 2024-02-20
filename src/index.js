import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/component/navbar/NavBar.css'
import Homepage from './pages/Homepage';
import Service from './pages/Service';
import About from "./pages/About"
import Works from './pages/Works';
import DetailWork from "./pages/DetailWork"
import Test from './component/test';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/web-app-company",
    element: <Homepage/>,
  },
  {
    path: "/web-app-company/service",
    element: <Service/>,
  },
  {
    path: "/web-app-company/about",
    element: <About/>,
  },
  {
    path:"/web-app-company/works",
    element : <Works/>,
    children : [
      {
        path: ':id',
        element : <DetailWork/>
      }
    ]
  },
  {
    path: "/test",
    element: <Test/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
