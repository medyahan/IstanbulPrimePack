import { Container, Typography, Grid, Card, Box, Divider } from "@mui/material";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import { useTheme } from "@mui/material/styles";
import teamData from "../data/teamData";
import productionSteps from "../data/productionStepsData";
import { Helmet } from "react-helmet-async";

const TeamAndProduction = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
  <title>Ekibimiz ve Üretim Süreci | Medya Ambalaj</title>
  <meta
    name="description"
    content="Medya Ambalaj’ın yaratıcı ve uzman ekibini tanıyın. Üretim süreçlerimizi yakından inceleyerek kaliteli baskı çözümlerimizin arkasındaki sistemi keşfedin."
  />
  <meta
    name="keywords"
    content="medya ambalaj, ekip, üretim süreci, baskı aşamaları, profesyonel ambalaj, üretim kalitesi"
  />
  <meta property="og:title" content="Ekibimiz ve Üretim Süreci | Medya Ambalaj" />
  <meta
    property="og:description"
    content="Uzman ekibimiz ve kaliteli üretim sürecimizle Medya Ambalaj, markanız için en iyi baskı çözümlerini sunar."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.medyaambalaj.com/team-and-production" />
  <link rel="canonical" href="https://www.medyaambalaj.com/team-and-production" />
</Helmet>

      <ReusableBackground>
        <Container maxWidth="lg" sx={{ py: 4, mb: 10, textAlign: "center", borderRadius: "16px" }}>

          {/* Ekip Tanıtımı */}
          <Typography
            variant="h1"
            fontWeight="bold"
            color={theme.palette.secondary.dark}
            sx={{ mb: 2, letterSpacing: "2px" }}
          >
            {teamData.title}
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

          {/* Açıklama ve Fotoğraf Yan Yana */}
          <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  textAlign: "left"
                }}
              >
                {teamData.description}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={teamData.teamPhoto}
                alt="Ekibimiz"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} justifyContent="center">
            {teamData.members.map(({ id, name, role, icon }) => (
              <Grid item xs={12} md={4} key={id}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    padding: 2,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Box aria-label={`İkon: ${name}`} role="img" sx={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {icon}
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold">{name}</Typography>
                  <Typography variant="body2" color="text.secondary">{role}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Üretim Süreci */}
          <Typography
            variant="h2"
            fontWeight="bold"
            color={theme.palette.secondary.main}
            sx={{ mt: 12, mb: 2, letterSpacing: "1px" }}
          >
            {productionSteps.title}
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

          <Typography
            variant="body1"
            sx={{
              maxWidth: "750px",
              margin: "0 auto",
              color: theme.palette.secondary.main,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            {productionSteps.description}
          </Typography>

          <Grid container spacing={4} direction="column">
            {productionSteps.steps.map(({ id, step, description, icon }) => (
              <Grid item key={id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    textAlign: "left",
                    backgroundColor: theme.palette.background.paper,
                    padding: 3,
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.02)" }
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.dark,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "1.5rem",
                      flexShrink: 0
                    }}
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" color={theme.palette.secondary.main}>
                      {step}
                    </Typography>
                    <Typography variant="body2" color={theme.palette.text.secondary}>
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default TeamAndProduction;