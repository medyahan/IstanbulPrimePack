// src/data/heroData.js
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Print from '@mui/icons-material/Print';
import PeopleIcon from '@mui/icons-material/People';
import heroImage1 from "../../assets/images/illustrations/illustration-5.webp"; 
import heroImage2 from "../../assets/images/illustrations/illustration-1.webp"; 
import heroImage3 from "../../assets/images/illustrations/illustration-2.webp"; 
import heroImage4 from "../../assets/images/illustrations/illustration-3.webp"; 
import heroImage5 from "../../assets/images/illustrations/illustration-4.webp"; 
import React from "react";

const heroData = {
  title: "Yaratıcı Ambalaj\nGüvenilir Baskı\nProfesyonel Çözümler",
  description:
    "Istanbul Prime Pack olarak, markanızı en iyi şekilde temsil edecek yaratıcı ve kaliteli baskı çözümleri sunuyoruz. İster küçük işletme olun, ister büyük ölçekli üretim; her adımda yanınızdayız.",
  button: {
    text: "Teklif Al",
    link: "/quote"
  },
  features: [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: "40px" }} />,
      text: "Hızlı ve Güvenilir Üretim"
    },
    {
      icon: <Print sx={{ fontSize: "40px" }} />,
      text: "Yenilikçi Teknoloji"
    },
    {
      icon: <PeopleIcon sx={{ fontSize: "40px" }} />,
      text: "Müşteri Odaklı Yaklaşım"
    }
  ],
  images:[heroImage1, heroImage2, heroImage3, heroImage4, heroImage5]
};

export default heroData;
