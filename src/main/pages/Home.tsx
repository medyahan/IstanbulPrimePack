import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import ReferencesSection from "../components/ReferencesSection";
import CustomerCommentsSection from "../components/CustomerCommentsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <Layout>
      <Helmet>
  <title>Ana Sayfa | Medya Ambalaj</title>
  <meta name="description" content="Yaratıcı ambalaj çözümleri ve kaliteli baskı hizmetleriyle Medya Ambalaj, markanızı en iyi şekilde yansıtır." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Ana Sayfa | Medya Ambalaj" />
  <meta property="og:description" content="Medya Ambalaj olarak yaratıcı baskı ve ambalaj çözümleri sunuyoruz. Hemen bizimle iletişime geçin!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.medyaambalaj.com" />
  <link rel="canonical" href="https://www.medyaambalaj.com" />

  {/* Structured Data (Organization + WebSite) */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Medya Ambalaj",
      "url": "https://www.medyaambalaj.com",
      "logo": "https://www.medyaambalaj.com/images/logo.svg",
      "sameAs": [
        "https://www.instagram.com/medyaambalaj",
        "https://www.linkedin.com/company/medyaambalaj"
      ]
    }`}
  </script>
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Medya Ambalaj",
      "url": "https://www.medyaambalaj.com"
    }`}
  </script>
</Helmet>

      <Hero/>
      <ServicesSection/>
      <FeaturedProductsSection/>
      <AboutSection/>
      <AchievementsSection/>
      <ReferencesSection/>
      <CustomerCommentsSection/>
    </Layout>
  );
};

export default Home;
