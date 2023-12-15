import { RouteObject } from "react-router-dom";
import { LogIn } from "./pages/LogIn/LogIn";
import { Frame } from "./frame";
// import { CarouselCard } from "./components/CarouselCard/CarouselCard";
// import { AuthenticationTitle } from "./components/AuthenticationTitle/AuthenticationTitle";

export const routes:RouteObject[] = [
    {
        path:"",
        element: <Frame/>,
    },
    {
        path:"login",
        element: <LogIn/>,
    },
];