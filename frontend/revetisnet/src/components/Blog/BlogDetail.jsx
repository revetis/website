import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBlogsAPI from "../../services/blogServices";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Container,
  Skeleton,
  Alert,
} from "@mui/material";

function BlogDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const api = new GetBlogsAPI();
        const allBlogs = await api.getAllBlogPosts(i18n.language);
        const foundBlog = allBlogs.find((item) => item.slug === slug);
        if (!foundBlog) throw new Error("Blog bulunamadı");
        setBlog(foundBlog);
      } catch (err) {
        setError(err.message || "Blog detayı yüklenemedi");
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, i18n.language]);

  if (loading)
    return (
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Skeleton variant="text" height={60} />
        <Skeleton
          variant="rectangular"
          height={300}
          sx={{ my: 3, borderRadius: 1 }}
        />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="60%" />
      </Container>
    );

  if (error)
    return (
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6, color: "white" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {blog.title}
      </Typography>

      <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
        {blog.categories?.map((cat) => (
          <Chip key={cat} label={cat} color="primary" size="small" />
        ))}
        {blog.tags?.map((tag) => (
          <Chip
            key={tag.id}
            label={`#${tag.name}`}
            variant="outlined"
            size="small"
            sx={{ borderColor: "white", color: "white" }}
          />
        ))}
      </Stack>

      <Typography variant="subtitle2" mb={3} color="rgba(255,255,255,0.7)">
        İzlenme: {blog.views || 0}
      </Typography>

      {blog.image && (
        <Box
          component="img"
          src={blog.image}
          alt={blog.title}
          sx={{ width: "100%", maxHeight: 400, objectFit: "cover", mb: 3 }}
        />
      )}

      <Typography
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: blog.content }}
        sx={{ lineHeight: 1.7 }}
      />
    </Container>
  );
}

export default BlogDetail;
