import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFoundPage";
import ProjectList from "../pages/ProjectList";
import Blogs from "../pages/Blogs";
import BlogPage from "../pages/BlogPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
    </Routes>
  );
}
