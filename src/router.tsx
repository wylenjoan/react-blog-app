import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Landing from "./pages/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
        ]
    },
]);

export default router;
