import { Container, Typography, Box, Grid, Paper, Divider, CardMedia, Avatar } from "@mui/material";
import Layout from "../components/Layout";
import { useTheme } from "@mui/material/styles";
import ReusableBackground from "../components/ReusableBackground";
import aboutData from "../data/aboutData";
import achievementsData from "../data/achievementsData";
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";

const About = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
        <title>Hakkımızda | Medya Ambalaj</title>
        <meta
          name="description"
          content="Medya Ambalaj olarak yaratıcı ambalaj çözümleri, vizyonumuz ve misyonumuz ile matbaa sektöründe fark yaratıyoruz. Neden bizi tercih etmelisiniz, öğrenin."
        />
        <meta name="keywords" content="ambalaj, matbaa, baskı, özel kutu, tasarım, vizyon, misyon, medya ambalaj" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hakkımızda | Medya Ambalaj" />
        <meta property="og:description" content="Matbaa ve baskı sektöründe Medya Ambalaj'ın vizyonu, misyonu ve başarıları hakkında bilgi edinin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.medyaambalaj.com/hakkimizda" />
        <meta property="og:image" content="https://www.medyaambalaj.com/images/og-default.jpg" />
        <link rel="canonical" href="https://www.medyaambalaj.com/about" />
      </Helmet>
      <ReusableBackground>
        <Box sx={{ minHeight: "100vh", py: 4, mb: 5, textAlign: "center" }}>
          <Container maxWidth="lg">

            {/* Başlık */}
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: theme.palette.secondary.dark,
                textAlign: "center",
                letterSpacing: "2px",
                mb: 2,
              }}
            >
              {aboutData.title}
            </Typography>

            <Divider
              sx={{
                width: "60px",
                height: "4px",
                backgroundColor: theme.palette.secondary.dark,
                margin: "0 auto",
                mb: 8
              }}
            />

            {/* Biz Kimiz + Achievements */}
            <Grid container spacing={4} alignItems="center" justifyContent="space-between" sx={{ mb: 10 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  component="h2"
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                  sx={{ mb: 2, textAlign: "left" }}
                >
                  {aboutData.longContent.whoAreWe.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.secondary.main,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    textAlign: "left",
                    mb: 4
                  }}
                >
                  {aboutData.longContent.whoAreWe.description}
                </Typography>

                {/* Achievements */}
                <Box>
                  <Grid container spacing={2}>
                    {achievementsData.achievements.map((item, index) => (
                      <Grid item xs={6} md={4} key={index}>
                        <Typography
                          variant="h5"
                          color={theme.palette.secondary.dark}
                          fontWeight="bold"
                          sx={{ textAlign: "left" }}
                        >
                          {item.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.secondary.main, textAlign: "left" }}
                        >
                          {item.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <CardMedia
                  component="img"
                  image={aboutData.longContent.whoAreWe.image}
                  alt={aboutData.longContent.whoAreWe.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "24px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </Grid>
            </Grid>

            {/* Vizyon ve Misyon Birleşik */}
            <Grid item xs={12} sx={{ mb: 6 }}>
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "24px",
                  backgroundColor: theme.palette.primary.main,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" }
                }}
              >
                <Typography
                  component="h2"
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                  sx={{ mb: 3 }}
                >
                  Vizyon & Misyon
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.secondary.main,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    mb: 2
                  }}
                >
                  <strong>{aboutData.longContent.vision.title}:</strong> {aboutData.longContent.vision.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.secondary.main,
                    lineHeight: 1.8,
                    fontSize: "1rem"
                  }}
                >
                  <strong>{aboutData.longContent.mission.title}:</strong> {aboutData.longContent.mission.description}
                </Typography>
              </Paper>
            </Grid>

            {/* Neden Biz? */}
            <Typography
              component="h2"
              variant="h4"
              fontWeight="bold"
              color={theme.palette.secondary.dark}
              sx={{ mt: 8, mb: 2 }}
            >
              Neden Biz?
            </Typography>

            <Divider
              sx={{
                width: "60px",
                height: "4px",
                backgroundColor: theme.palette.secondary.dark,
                mx: "auto",
                mb: 4,
              }}
            />

            <Grid container spacing={4} justifyContent="center">
              {aboutData.shortContent.map(({ heading, text }, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={4}
                    sx={{
                      padding: 3,
                      textAlign: "center",
                      borderRadius: "16px",
                      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: theme.palette.primary.dark,
                        margin: "0 auto",
                        mb: 2,
                      }}
                    >
                      {index + 1}
                    </Avatar>

                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                      {heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            
          </Container>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 10 }}>
  Hizmet detaylarımızı görmek için <Link to="/services" style={{ color: theme.palette.primary.dark, fontWeight: 600 }}>Hizmetlerimiz</Link> sayfasına göz atın.
</Typography>
        </Box>
      </ReusableBackground>
    </Layout>
  );
};

export default About;
