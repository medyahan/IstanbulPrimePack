import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import aboutData from '../data/aboutData'; 

// Stil Düzenlemeleri
const AboutWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(10, 0),
  borderRadius: '20px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px',
  padding: theme.spacing(4),
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
  textAlign: 'left',
}));

const AboutSection = () => {
  return (
    <AboutWrapper>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* SOL TARAF: BAŞLIK */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              color="secondary"
              fontWeight="bold"
              gutterBottom
              align="left"
              sx={{ textTransform: "uppercase" }}
            >
              Neden Biz?
            </Typography>

            <Typography
              variant="h4"
              fontWeight={700}
              align="left"
              sx={{ mb: 4 }}
            >
              {aboutData.subtitle}
            </Typography>
          </Grid>

          {/* SAĞ TARAF: İÇERİK */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {aboutData.shortContent.map((section, index) => (
                <Grid item xs={12} key={index}>
                  <ContentBox>
                    <Typography variant="h6" fontWeight="bold">
                      {section.heading}
                    </Typography>
                    <Typography variant="body1" color='secondary.main' sx={{ mt: 2 }}>
                      {section.text}
                    </Typography>
                  </ContentBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
