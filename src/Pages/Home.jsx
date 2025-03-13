import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import ContactSales from "../components/ContactUsForm";
import SchemeLogo from "../components/SchemeLogo";
import Merchants from "../components/Merchants";
import Banner from "../components/Banner";



const Home = () => (
  <div className=" w-full overflow-hidden">
   

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SchemeLogo/>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Stats />
        <Merchants/>
        <Banner/>
        
        
      </div>
    </div>
  </div>
);

export default Home;
