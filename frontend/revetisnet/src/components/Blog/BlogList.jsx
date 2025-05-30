import React, { useEffect, useState, useCallback } from "react";
import GetBlogsAPI from "../../services/blogServices.js";
import { useTranslation } from "react-i18next";
import BlogCard from "./Blog";
import { Typography, CircularProgress, Alert, Box } from "@mui/material";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const api = new GetBlogsAPI();
      const data = await api.getAllBlogPosts(i18n.language);
      setBlogs(data || []);
    } catch (err) {
      console.error("Bloglar yüklenemedi:", err);
      setError(t("Bloglar yüklenemedi"));
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, [i18n.language, t]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={256}
        color="text.secondary"
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={256}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  if (blogs.length === 0)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={256}
        color="text.secondary"
      >
        {t("Blog bulunamadı")}
      </Box>
    );

  return (
    <div className="container mx-auto px-4 py-8  text-white">
      <Typography variant="h3" className="mb-6">
        {t("Blogs")}
      </Typography>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
