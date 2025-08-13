import logo from '../../assets/logo/logo-horizontal-light.png';


const headerData = {
    logo: logo,
    menuItems: [
      { label: "Anasayfa", path: "/" },
      {
        label: "Kurumsal",
        subMenu: [
          { label: "Hakkımızda", path: "/about" },
          { label: "Referanslar", path: "/references" },
          { label: "Ekibimiz ve Üretim Süreci", path: "/team-and-production" }
        ]
      },
      { label: "Hizmetler", path: "/services" },
      { label: "Ürünler", path: "/products" },
      { label: "Blog", path: "/blog" },
      { label: "SSS", path: "/faq" },
      { label: "İletişim", path: "/contact" }
    ],
    quoteButton: {
      label: "Teklif Al",
      path: "/quote"
    }
  };
  
  export default headerData;
  