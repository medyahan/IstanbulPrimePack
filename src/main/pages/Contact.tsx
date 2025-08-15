import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
  Modal,
  IconButton,
  CircularProgress
} from "@mui/material";
import Layout from "../components/Layout";
import ReusableBackground from "../components/ReusableBackground";
import contactData from "../data/contactData";
import { useTheme } from "@mui/material/styles";
import emailjs from 'emailjs-com';
import { CheckCircle, Close } from '@mui/icons-material';
import { Helmet } from "react-helmet-async";
import React from "react";
import { Link } from "react-router-dom";

const SERVICE_ID = 'service_jilgncq';
const TEMPLATE_ID = 'template_mfd5yfq';
const USER_ID = 'uyVlp4Mm4kl6tZ4vQ';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name: formData.name || "Belirtilmemiş",
      email: formData.email || "Belirtilmemiş",
      message: formData.message || "Belirtilmemiş",
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setAlertOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('E-posta gönderme hatası:', error);
      alert('E-posta gönderme hatası! Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>İletişim | Istanbul Prime Pack</title>
        <meta name="description" content="Istanbul Prime Pack ile iletişime geçin. Profesyonel baskı ve ambalaj çözümlerimiz hakkında bilgi alın." />
        <meta name="keywords" content="iletişim, istanbul prime pack, baskı, ambalaj, teklif, email, whatsapp" />
        <meta property="og:title" content="İletişim | Istanbul Prime Pack" />
        <meta property="og:description" content="Bizimle iletişime geçerek kaliteli baskı çözümlerimiz hakkında detaylı bilgi alabilirsiniz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.istanbulprimepack.com/contact" />
        <link rel="canonical" href="https://www.istanbulprimepack.com/contact" />
      </Helmet>

      <ReusableBackground>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.secondary.main}
            sx={{ mb: 2 }}
          >
            {contactData.title}
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

          <Typography
            variant="body1"
            textAlign="center"
            color={theme.palette.text.secondary}
            sx={{ maxWidth: "700px", margin: "0 auto", lineHeight: 1.6, mb: 5 }}
          >
            {contactData.description}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, textAlign: "left" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                >
                  İletişim Bilgileri
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: theme.palette.text.secondary }}>
                  <b>Adres:</b> {contactData.companyInfo.address}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                  <b>Telefon:</b> {contactData.companyInfo.phone}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                  <b>E-Posta:</b> {contactData.companyInfo.email}
                </Typography>
                <Button
                  variant="contained"
                  href={contactData.companyInfo.whatsappLink}
                  target="_blank"
                  sx={{ mt: 3, width: "100%", bgcolor: "#128C7E", color: theme.palette.secondary.contrastText,
                    "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                   }}
                >
                  WhatsApp ile İletişime Geç
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                >
                  Bize Ulaşın
                </Typography>
                <form onSubmit={handleSubmit}>
                  {contactData.formFields.map((field, index) => (
                    <TextField
                      key={index}
                      fullWidth
                      label={field.label}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      margin="normal"
                      multiline={field.type === "textarea"}
                      rows={field.type === "textarea" ? 4 : 1}
                      required
                    />
                  ))}

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ width: "100%", mt: 2 }}
                    disabled={isLoading}
                  >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Gönder'}
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, textAlign: "center"}}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color={theme.palette.secondary.main}
              sx={{ mb: 2 }}
            >
              Konumumuz
            </Typography>
            <iframe
              title="Google Maps"
              src={contactData.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>

          <Modal
            open={alertOpen}
            onClose={() => setAlertOpen(false)}
            aria-labelledby="success-modal"
            aria-describedby="success-modal-description"
            BackdropProps={{
              sx: {
                  backgroundColor: 'transparent' 
              }
            }}
          >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '400px',
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.secondary.main,
                    borderRadius: '16px',
                    boxShadow: 24,
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                <IconButton
                    onClick={() => setAlertOpen(false)}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: theme.palette.secondary.main
                    }}
                >
                    <Close />
                </IconButton>

                <CheckCircle 
                    sx={{
                        fontSize: '60px',
                        color: theme.palette.primary.dark
                    }}
                />

                <Typography 
                    variant="body1" 
                    sx={{
                        color: theme.palette.secondary.main
                    }}
                >
                    Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                </Typography>
            </Box>
          </Modal>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 10 }}>
                    Teklif almak ister misiniz? <Link to="/quote" style={{ color: theme.palette.primary.dark, fontWeight: 600 }}>Teklif Al</Link>
                    </Typography>
        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default Contact;