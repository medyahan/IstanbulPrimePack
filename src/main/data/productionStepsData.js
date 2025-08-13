import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrintIcon from '@mui/icons-material/Print';
import CutIcon from '@mui/icons-material/ContentCut';
import BrandingIcon from '@mui/icons-material/BrandingWatermark';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from "react";

const productionSteps = {
  title: "Üretim Sürecimiz",
  description:
  "Medya Ambalaj olarak üretim sürecimizi yedi temel aşamada yürütüyoruz. Müşteri taleplerine göre özelleştirilmiş çözümler sunarak kaliteli ve estetik ambalaj ürünleri üretiyoruz. Her adımda kalite, hassasiyet ve müşteri memnuniyetini ön planda tutuyoruz.",
  steps: [
    {
      id: 1,
      step: "1. İhtiyaç Analizi ve Tasarım",
      description: "Müşterilerimizin talepleri doğrultusunda özel tasarım ve baskı çözümleri geliştiriyoruz. Ambalajın boyutları, renk seçenekleri ve kağıt türü belirlenerek üretim sürecinin ilk adımı tamamlanır. Bu aşamada, grafik tasarım ekibimiz müşterilerimize görsel örnekler sunar.",
      icon: <DesignServicesIcon fontSize="large" color='white' />,
    },
    {
      id: 2,
      step: "2. Malzeme Seçimi",
      description: "Ürünlerimizde dayanıklılığı sağlamak için en kaliteli kağıt, karton ve plastik malzemeler özenle seçilir.",
      icon: <InventoryIcon fontSize="large" color='white' />,
    },
    {
      id: 3,
      step: "3. Baskı ve Üretim",
      description: "Son teknolojiye sahip makinelerimizle yüksek çözünürlüklü baskı işlemi gerçekleştirilir. Üretim sürecinde ofset, dijital ve flekso baskı teknikleri kullanılarak kaliteli ve uzun ömürlü ürünler üretilir.",
      icon: <PrintIcon fontSize="large" color='white' />,
    },
    {
      id: 4,
      step: "4. Kesim ve Katlama",
      description: "Özel kesim kalıpları ve katlama makineleri kullanılarak ürünlerin hassas ve istenilen ölçülerde şekillendirilmesi sağlanır. Bu aşamada ürünlerin işlevselliği ve estetik yapısı göz önünde bulundurulur.",
      icon: <CutIcon fontSize="large" color='white' />,
    },
    {
      id: 5,
      step: "5. Özel Kaplama ve Marka Kimliği",
      description: "Ambalajlarınızın görsel etkisini artırmak için laminasyon, UV lak, varak yaldız ve kabartma baskı gibi özel işlemler uygulanır. Bu yöntemlerle markanızın kimliği vurgulanır ve ürünlerinizin raflarda öne çıkması sağlanır.",
      icon: <BrandingIcon fontSize="large" color='white' />,
    },
    {
      id: 6,
      step: "6. Kalite Kontrol ve Paketleme",
      description: "Üretilen ambalajlar kalite kontrol ekibimiz tarafından titizlikle incelenir. Ürünlerin sağlamlığı, renk bütünlüğü ve tasarım detayları kontrol edildikten sonra paketlenir ve sevkiyata hazırlanır.",
      icon: <ChecklistIcon fontSize="large" color='white' />,
    },
    {
      id: 7,
      step: "7. Teslimat",
      description: "Müşterilerimizin talebine göre, ürünler güvenli bir şekilde paketlenerek sevkiyata gönderilir. Teslimat sürecinde ürünlerin eksiksiz ve hatasız şekilde ulaştırılmasına özen gösteririz.",
      icon: <LocalShippingIcon fontSize="large" color='white' />,
    },
  ],
};

export default productionSteps;
