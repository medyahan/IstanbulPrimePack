import { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Divider,
  Modal,
  Box,
  IconButton,
  CircularProgress
} from "@mui/material";
import Layout from "../components/Layout";
import { JobTypes, PaperTypes, PaperWeights, CoatingTypes, ColorOptions, PrintingTypes, BindingTypes } from "../data/orderData";
import ReusableBackground from "../components/ReusableBackground";
import quoteData from "../data/quoteData";
import { useTheme } from "@mui/material/styles";
import { CheckCircle, Close } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet-async";

// EmailJS Tanımlamaları
const SERVICE_ID = 'service_jilgncq';
const TEMPLATE_ID = 'template_mhvh4nd';
const USER_ID = 'uyVlp4Mm4kl6tZ4vQ';

// Tip tanımı
interface QuoteFormData {
  companyName: string;
  email: string; 
  jobName: string;
  jobType: string;
  paperType: string;
  paperWeight: string;
  coatingType: string;
  bindingType: string;
  colorOption: string;
  printingType: string;
  width: string;
  height: string;
  depth: string;
  quantity: string;
  additionalRequests: string;
}

// Başlangıç verileri
const initialQuoteFormData: QuoteFormData = {
  companyName: "",
  email: "", 
  jobName: "",
  jobType: "",
  paperType: "",
  paperWeight: "",
  coatingType: "",
  bindingType: "",
  colorOption: "",
  printingType: "",
  width: "",
  height: "",
  depth: "",
  quantity: "",
  additionalRequests: "",
};

const Quote = () => {
  const theme = useTheme();
  const [quoteFormData, setQuoteFormData] = useState<QuoteFormData>(initialQuoteFormData);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Input Değişim Fonksiyonu
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuoteFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Select Değişim Fonksiyonu
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setQuoteFormData((prevData) => ({
      ...prevData,
      [name as keyof QuoteFormData]: value,
    }));
  };

  // Form Submit Fonksiyonu
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      companyName: quoteFormData.companyName || "Belirtilmemiş",
      email: quoteFormData.email || "Belirtilmemiş",
      jobName: quoteFormData.jobName || "Belirtilmemiş",
      jobType: quoteFormData.jobType || "Belirtilmemiş",
      paperType: quoteFormData.paperType || "Belirtilmemiş",
      paperWeight: quoteFormData.paperWeight || "Belirtilmemiş",
      coatingType: quoteFormData.coatingType || "Belirtilmemiş",
      bindingType: quoteFormData.bindingType || "Belirtilmemiş",
      colorOption: quoteFormData.colorOption || "Belirtilmemiş",
      printingType: quoteFormData.printingType || "Belirtilmemiş",
      width: quoteFormData.width || "Belirtilmemiş",
      height: quoteFormData.height || "Belirtilmemiş",
      depth: quoteFormData.depth || "Belirtilmemiş",
      quantity: quoteFormData.quantity || "Belirtilmemiş",
      additionalRequests: quoteFormData.additionalRequests || "Belirtilmemiş",
    };    
  
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setAlertOpen(true);
      setQuoteFormData(initialQuoteFormData);
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
  <title>Teklif Al | Istanbul Prime Pack</title>
  <meta
    name="description"
    content="İhtiyacınıza özel baskı ve ambalaj çözümleri için hemen teklif alın. Istanbul Prime Pack, kaliteli üretim ve hızlı teslimat ile hizmetinizde!"
  />
  <meta
    name="keywords"
    content="baskı teklif formu, ambalaj teklifi, istanbul prime pack, özel kutu üretimi"
  />
  <meta property="og:title" content="Teklif Al | Istanbul Prime Pack" />
  <meta
    property="og:description"
    content="Karton kutu, etiket, broşür ve tüm baskı işleriniz için hızlı teklif alın."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.istanbulprimepack.com/quote" />
  <link rel="canonical" href="https://www.istanbulprimepack.com/quote" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Teklif Al",
        "provider": {
          "@type": "Organization",
          "name": "Istanbul Prime Pack",
          "url": "https://www.istanbulprimepack.com"
        },
        "areaServed": "Türkiye",
        "serviceType": "Ambalaj ve Baskı Hizmetleri",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.istanbulprimepack.com/quote"
        }
      })
    }}
  />
