import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themeWebsite from "./themes/themeWebsite"; 

import Home from "./main/pages/Home";
import About from "./main/pages/About";
import Services from "./main/pages/Services";
import Products from "./main/pages/Products";
import ProductDetails from "./main/pages/ProductDetails";
import References from "./main/pages/References";
import Blog from "./main/pages/Blog";
import BlogDetails from "./main/pages/BlogDetails";
import FAQ from "./main/pages/Faq";
import Contact from "./main/pages/Contact";
import Quote from "./main/pages/Quote";
import TeamAndProduction from "./main/pages/TeamAndProduction";
import ScrollToTop from './main/components/ScrollToTop'; 
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ThemeProvider theme={themeWebsite}>
      <HelmetProvider>
      <CssBaseline />
        <Router>
        <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/references" element={<References />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team-and-production" element={<TeamAndProduction />} />
            </Routes>
        </Router>
        </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
