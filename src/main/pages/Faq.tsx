import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import { useTheme } from "@mui/material/styles";
import faqData from "../data/faqData";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const FAQ = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
  <title>Sıkça Sorulan Sorular | Medya Ambalaj</title>
  <meta name="description" content="Medya Ambalaj hakkında sıkça sorulan soruların cevaplarını bu sayfada bulabilirsiniz. Hizmetlerimiz, süreçler ve daha fazlası hakkında bilgi alın." />
  <meta name="keywords" content="SSS, sıkça sorulan sorular, medya ambalaj, baskı soruları, ambalaj desteği" />
  <meta property="og:title" content="Sıkça Sorulan Sorular | Medya Ambalaj" />
  <meta property="og:description" content="Medya Ambalaj hakkında sıkça merak edilen soruların cevapları burada!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.medyaambalaj.com/faq" />
  <link rel="canonical" href="https://www.medyaambalaj.com/faq" />

  {/* Structured data script */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(
        faqData.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      )}
    }`}
  </script>
</Helmet>

      <ReusableBackground>
        <Container
          maxWidth="md"
          sx={{ py: 4 }}
        >
          {/* Başlık */}
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.secondary.main}
            sx={{ mb: 2 }}
          >
            {faqData.title}
          </Typography>

          <Divider
            sx={{
              width: "60px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "0 auto",
              mb: 4
            }}
          />

          {/* Açıklama Metni */}
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 15,
            }}
          >
            {faqData.description}
          </Typography>

          {/* SSS Listesi */}
          <Box>
            {faqData.faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: theme.palette.background.paper,
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)"
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                  sx={{
                    backgroundColor: theme.palette.secondary.contrastText,
                    color: theme.palette.primary.contrastText,
                    paddingY: 1,
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                    sx={{ width: "100%" }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    borderTop: `2px solid ${theme.palette.primary.main}`,
                    padding: "16px 20px"
                  }}
                >
                  <Typography
                    variant="body2"
                    color="secondary.main"
                    sx={{
                      whiteSpace: "pre-line",
                      lineHeight: 1.6
                    }}
                    dangerouslySetInnerHTML={{
                      __html: faq.answer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 10 }}>
          Daha fazla bilgi için <Link to="/contact" style={{ color: theme.palette.primary.dark, fontWeight: 600 }}>bizimle iletişime geçin</Link>
                              </Typography>
        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default FAQ;