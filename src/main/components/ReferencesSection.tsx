import { Box, Container, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import referencesData from '../data/referencesData';

// Kaydırma animasyonu
const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Stil Düzenlemeleri
const ReferencesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  position: 'relative',

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '15%',
    zIndex: 2,
  },
  '&::before': {
    left: 0,
    background: `linear-gradient(to right, ${theme.palette.background.default} 0%, transparent 100%)`,
  },
  '&::after': {
    right: 0,
    background: `linear-gradient(to left, ${theme.palette.background.default} 0%, transparent 100%)`,
  }
}));

const LogoTrack = styled(Box)({
  display: 'flex',
  gap: '80px',
  animation: `${scrollAnimation} 30s linear infinite`,
});

const Logo = styled('img')({
  height: '70px',
  objectFit: 'contain',
  opacity: 0.6,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  }
});

const ReferencesSection = () => {
  return (
    <ReferencesWrapper>
      <Container>
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          fontWeight="bold"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {referencesData.title}
        </Typography>

        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          color="text.primary"
          sx={{ mb: 6 }}
        >
          {referencesData.subTitle}
        </Typography>

        <LogoContainer>
          <LogoTrack>
            {referencesData.logos.map((logo) => (
              <Logo key={logo.id} src={logo.src} alt={`Logo ${logo.id}`} />
            ))}

            {/* Sonsuz döngü için logoları tekrar ekledik */}
            {referencesData.logos.map((logo) => (
              <Logo key={`repeat-${logo.id}`} src={logo.src} alt={`Logo ${logo.id}`} />
            ))}
          </LogoTrack>
        </LogoContainer>
      </Container>
    </ReferencesWrapper>
  );
};

export default ReferencesSection;
