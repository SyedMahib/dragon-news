import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
        },
        {
            path: "/auth",
            element: <h1>authentication layout</h1>
        },
        {
            path: "/news",
            element: <h1>News layout</h1>
        },
        {
            path: "/*",
            element: <h1>Error404</h1>
        }
    ]
);

export default router;