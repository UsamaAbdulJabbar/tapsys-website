import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import Company from "./Pages/Company";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import TermsConditions from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ContactSales from "./components/ContactUsForm";
import ScrollToTop from "./components/ScrollToTop";
import styles from "./style";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Fix: Ensuring scroll behavior */}
      
      {/* ✅ Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      {/* ✅ Contact Sales */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactSales />
        </div>
      </div>

      {/* ✅ Footer */}
      <div className={`${styles.paddingX} ${styles.flexCenter} mt-5`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
