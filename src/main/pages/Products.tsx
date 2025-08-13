import { useState, useEffect } from "react";
import {
  Container, Typography, Grid, Card, CardContent, CardMedia,
  Button, Box, Tabs, Tab, Divider, Pagination
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import productData from "../data/productsData";
import React from "react";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "Tümü");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const itemsPerPage = 20; // 4x5 ürün sayısı

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
    setPage(1); // Yeni kategori seçildiğinde sayfa başa döner
    setSearchParams({ category: newValue, page: "1" });
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setSearchParams({ category: selectedCategory, page: value.toString() });
  };

  // Seçilen kategoriye göre ürünleri filtreleme
  const filteredProducts =
    selectedCategory === "Tümü"
      ? productData.products
      : productData.products.filter((product) =>
          product.categories.includes(selectedCategory)
        );

  // Tüm Kategorileri Alma
  const categories = [
    "Tümü",
    ...Array.from(
      new Set(productData.products.flatMap((product) => product.categories || ["Diğer"]))
    )
  ];

  // Sayfalandırma için ürünleri dilimleme
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // URL değiştiğinde `page` veya `category` parametresini yeniden yükleme
  useEffect(() => {
    const currentPage = Number(searchParams.get("page")) || 1;
    const currentCategory = searchParams.get("category") || "Tümü";
    setPage(currentPage);
    setSelectedCategory(currentCategory);
  }, [searchParams]);

  return (
    <Layout>
      <Helmet>
  <title>Ürünler | Medya Ambalaj</title>
  <meta
    name="description"
    content="Medya Ambalaj'ın sunduğu baskı ve ambalaj ürünlerini keşfedin. Kaliteli üretim, özel tasarım ve hızlı teslimat avantajlarıyla hizmetinizdeyiz."
  />
  <meta
    name="keywords"
    content="ambalaj ürünleri, baskı çözümleri, kutu tasarımı, etiket, Medya Ambalaj"
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Ürünler | Medya Ambalaj" />
  <meta property="og:description" content="Yaratıcı ve kaliteli baskı çözümleriyle ürettiğimiz ambalaj ürünlerine göz atın." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.medyaambalaj.com/products" />
  <link rel="canonical" href="https://www.medyaambalaj.com/products" />

  {/* Structured Data - ItemList */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Medya Ambalaj Ürünleri",
      "url": "https://www.medyaambalaj.com/products",
      "numberOfItems": filteredProducts.length,
      "itemListElement": paginatedProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": (page - 1) * itemsPerPage + index + 1,
        "url": `https://www.medyaambalaj.com/product/${product.id}`,
        "name": product.title
      }))
    })}
  </script>
</Helmet>


      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            color={theme.palette.secondary.main}
            sx={{ mb: 2 }}
          >
            {productData.title}
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
            component="h2"
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            {productData.description}
          </Typography>

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
        justifyContent: { xs: "flex-start", md: "center" }, // mobilde sola hizalı, desktopta ortalı
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

          <Grid container spacing={4} justifyContent="flex-start">
            {paginatedProducts.map((product) => (
              <Grid item xs={6} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
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
                    height="50%"
                    image={product.images[0]}
                    alt={`Medya Ambalaj ürünü: ${product.title}`}
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color={theme.palette.secondary.main}
                    >
                      {product.title}
                    </Typography>
                  </CardContent>
                  <Box sx={{ textAlign: "center", pb: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        "&:hover": { bgcolor: theme.palette.primary.light, color: theme.palette.secondary.main }
                      }}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      İncele
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Sayfalama */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={Math.ceil(filteredProducts.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default Products;
