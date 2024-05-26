import About from "../components/About/index.jsx";
import Home from "../components/Home/index.jsx";
import {Navigate} from "react-router-dom";

export default [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to="about" />
    }
]
