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
  <title>Ana Sayfa | Istanbul Prime Pack</title>
  <meta name="description" content="Yaratıcı ambalaj çözümleri ve kaliteli baskı hizmetleriyle Istanbul Prime Pack, markanızı en iyi şekilde yansıtır." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Ana Sayfa | Istanbul Prime Pack" />
  <meta property="og:description" content="Istanbul Prime Pack olarak yaratıcı baskı ve ambalaj çözümleri sunuyoruz. Hemen bizimle iletişime geçin!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.istanbulprimepack.com" />
  <link rel="canonical" href="https://www.istanbulprimepack.com" />

  {/* Structured Data (Organization + WebSite) */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Istanbul Prime Pack",
      "url": "https://www.istanbulprimepack.com",
      "logo": "https://www.istanbulprimepack.com/images/logo.svg",
      "sameAs": [
        "https://www.instagram.com/istanbulprimepack",
        "https://www.linkedin.com/company/istanbulprimepack"
      ]
    }`}
  </script>
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Istanbul Prime Pack",
      "url": "https://www.istanbulprimepack.com"
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
