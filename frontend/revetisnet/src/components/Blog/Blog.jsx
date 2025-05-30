import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function Blog({ blog }) {
  const { t } = useTranslation();
  if (!blog) return null;

  const cleanText = stripHtml(blog.content);
  const previewText =
    cleanText.length > 200 ? cleanText.slice(0, 200) + "..." : cleanText;

  return (
    <Card
      sx={{
        maxWidth: 600,
        backgroundColor: "#121212",
        color: "#fff",
        margin: "20px auto",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
      }}
    >
      <CardHeader
        title={String(blog.title).toUpperCase()}
        sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
      />
      {blog.image && (
        <CardMedia
          component="img"
          height="250"
          image={blog.image}
          alt={blog.title}
          sx={{ borderRadius: "0 0 8px 8px" }}
        />
      )}
      <CardContent>
        <Typography sx={{ mb: 2 }}>{previewText}</Typography>
        <Link to={`/blog/${blog.slug}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            {t("Details")}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default Blog;
