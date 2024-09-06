import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Dashboard, Login} from "../pages";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/pagina-principal" element={<Dashboard/>}/>
                <Route path="/*" element={<Navigate to="/login"/>}/>
            </Routes>
        </BrowserRouter>
    );
}