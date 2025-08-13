import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import achievementsData from "../data/achievementsData";

// Stil Düzenlemeleri
const AchievementsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(10, 0),
  textAlign: 'center',
}));

const NumberBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  minWidth: "150px",
  borderRadius: "16px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.08)", 
  }
});

const Number = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontWeight: 800,
  color: theme.palette.secondary.contrastText,
  letterSpacing: "2px",
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 500,
  marginTop: "8px",
  color: theme.palette.secondary.contrastText,
}));

const Divider = styled(Box)(({ theme }) => ({
  width: "6px",
  height: "6px",
  backgroundColor: theme.palette.secondary.contrastText,
  borderRadius: "50%",
  margin: "0 25px",
}));

const AchievementsSection = () => {
  const theme = useTheme();

  return (
    <AchievementsWrapper>
      <Container>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 6, color: theme.palette.primary.main }}
        >
          {achievementsData.subTitle}
        </Typography>

        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
        >
          {achievementsData.achievements.map((achievement, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NumberBox>
                <Number>{achievement.number}</Number>
                <Label>{achievement.label}</Label>
              </NumberBox>

              {/* Divider yalnızca kartların arasına eklenir */}
              {index !== achievementsData.achievements.length - 1 && (
                <Divider />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </AchievementsWrapper>
  );
};

export default AchievementsSection;
