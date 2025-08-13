import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { 
  Container, Typography, Grid, Box, Button, Divider, 
  Table, TableBody, TableCell, TableContainer, TableRow, Paper, Chip, Stack
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import ProductImageSlider from "../components/ProductImageSlider";
import productData from "../data/productsData";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams(); 
  const theme = useTheme();

  const selectedProduct = productData.products.find(product => product.id.toString() === id);

  if (!selectedProduct) {
    return (
      <Layout>
        <ReusableBackground>
          <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
            <Typography variant="h4" color="error" fontWeight="bold">
              Ürün Bulunamadı!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
            </Typography>
          </Container>
        </ReusableBackground>
      </Layout>
    );
  }

  return (
    <Layout>
     <Helmet>
  <title>{`${selectedProduct.title} | Medya Ambalaj`}</title>
  <meta
    name="description"
    content={selectedProduct.description?.slice(0, 160) || "Kaliteli baskı ve ambalaj çözümleri için detaylara göz atın."}
  />
  <meta name="keywords" content={selectedProduct.categories.join(", ")} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${selectedProduct.title} | Medya Ambalaj`} />
  <meta property="og:description" content={selectedProduct.description?.slice(0, 160)} />
  <meta property="og:image" content={selectedProduct.images?.[0] || "https://www.medyaambalaj.com/default-og-image.jpg"} />
  <meta property="og:type" content="product" />
  <meta property="og:url" content={`https://www.medyaambalaj.com/products/${selectedProduct.id}`} />
  <link rel="canonical" href={`https://www.medyaambalaj.com/products/${selectedProduct.id}`} />

  {/* Schema.org Structured Data for Product */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": selectedProduct.title,
      "image": selectedProduct.images,
      "description": selectedProduct.description,
      "brand": {
        "@type": "Organization",
        "name": "Medya Ambalaj"
      },
      "category": selectedProduct.categories.join(", "),
      "url": `https://www.medyaambalaj.com/products/${selectedProduct.id}`
    })}
  </script>
</Helmet>


      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={6} alignItems="top">
            
            {/* Sol tarafta resim sliderı */}
            <Grid item xs={12} md={6}>
              <ProductImageSlider images={selectedProduct.images} />
            </Grid>

            {/* Sağ tarafta ürün bilgileri */}
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                fontWeight="bold" 
                color={theme.palette.secondary.main} 
                sx={{ mb: 2 }}
              >
                {selectedProduct.title}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                {selectedProduct.categories.map((category, index) => (
                  <Chip 
                    key={index} 
                    color="secondary"
                    label={category} 
                    variant="outlined"
                    sx={{backgroundColor: theme.palette.primary.light}}
                  />
                ))}
              </Stack>

              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                {selectedProduct.description}
              </Typography>

              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                component={Link}
                to={"/quote"}
              >
                Teklif Al
              </Button>
            </Grid>
          </Grid>

          {/* Teknik Özellikler & Kullanım Alanları Yan Yana */}
{(selectedProduct.specs?.length > 0 || selectedProduct.usageAreas?.length > 0) && (
  <Grid container spacing={4} sx={{ mt: 8 }}>
    
    {/* Teknik Özellikler */}
    {selectedProduct.specs && selectedProduct.specs.length > 0 && (
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h5" 
          component="h2"
          fontWeight="bold" 
          color={theme.palette.secondary.main} 
          sx={{ mb: 2 }}
        >
          Teknik Özellikler
        </Typography>
        <Divider sx={{ mb: 3, backgroundColor: theme.palette.secondary.main }} />
        <TableContainer component={Paper} sx={{ borderRadius: "8px", boxShadow: 3 }}>
          <Table>
            <TableBody>
              {selectedProduct.specs.map(({ label, value }, index) => (
                <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover } }}>
                  <TableCell sx={{ fontWeight: "bold", width: "40%" }}>{label}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    )}

    {/* Kullanım Alanları */}
    {selectedProduct.usageAreas && selectedProduct.usageAreas.length > 0 && (
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h5" 
          component="h2"
          fontWeight="bold" 
          color={theme.palette.secondary.main} 
          sx={{ mb: 2 }}
        >
          Kullanım Alanları
        </Typography>
        <Divider sx={{ mb: 3, backgroundColor: theme.palette.secondary.main }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {selectedProduct.usageAreas.map((area, index) => (
            <Chip 
              key={index}
              label={area}
              variant="filled"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: 14 }}
            />
          ))}
        </Box>
      </Grid>
    )}

  </Grid>
)}


        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default ProductDetails;
