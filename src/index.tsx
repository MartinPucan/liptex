import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/Root';
import './assets/font/CottaFree.otf';
import { Contact } from './routes/Contact/Contact';
import { Request } from './routes/Request/Request';
import { AboutUs } from './routes/AboutUs/AboutUs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/o-nas',
        element: <AboutUs />,
    },
    {
        path: '/kontakt',
        element: <Contact />,
    },
    {
        path: '/poptavka',
        element: <Request />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
