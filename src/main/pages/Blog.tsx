import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Tabs,
  Tab,
  CardActions,
  Divider,
  Pagination
} from "@mui/material";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import blogData from "../data/blogData";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "Tümü");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const itemsPerPage = 9;

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
    setPage(1);
    setSearchParams({ category: newValue, page: "1" });
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setSearchParams({ category: selectedCategory, page: value.toString() });
  };

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogData.posts
      : blogData.posts.filter((post) => post.category === selectedCategory);

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const categories = [
    "Tümü",
    ...Array.from(new Set(blogData.posts.map((post) => post.category || "Diğer")))
  ];

  useEffect(() => {
    const currentPage = Number(searchParams.get("page")) || 1;
    const currentCategory = searchParams.get("category") || "Tümü";
    setPage(currentPage);
    setSelectedCategory(currentCategory);
  }, [searchParams]);

  return (
    <Layout>
      <Helmet>
        <title>Blog | Istanbul Prime Pack</title>
        <meta name="description" content="Istanbul Prime Pack blog sayfasında baskı teknolojileri, ambalaj tasarımı ve sektör trendleri hakkında bilgi edinin." />
        <meta name="keywords" content="blog, istanbul prime pack, baskı, tasarım, ambalaj, üretim, trendler" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog | Istanbul Prime Pack" />
        <meta property="og:description" content="Baskı ve ambalaj sektöründeki en güncel yazılara Istanbul Prime Pack blog sayfasından ulaşın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.istanbulprimepack.com/blog" />
        <link rel="canonical" href="https://www.istanbulprimepack.com/blog" />
      </Helmet>

      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: theme.palette.secondary.main,
              mb: 2,
            }}
          >
            {blogData.title}
          </Typography>
          <Divider
            sx={{
              width: "60px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "0 auto",
              mb: 4
            }}
          />

          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            {blogData.description}
          </Typography>

          {/* Kategori Sekmeleri */}
          <Box sx={{ mb: 5, display: "flex", justifyContent: "center" }}>
  <Tabs
    value={selectedCategory}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
    indicatorColor="primary"
    textColor="inherit"
    sx={{
      px: { xs: 2, md: 0 },
      maxWidth: "100%",
      "& .MuiTabs-flexContainer": {
        justifyContent: { xs: "flex-start", md: "center" },
      },
      "& .MuiTab-root": {
        fontWeight: "bold",
        textTransform: "none",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        "&.Mui-selected": {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "50px"
        },
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "transparent",
      }
    }}
  >
    {categories.map((category, index) => (
      <Tab key={index} label={category} value={category} />
    ))}
  </Tabs>
</Box>

          {/* Blog Kartları */}
          <Grid container spacing={4} justifyContent="flex-start">
            {paginatedPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    backgroundColor: theme.palette.background.paper,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)"
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={post.image || "/default-image.jpg"}
                    alt={`Blog: ${post.title}`}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={theme.palette.secondary.main}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {post.excerpt}
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{
                      justifyContent: "center",
                      pb: 2,
                      mt: "auto"
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/blog/${post.id}`)}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        "&:hover": { bgcolor: theme.palette.primary.dark }
                      }}
                    >
                      Devamını Oku
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Sayfalama */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={Math.ceil(filteredPosts.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 10 }}>
          Ürün çözümlerimize göz atmak isterseniz <Link to="/products" style={{ color: theme.palette.primary.dark, fontWeight: 600 }}>ürünlerimizi inceleyin</Link>
          </Typography>

        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default Blog;
