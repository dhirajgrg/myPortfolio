import React from "react";
import { Route, Routes } from "react-router-dom";
import Home     from "../pages/Home";
import Projects from "../pages/Projects";
import Blog     from "../pages/Blog";
import Contact  from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes({ links }) {
  return (
    <Routes>
      <Route path="/"          element={<Home links={links} />} />
      <Route path="/projects"  element={<Projects />} />
      <Route path="/blog"      element={<Blog />} />
      <Route path="/contact"   element={<Contact />} />
      <Route path="*"          element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
