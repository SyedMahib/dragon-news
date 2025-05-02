import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path:"/Category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                }
            ]
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