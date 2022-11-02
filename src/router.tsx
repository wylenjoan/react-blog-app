import { createBrowserRouter } from "react-router-dom";
import App from './App';
import routes from "./constants/routes";
import Landing from "./pages/Landing";
import Story from "./pages/Story";

const router = createBrowserRouter([
    {
        path: routes.ROOT,
        element: <App />,
        children: [
            {
                path: routes.ROOT,
                element: <Landing />,
            },
            {
                path: routes.STORY,
                element: <Story />,
            },
        ]
    },
]);

export default router;
