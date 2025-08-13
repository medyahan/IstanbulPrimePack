import { Box, Typography, Card, Avatar, IconButton, Container, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import React from "react";
import commentsData from '../data/commentsData';

// Stil Düzenlemeleri
const CommentsWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const CommentsContainer = styled(Box)({
  display: 'flex',
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
});

const CommentSlider = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
});

interface CommentCardProps {
  active: boolean;
}

const CommentCard = styled(Card)<CommentCardProps>(({ active }) => ({
  borderRadius: '100px',
  boxShadow: active
    ? '0 10px 20px rgba(0, 0, 0, 0.10)'
    : '0 4px 10px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#fff',
  opacity: active ? 1 : 0.4,
  transform: active ? 'scale(1.04)' : 'scale(0.8)',
  transition: 'all 0.4s ease',
  width: '350px',  
  height: '130px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  margin: '40px 20px',
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  backgroundColor: theme.palette.primary.dark,
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StarRating = styled(Box)({
  display: 'flex',
  gap: '4px',
});

const StarIcon = styled('span')(({ filled }: { filled: boolean }) => ({
  color: filled ? '#FFA500' : '#ddd',
  fontSize: '0.7rem'
}));

const CustomerCommentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const isMobile = useMediaQuery('(max-width:600px)');  // Responsive kontrol
  const cardWidth = isMobile ? 280 : 350;               // Küçük ekran için daraltma

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === commentsData.comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? commentsData.comments.length - 1 : prevIndex - 1
    );
  };

  const getSlidePosition = () => {
    if (isMobile) return activeIndex; // Küçük ekranlarda tekli görünüm
    return activeIndex === 0 ? 0 : activeIndex - 1; // Büyük ekranlarda 3'lü görünüm
  };

  const renderStars = (rating: string) => {
    const filledStars = rating.split('★').length - 1;
    const totalStars = 5;

    return Array.from({ length: totalStars }).map((_, i) => (
      <StarIcon key={i} filled={i < filledStars}>★</StarIcon>
    ));
  };

  return (
    <CommentsWrapper>
      <Container>
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          fontWeight="bold"
          gutterBottom
        >
          {commentsData.subTitle}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: 4,
            position: 'relative',
          }}
        >
          <ArrowButton onClick={prevSlide}>
            <ArrowBackIosNewIcon />
          </ArrowButton>

          {/* Kaydırılabilir Yorum Alanı */}
          <CommentsContainer>
            <CommentSlider
              sx={{
                gap: isMobile ? '0px' : '20px',
                transform: `translateX(-${getSlidePosition() * cardWidth}px)`,
                width: `${commentsData.comments.length * cardWidth}px`,
              }}
            >
              {commentsData.comments.map((comment, index) => (
                <CommentCard
                  key={comment.id}
                  active={index === activeIndex}
                >
                  <AvatarStyled />
                  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',  
    justifyContent: 'flex-start',
  }}
>
<Typography
  variant="h6"
  sx={{
    fontWeight: 'bold',
    color: 'secondary.main',
    fontSize: { xs: '0.8rem', md: '1rem' }  // Responsive boyutlandırma
  }}
>
  {comment.name}
</Typography>

                    <StarRating>
                      {renderStars(comment.rating)}
                    </StarRating>
                    <Typography
  sx={{
    fontSize: { xs: '0.6rem', md: '0.7rem' }, // Responsive font ayarı
    textAlign: 'left',
    color: 'text.secondary',
    maxWidth: '100%'
  }}
>
  {comment.comment}
</Typography>

                  </Box>
                </CommentCard>
              ))}
            </CommentSlider>
          </CommentsContainer>

          <ArrowButton onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </ArrowButton>
        </Box>

        {/* Slider Göstergesi */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {commentsData.comments.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'primary.main' : '#ddd',
                mx: 0.5,
              }}
            />
          ))}
        </Box>
      </Container>
    </CommentsWrapper>
  );
};

export default CustomerCommentsSection;
