import React from "react";
import { Container, Typography, Box, Button, CardMedia } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogData from "../data/blogData";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const selectedPost = blogData.posts.find((post) => post.id === id);

  if (!selectedPost) {
    return (
      <Layout>
        <ReusableBackground>
          <Container sx={{ textAlign: "center", py: 10 }}>
            <Helmet>
              <title>Makale Bulunamadı | Istanbul Prime Pack</title>
              <meta name="robots" content="noindex" />
            </Helmet>
            <Typography variant="h5" color="error">
              Makale bulunamadı.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/blog")}
              sx={{ mt: 2 }}
            >
              Bloga Dön
            </Button>
          </Container>
        </ReusableBackground>
      </Layout>
    );
  }

  const formatContent = (content: string) =>
    content.split("\n").map((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("### ")) {
        return (
          <Typography
            key={index}
            variant="h5"
            fontWeight="bold"
            sx={{ mt: 4, mb: 2, color: "secondary.main" }}
          >
            {trimmedLine.replace("### ", "")}
          </Typography>
        );
      } else if (trimmedLine.startsWith("**")) {
        return (
          <Typography
            key={index}
            variant="subtitle1"
            fontWeight="bold"
            color="secondary.main"
            sx={{ mt: 2 }}
          >
            {trimmedLine.replace(/\*\*/g, "")}
          </Typography>
        );
      } else if (trimmedLine.startsWith("- ")) {
        return (
          <Box
            key={index}
            component="li"
            sx={{
              ml: 3,
              mt: 1,
              color: "text.primary",
              "&::marker": { color: "secondary.main", fontWeight: "bold" }
            }}
          >
            {trimmedLine.replace("- ", "")}
          </Box>
        );
      } else if (trimmedLine.startsWith(">")) {
        return (
          <Typography
            key={index}
            variant="body1"
            sx={{
              backgroundColor: "#fff",
              color: "secondary.main",
              padding: "8px 16px",
              borderLeft: "4px solid #B2C700",
              mt: 5,
              borderRadius: "6px"
            }}
          >
            {trimmedLine.replace("> ", "")}
          </Typography>
        );
      }

      return (
        <Typography key={index} variant="body1" color="secondary.main" sx={{ mb: 1 }}>
          {trimmedLine}
        </Typography>
      );
    });

  return (
    <Layout>
      <Helmet>
        <title>{selectedPost.title} | Istanbul Prime Pack</title>
        <meta name="description" content={selectedPost.excerpt || selectedPost.title} />
        <meta property="og:title" content={`${selectedPost.title} | Istanbul Prime Pack`} />
        <meta property="og:description" content={selectedPost.excerpt || selectedPost.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.istanbulprimepack.com/blog/${selectedPost.id}`} />
        {selectedPost.image && <meta property="og:image" content={selectedPost.image} />}
        <link rel="canonical" href={`https://www.istanbulprimepack.com/blog/${selectedPost.id}`} />
      </Helmet>

      <ReusableBackground>
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "grey.800", mb: 3 }}
          >
            {selectedPost.title}
          </Typography>

          {selectedPost.image && (
            <CardMedia
              component="img"
              height="300"
              image={selectedPost.image}
              alt={`Blog görseli: ${selectedPost.title}`}
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                mb: 4,
                objectFit: "cover",
                objectPosition: "bottom"
              }}
            />
          )}

          {/* İçerik */}
          <Box
            sx={{
              lineHeight: 1.8,
              color: "text.secondary",
              textAlign: "justify",
              whiteSpace: "pre-line",
              mb: 3
            }}
          >
            {formatContent(selectedPost.content)}
          </Box>

          {/* Bloga Dön Butonu */}
          <Box sx={{ textAlign: "center", mt: "auto", py: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/blog")}
              sx={{
                backgroundColor: "primary.main",
                color: "#000",
                fontWeight: "bold",
                padding: "10px 30px",
                borderRadius: "20px",
                "&:hover": { backgroundColor: "primary.dark" }
              }}
            >
              Bloga Dön
            </Button>
          </Box>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 10 }}>
          Diğer hizmetlerimizi de keşfetmek ister misiniz? <Link to="/services" style={{ color: "#B2C700", fontWeight: 600 }}>Hizmetlerimiz</Link> 
          </Typography>
        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default BlogDetails;
