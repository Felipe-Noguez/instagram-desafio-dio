import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    )
}

export default MainRoutes
