import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './screens/App';
import Agenda from './screens/Agenda';
import Counter from './screens/Counter';
import Home from './screens/Home';
import Typer from './screens/Typer';
import Weather from './screens/Weather';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/agenda",
        element: <Agenda />
      },
      {
        path: "/counter",
        element: <Counter/>
      },
      {
        path: "/typer",
        element: <Typer/>
      },
      {
        path: "/weather",
        element: <Weather/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);