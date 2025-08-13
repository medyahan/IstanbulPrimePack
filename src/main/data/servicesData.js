// src/data/servicesData.js
import { Print, LocalPrintshop, Brush, Layers, Settings, Drafts } from "@mui/icons-material";
import React from "react";

const servicesData = {
    title: "Hizmetlerimiz",
    subTitle: "Ambalaj ve Baskı Çözümlerinde Profesyonel Hizmet",
    description: "Medya Ambalaj olarak, matbaa sektöründeki deneyimimizle işletmenizin ihtiyaçlarına yönelik yenilikçi ve kaliteli çözümler sunuyoruz. Ofset, dijital baskı ve ambalaj tasarımlarında mükemmelliği hedefliyoruz.",
    services: [
      {
        id: 1,
        title: "Ofset Baskı",
        description: "Yüksek hacimli ve kaliteli baskı ihtiyaçlarınız için ofset baskı hizmetimiz, net ve keskin detaylarla mükemmel sonuçlar sunar. Katalog, broşür, afiş ve kurumsal tanıtım materyalleri için idealdir.",
        icon: <LocalPrintshop fontSize="large" />,
      },
      {
        id: 2,
        title: "Dijital Baskı",
        description: "Acil baskı ihtiyaçlarınız için dijital baskı hizmetimiz, hızlı ve esnek çözümler sunar. Kısa süreli kampanyalar, davetiyeler ve numune üretimleri için uygundur.",
        icon: <Print fontSize="large" />,
      },
      {
        id: 3,
        title: "Ambalaj Çözümleri",
        description: "Markanızın prestijini artıracak ve ürünlerinizi koruyacak dayanıklı, estetik ve fonksiyonel ambalaj çözümleri üretiyoruz. Gıda, kozmetik ve e-ticaret sektörüne özel çözümlerimizle öne çıkıyoruz.",
        icon: <Drafts fontSize="large" />,
      },
      {
        id: 4,
        title: "Grafik Tasarım",
        description: "Marka kimliğinizi güçlendirecek özgün ve dikkat çekici tasarımlar hazırlıyoruz. Logo tasarımı, kurumsal kimlik ve ürün ambalajları için yaratıcı çözümler geliştiriyoruz.",
        icon: <Brush fontSize="large" />,
      },
      {
        id: 5,
        title: "Etiket Baskı",
        description: "Ürünlerinize şıklık ve profesyonellik katacak, dayanıklı ve kaliteli etiket çözümleriyle markanızın imajını güçlendiriyoruz. Farklı malzeme ve tasarım seçenekleriyle taleplerinize uygun etiket baskıları sağlıyoruz.",
        icon: <Layers fontSize="large" />,
      },
      {
        id: 6,
        title: "Özelleştirilmiş Çözümler",
        description: "İhtiyacınıza özel tasarlanmış ambalaj ve baskı projeleriyle markanızı ön plana çıkarıyoruz. Size özel tasarımlar ve yaratıcı çözümlerle beklentilerinizi en üst seviyeye taşıyoruz.",
        icon: <Settings fontSize="large" />,
      },
]
};

export default servicesData;
