import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaletteIcon from "@mui/icons-material/Palette";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import teamPhoto from "../../assets/images/team/team.webp";
import React from "react";

const teamData = {
  title: "Ekibimiz",
  description:
    "Ambalaj üretiminde yenilikçi çözümler sunan, alanında uzman ekibimizle birlikte çalışıyoruz. Müşteri odaklı yaklaşımımız, profesyonel üretim anlayışımız ve yüksek kaliteli malzemelerle sektöre yön veriyoruz. Ekibimiz, her projeye özel çözüm üretmek için bir araya geliyor.",
  teamPhoto: teamPhoto,
  members: [
    {
      id: 1,
      name: "Mehmet Han",
      role: "Genel Müdür",
      icon: <SupervisorAccountIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
    {
      id: 3,
      name: "Murat Han",
      role: "Üretim Müdürü",
      icon: <BuildIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
    {
      id: 2,
      name: "Medya Han",
      role: "Satış ve Pazarlama Müdürü",
      icon: <BusinessCenterIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
    {
      id: 4,
      name: "Serkan Yıldız",
      role: "Kalite Kontrol Sorumlusu",
      icon: <VerifiedUserIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
    {
      id: 5,
      name: "Emre Demirel",
      role: "Grafik Tasarımcı",
      icon: <PaletteIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
    {
      id: 6,
      name: "Burcu Kaya",
      role: "Muhasebe ve Müşteri İlişkileri Uzmanı",
      icon: <SupportAgentIcon sx={{ fontSize: 60, color: "#B2C700" }} />,
    },
  ],
};

export default teamData;
