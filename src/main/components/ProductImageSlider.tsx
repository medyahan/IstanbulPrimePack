import { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles"; // Tema desteği
import React from "react";

interface ProductImageSliderProps {
  images: string[];
}

// Özel Stil Ok Butonu (ArrowButton)
const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme(); // Tema kullanımı

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box>
      {/* Ana Ürün Görseli */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          mb: 2,
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* Sol Ok Butonu */}
        <ArrowButton
          onClick={prevImage}
          sx={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)" }}
        >
          <ArrowBackIos />
        </ArrowButton>

        {/* Sağ Ok Butonu */}
        <ArrowButton
          onClick={nextImage}
          sx={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)" }}
        >
          <ArrowForwardIos />
        </ArrowButton>
      </Box>

      {/* Küçük Resimler (Thumbnails) */}
      <Grid container spacing={1} justifyContent="center">
        {images.map((img, index) => (
          <Grid item key={index}>
            <Box
              component="img"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => selectImage(index)}
              sx={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "5px",
                border: index === currentIndex
                  ? `3px solid ${theme.palette.secondary.main}`
                  : `1px solid ${theme.palette.secondary.main}`,
                transition: "0.3s",
                "&:hover": { border: `3px solid ${theme.palette.secondary.main}` },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductImageSlider;
