import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Root , {loader as rootLoader} from './routes/root';
import ErrorPage from './error-page';
import Login from './routes/login'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewDay from './routes/day/new';
import DayPage from './routes/day/day-page';
import Register from './routes/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/day",
        element: <DayPage/>
      },
      {
        path: "/day/new",
        element: <NewDay/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
