import { Container, Typography, Grid, Card, CardContent, Box, Divider } from "@mui/material";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import { useTheme } from "@mui/material/styles";
import servicesData from "../data/servicesData";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
  <title>Hizmetler | Istanbul Prime Pack</title>
  <meta
    name="description"
    content="Istanbul Prime Pack olarak sunduğumuz baskı, kutu tasarımı, etiket ve ambalaj çözümlerine göz atın. Kaliteli ve profesyonel hizmetlerimizle tanışın."
  />
  <meta
    name="keywords"
    content="ambalaj hizmetleri, baskı hizmeti, istanbul prime pack, kutu üretimi, etiket tasarımı, baskı çözümleri"
  />
  <meta property="og:title" content="Hizmetler | Istanbul Prime Pack" />
  <meta
    property="og:description"
    content="Baskıdan etiketlemeye, kutu tasarımından ambalaja kadar birçok hizmeti Istanbul Prime Pack güvencesiyle sunuyoruz."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.istanbulprimepack.com/services" />
  <link rel="canonical" href="https://www.istanbulprimepack.com/services" />
</Helmet>

      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
          
          {/* Başlık */}
          <Typography
            variant="h1"
            fontWeight="bold"
            color={theme.palette.secondary.main}
            sx={{
              mb: 2,
              letterSpacing: "1px",
            }}
          >
            {servicesData.title}
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

          {/* Açıklama Metni */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "750px",
              margin: "0 auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            {servicesData.description}
          </Typography>

          {/* Hizmet Kartları */}
          <Grid container spacing={4} justifyContent="center">
            {servicesData.services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    textAlign: "center",
                    minHeight: "390px",
                    py: 4,
                    px: 3,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
                    }
                  }}
                >
                  {/* İkon */}
                  <Box
                    aria-label={`${service.title} ikonu`} 
                    role="img"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: theme.palette.secondary.main,
                      backgroundColor: theme.palette.primary.main,
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      margin: "0 auto",
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <CardContent>
                    {/* Başlık */}
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight="bold"
                      color={theme.palette.secondary.main}
                      sx={{ mb: 1 }}
                    >
                      {service.title}
                    </Typography>

                    {/* Açıklama */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default Services;
