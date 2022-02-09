import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  Home, BrandMain, CardInsideViewMain } from ".";
import MainOrderForm from "../component/MainOrderForm";

export default function AppRouter() {
    return (
        <Router >
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CardInsideViewMain" element={<CardInsideViewMain />} />
                    <Route path="/BrandMain" element={<BrandMain />} />
                    <Route path="/mainOrderForm" element={<MainOrderForm />} />
                </Routes>
            </div>
        </Router>
    )
}