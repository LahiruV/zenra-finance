"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./about/page";

export default function CustomRouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}