</Helmet>

      <ReusableBackground>
        <Container maxWidth="md" sx={{ py: 4, mb: 20 }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 2,
              color: theme.palette.secondary.main,
              letterSpacing: "1px",
            }}
          >
            {quoteData.title}
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
            sx={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            {quoteData.description}
          </Typography>

          <Paper elevation={4} sx={{ p: 4 }}>
  <form onSubmit={handleSubmit}>
    {/* Firma İsmi ve İşin Adı */}
    <TextField
      fullWidth
      label="Firma/Kişi İsminiz"
      name="companyName"
      value={quoteFormData.companyName}
      onChange={handleChange}
      placeholder="Örnek: Istanbul Prime Pack"
      margin="normal"
      required
    />

<TextField
  fullWidth
  label="Email Adresiniz"
  name="email"
  type="email"
  value={quoteFormData.email}
  onChange={handleChange}
  placeholder="Örnek: ornek@istanbulprimepack.com"
  margin="normal"
  required
/>

    <TextField
      fullWidth
      label="İşin Adı"
      name="jobName"
      value={quoteFormData.jobName}
      onChange={handleChange}
      placeholder="Örnek: Lokum Kutusu"
      margin="normal"
      required
    />

{/* İş Tipi */}
<Select
      fullWidth
      name="jobType"
      value={quoteFormData.jobType}
      onChange={handleSelectChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? `İş Tipi: ${selected} *` : quoteData.placeholders.jobType
      }
      sx={{ mt: 2 }}
    >
      <MenuItem value="" disabled>
        {quoteData.placeholders.jobType}
      </MenuItem>
      {JobTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>

    {/* Kağıt Tipi ve Gramaj */}
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={6}>
        <Select
          fullWidth
          name="paperType"
          value={quoteFormData.paperType}
          onChange={handleSelectChange}
          displayEmpty
          renderValue={(selected) =>
            selected ? `Kağıt Tipi: ${selected}` : quoteData.placeholders.paperType
          }
        >
          <MenuItem value="">
            {quoteData.placeholders.paperType}
          </MenuItem>
          {PaperTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item xs={6}>
        <Select
          fullWidth
          name="paperWeight"
          value={quoteFormData.paperWeight}
          onChange={handleSelectChange}
          displayEmpty
          renderValue={(selected) =>
            selected ? `Gramaj: ${selected}` : quoteData.placeholders.paperWeight
          }
        >
          <MenuItem value="">
          {quoteData.placeholders.paperWeight}
          </MenuItem>
          {PaperWeights.map((weight) => (
            <MenuItem key={weight} value={weight}>
              {weight}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>

    {/* Kaplama Türü */}
    <Select
      fullWidth
      name="coatingType"
      value={quoteFormData.coatingType}
      onChange={handleSelectChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? `Kaplama Tipi: ${selected}` : quoteData.placeholders.coatingType
      }
      sx={{ mt: 3 }}
    >
      <MenuItem value="">
      {quoteData.placeholders.coatingType}
      </MenuItem>
      {CoatingTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>

    {/* Ciltleme Türü */}
    <Select
      fullWidth
      name="bindingType"
      value={quoteFormData.bindingType}
      onChange={handleSelectChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? `Ciltleme Tipi: ${selected}` : quoteData.placeholders.bindingType
      }
      sx={{ mt: 3 }}
    >
      <MenuItem value="">
        {quoteData.placeholders.bindingType}
      </MenuItem>
      {BindingTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>

    {/* Renk Seçenekleri */}
    <Select
      fullWidth
      name="colorOption"
      value={quoteFormData.colorOption}
      onChange={handleSelectChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? `Renk: ${selected} *` : quoteData.placeholders.colorType
      }
      required
      sx={{ mt: 3 }}
    >
      <MenuItem value="" disabled>
      {quoteData.placeholders.colorType}
      </MenuItem>
      {ColorOptions.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>

    {/* Baskı Türleri */}
    <Select
      fullWidth
      name="printingType"
      value={quoteFormData.printingType}
      onChange={handleSelectChange}
      displayEmpty
      renderValue={(selected) =>
        selected ? `Baskı Tipi: ${selected} *` : quoteData.placeholders.printingType
      }
      required
      sx={{ mt: 3 }}
    >
      <MenuItem value="" disabled>
      {quoteData.placeholders.printingType}
      </MenuItem>
      {PrintingTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </Select>

    {/* Ebatlar */}
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="En (cm)"
          name="width"
          type="number"
          value={quoteFormData.width}
          onChange={handleChange}
          required
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Boy (cm)"
          name="height"
          type="number"
          value={quoteFormData.height}
          onChange={handleChange}
          required
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Derinlik (cm)"
          name="depth"
          type="number"
          value={quoteFormData.depth}
          onChange={handleChange}
        />
      </Grid>
    </Grid>

              <TextField
                    fullWidth
                    label="Adet"
                    name="quantity"
                    type="number"
                    value={quoteFormData.quantity}
                    onChange={handleChange}
                    sx={{ mt: 3 }}
                    required
                  />

<TextField
  fullWidth
  label="Ek Talepler"
  name="additionalRequests"
  value={quoteFormData.additionalRequests}
  onChange={handleChange}
  placeholder= {quoteData.placeholders.additionalRequests}
  margin="normal"
  multiline
  sx={{ mt: 3 }}
  rows={4}
/>

    {/* Gönder Butonu */}
    <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 4,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  "&:hover": { bgcolor: theme.palette.primary.light },
                }}
                type="submit"
                disabled={isLoading} // Buton disabled ediliyor
              >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : quoteData.button.text}
              </Button>
  </form>
</Paper>
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
        {/* Kapatma Butonu */}
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

        {/* Başarı İkonu */}
        <CheckCircle 
            sx={{
                fontSize: '60px',
                color: theme.palette.primary.dark
            }}
        />

        {/* Başarı Mesajı */}
        <Typography 
            variant="body1" 
            sx={{
                color: theme.palette.secondary.main
            }}
        >
            {quoteData.alert.success}
        </Typography>
    </Box>
</Modal>

        </Container>
      </ReusableBackground>
    </Layout>
  );
};

export default Quote;
