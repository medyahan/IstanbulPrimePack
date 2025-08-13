import { Box, Typography, Card, CardContent, CardMedia, Container, IconButton, Button, useMediaQuery} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import productsData from '../data/productsData';
import React from "react";

// Stil düzenlemeleri
const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  width: '200px',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const ProductImage = styled(CardMedia)({
  width: '100%',
  height: '180px',
  objectFit: 'contain',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  marginBottom: '8px'
});

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  }
}));

const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 960px)');
  
  // Ekran genişliğine göre kart başına gösterilecek kart sayısı
  const cardsPerView = isSmallScreen ? 1 : isMediumScreen ? 3 : 5;
  const cardWidth = isSmallScreen ? 208 : 208;

  const featuredProducts = productsData.products.filter(product => 
    productsData.featuredProductIDs.includes(product.id)
  );

  // Kaydırma fonksiyonları
  const nextSlide = () => {
    if (startIndex < featuredProducts.length - cardsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      py: 8,
      position: 'relative'
    }}>
      <Container>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.secondary.main}
          fontWeight="bold"
          gutterBottom
        >
          ÖNE ÇIKAN ÜRÜNLER        
        </Typography>

        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          color={theme.palette.text.primary}
          sx={{ mb: 6 }}
        >
         {productsData.subTitle}
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          position: 'relative'
        }}>
          {/* Oklar konumlandırıldı */}
          <ArrowButton onClick={prevSlide} sx={{ visibility: startIndex === 0 ? 'hidden' : 'visible' }}>
            <ArrowBackIosNewIcon />
          </ArrowButton>

          <Box
            sx={{
              display: 'flex',
              overflow: 'hidden',
              width: `${cardsPerView * cardWidth}px`,
              position: 'relative'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                transform: `translateX(-${startIndex * cardWidth}px)`,
                transition: 'transform 0.4s ease-in-out',
                padding: '25px 8px'
              }}
            >
              {featuredProducts.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage image={product.images[0]} />
                  <CardContent>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color={theme.palette.secondary.main}
                    >
                      {product.title}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          "&:hover": { bgcolor: theme.palette.primary.light }
                        }}
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        İncele
                      </Button>
                    </Box>
                  </CardContent>
                </ProductCard>
              ))}
            </Box>
          </Box>

          <ArrowButton
            onClick={nextSlide}
            sx={{ visibility: startIndex >= featuredProducts.length - cardsPerView ? 'hidden' : 'visible' }}
          >
            <ArrowForwardIosIcon />
          </ArrowButton>
        </Box>

        {/* Daha Fazlası Butonu */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              borderRadius: "30px",
              px: 4,
              py: 1,
              transition: "0.3s",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.secondary.main,
              },
            }}
            onClick={() => navigate('/products')} // Ürünler sayfasına yönlendirme
          >
            Daha Fazlası
            <ArrowForwardIosIcon sx={{width: 15, height: 15}}/>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
