import { Container, Typography, Grid, Card, Box, Divider } from "@mui/material";
import Layout from "../components/Layout";
import { useTheme } from "@mui/material/styles";
import ReusableBackground from "../components/ReusableBackground";
import CustomerCommentsSection from "../components/CustomerCommentsSection";
import referencesData from "../data/referencesData";
import { Helmet } from "react-helmet-async";

const References = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
  <title>Referanslar | Medya Ambalaj</title>
  <meta name="description" content="Medya Ambalaj olarak iş birliği yaptığımız seçkin markaları ve müşteri yorumlarını bu sayfada inceleyebilirsiniz." />
  <meta name="keywords" content="referanslar, müşteri yorumları, medya ambalaj, kurumsal iş birlikleri, ambalaj müşteri görüşleri" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Referanslar | Medya Ambalaj" />
  <meta property="og:description" content="Ambalaj sektöründe birlikte çalıştığımız firmalar ve projelere göz atın. Müşteri memnuniyetini ön planda tutuyoruz." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.medyaambalaj.com/references" />
  <link rel="canonical" href="https://www.medyaambalaj.com/references" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Referanslar",
        "description": "Medya Ambalaj olarak iş birliği yaptığımız markalar ve müşteri yorumlarını inceleyin.",
        "url": "https://www.medyaambalaj.com/references",
        "mainEntity": referencesData.logos.map((logo) => ({
          "@type": "Organization",
          "name": logo.id,
          "logo": logo.src
        }))
      })
    }}
  />
</Helmet>

      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>

          {/* Başlık */}
          <Typography
            variant="h1"
            fontWeight="bold"
            color={theme.palette.secondary.main}
            sx={{ mb: 2, letterSpacing: "1px" }}
          >
            {referencesData.title}
          </Typography>

          <Divider
            sx={{
              width: "60px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              mx: "auto",
              mb: 4,
            }}
          />

          {/* Açıklama Metni */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            {referencesData.description}
          </Typography>
          
          {/* Referans Logoları */}
          <Grid container spacing={4} justifyContent="center" sx={{mb: 10}}>
            {referencesData.logos.map(({ id, src }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    textAlign: "center",
                    height: "120px",  // Kart yüksekliği optimize edildi
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      padding: "16px",
                    }}
                  >
                    <img 
                      src={src} 
                      alt={`Medya Ambalaj müşterisi: ${id}`} 
                      style={{ maxWidth: "80%", maxHeight: "80px", objectFit: "contain" }} 
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Müşteri Yorumları */}
          <CustomerCommentsSection />

        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default References;
