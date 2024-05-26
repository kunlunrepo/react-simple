import About from "../components/About/index.jsx";
import Home from "../components/Home/index.jsx";
import {Navigate} from "react-router-dom";
import Navigation from "../components/Home/components/Navigation/index.jsx";
import Classify from "../components/Home/components/Classify/index.jsx";

export default [
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'classify/:xd',
                element: <Classify/>
            },
            {
                path: 'navigation',
                element: <Navigation/>
            }
        ]
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/',
        element: <Navigate to="about"/>
    }
]
