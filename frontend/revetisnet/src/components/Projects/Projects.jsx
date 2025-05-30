import React, { useEffect, useState, useCallback } from "react";
import GetProjectsAPI from "../../services/projects.js";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  DialogTitle,
  Skeleton,
  Typography,
  Alert,
  Grid,
  Chip,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { Container } from "@mui/material";
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";

function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const api = new GetProjectsAPI();
      const data = await api.getAllProjects();
      setProjects(data || []);
    } catch (err) {
      console.error("Proje yükleme hatası:", err);
      setError(err.message || t("unknown_error"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleRetry = () => {
    fetchProjects();
  };

  const handleImageError = (event) => {
    event.target.src = "/placeholder-image.jpg"; 
  };

  if (loading) {
    return (
      <Container maxWidth="lg" className="mx-auto px-4 py-8 min-h-screen">
        <DialogTitle
          sx={{
            fontSize: "24px",
            textAlign: "start",
            color: "white",
            fontFamily: "unset",
            mb: 2,
          }}
        >
          {t("Projects")}
        </DialogTitle>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                display: "flex",
                flexDirection: "row",
                height: 280,
                mb: 3,
              }}
            >
              <Skeleton
                variant="rectangular"
                width={300}
                height="100%"
                sx={{ bgcolor: "grey.800", flexShrink: 0 }}
              />
              <Box sx={{ flex: 1, p: 3 }}>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem", bgcolor: "grey.800", mb: 2 }}
                />
                <Skeleton
                  variant="text"
                  height={80}
                  sx={{ bgcolor: "grey.800", mb: 2 }}
                />
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                  <Skeleton
                    variant="rounded"
                    width={60}
                    height={24}
                    sx={{ bgcolor: "grey.800" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={80}
                    height={24}
                    sx={{ bgcolor: "grey.800" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={50}
                    height={24}
                    sx={{ bgcolor: "grey.800" }}
                  />
                </Box>
                <Skeleton
                  variant="rounded"
                  width={120}
                  height={36}
                  sx={{ bgcolor: "grey.800" }}
                />
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Alert
            severity="error"
            sx={{
              bgcolor: "rgba(244, 67, 54, 0.1)",
              color: "white",
              "& .MuiAlert-icon": { color: "#f44336" },
            }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={handleRetry}
                startIcon={<RefreshIcon />}
              >
                {t("retry") || "Tekrar Dene"}
              </Button>
            }
          >
            {t("error")}: {error}
          </Alert>
        </Box>
      </Container>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <Container maxWidth="lg">
        <DialogTitle
          sx={{
            fontSize: "24px",
            textAlign: "start",
            color: "white",
            fontFamily: "unset",
            mb: 2,
          }}
        >
          {t("Projects")}
        </DialogTitle>
        <Alert
          severity="info"
          sx={{
            bgcolor: "rgba(33, 150, 243, 0.1)",
            color: "white",
            "& .MuiAlert-icon": { color: "#2196f3" },
          }}
        >
          {t("no_projects") || "Henüz proje bulunmamaktadır."}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4 }}>
        <DialogTitle
          sx={{
            fontSize: "32px",
            textAlign: "center",
            color: "white",
            fontFamily: "unset",
            mb: 1,
            fontWeight: "bold",
          }}
        >
          {t("Projects")}
        </DialogTitle>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {projects.map((project, index) => (
          <Card
            key={project.id || index}
            sx={{
              width: "100%",
              background: "transparent",
              color: "white",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, 
              height: { xs: "auto", sm: 280 }, 
              mb: 3,
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(138, 43, 226, 0.3)",
              },
            }}
          >
            {/* Sol taraf - Image */}
            <CardMedia
              sx={{
                width: { xs: "100%", sm: 300 }, 
                height: { xs: 200, sm: "100%" },
                objectFit: "contain",
                backgroundColor: "black",
                flexShrink: 0,
              }}
              component="img"
              alt={project.title || t("project_image")}
              image={project.image || "/placeholder-image.jpg"}
              onError={handleImageError}
            />

            {/* Sağ taraf - Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                p: { xs: 2, sm: 3 },
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      lineHeight: 1.3,
                      fontSize: "1.5rem",
                    }}
                  >
                    {project.title || t("untitled_project")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      lineHeight: 1.6,
                      fontSize: "1rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description || t("no_description")}
                  </Typography>

                  {/* Teknoloji etiketleri */}
                  {project.technologies && project.technologies.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              bgcolor: "rgba(138, 43, 226, 0.2)",
                              color: "white",
                              fontSize: "0.8rem",
                            }}
                          />
                        ))}
                      {project.technologies.length > 4 && (
                        <Chip
                          label={`+${project.technologies.length - 4}`}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            color: "grey.300",
                            fontSize: "0.8rem",
                          }}
                        />
                      )}
                    </Box>
                  )}

                  {/* Proje durumu */}
                  {project.status && (
                    <Chip
                      label={project.status}
                      size="medium"
                      color={
                        project.status === "completed" ? "success" : "warning"
                      }
                      sx={{ mb: 2 }}
                    />
                  )}
                </Box>

                {/* Alt kısım - Buttonlar */}
                <CardActions sx={{ p: 0, justifyContent: "flex-start" }}>
                  {project.link && (
                    <Tooltip title={t("view_project") || "Projeyi Görüntüle"}>
                      <Button
                        sx={{
                          color: "white",
                          bgcolor: "purple",
                          fontSize: "14px",
                          px: 3,
                          py: 1,
                          mr: 2,
                          "&:hover": {
                            bgcolor: "rgba(138, 43, 226, 0.8)",
                          },
                        }}
                        variant="contained"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LaunchIcon />}
                      >
                        {t("Details")}
                      </Button>
                    </Tooltip>
                  )}

                  {project.github && (
                    <Tooltip title={t("view_source") || "Kaynak Kodu"}>
                      <IconButton
                        sx={{
                          color: "white",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                          },
                        }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
