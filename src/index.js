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
import store from './store';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog';

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
    path: "/web-app-company/blog",
    element : <Blog/>
  },
  {
    path: "/test",
    element: <Test/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
      </RouterProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
