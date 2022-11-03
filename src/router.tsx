import { createBrowserRouter } from "react-router-dom";
import App from './App';
import routes from "./constants/routes";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Story from "./pages/StoryPage";

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
                path: `${routes.STORY}/:storySlug`,
                element: <Story />,
            },
        ]
    },
    {
        path: routes.LOGIN,
        element: <Login />
    },
    {
        path: routes.REGISTER,
        element: <Register />
    },
]);

export default router;
