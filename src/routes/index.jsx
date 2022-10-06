import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Menu } from "../pages/Menu/Menu";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
        </Routes>
    )
}