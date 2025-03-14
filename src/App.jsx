import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Fix import
import { Footer, Navbar } from "./components";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import Company from "./Pages/Company";
import Contact from "./Pages/Contact";  // ✅ Fix: Ensure this is correctly imported
import Home from "./Pages/Home";
import styles from "./style";
import ContactSales from "./components/ContactUsForm";
import TermsConditions from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Router basename="/tapsys_website">  {/* ✅ Fix: Use BrowserRouter */}
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />  {/* ✅ Fix: Use Contact instead of ContactSale */}
        <Route path="/terms" element={<TermsConditions />} />  {/* ✅ Fix: Use Contact instead of ContactSale */}
        <Route path="/privacy" element={<PrivacyPolicy />} /> 
      </Routes>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactSales />
      </div>
    </div> 
      <div className={`${styles.paddingX} ${styles.flexCenter} mt-5`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div> 
    </Router>
  );
}

export default App;
