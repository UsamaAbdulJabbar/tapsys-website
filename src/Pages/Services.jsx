import React from "react";
import styles from "../style";
import Banner from "../components/Banner";
import SchemeLogo from "../components/SchemeLogo";
import Merchants from "../components/Merchants";
import WhyChooseTapsys from "../components/WhyChooseTapsys";

function Services() {
  return (
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
        >
          <div>
            <h2 className={`${styles.heading2} text-black`}>
              Our <span className="text-[#007fcc]">Services</span>
            </h2>
          </div>
        </section>
        <Banner />
        <div className="my-11">
          <SchemeLogo />
        </div>
        <section
          className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
        >
          <div>
            <h2 className={`${styles.heading2} text-black text-center`}>
              Small or Large, All Shops Will Now{" "}
              <span className="text-[#007fcc]">Accept Cards!</span>
            </h2>
            <p className={`${styles.paragraph} text-black text-center`}>
              Have you ever lost sales because customer only wanted to pay with
              card? Sign up now as a merchant and get the right set of POS with
              our variety of POS Terminals. From a conventional POS machine to a
              more Eco-Friendly MobilePOS to the most innovative SoftPOS, we
              have a variety for your type of business.
            </p>
          </div>
        </section>
      <WhyChooseTapsys/>
        <Merchants/>
      </div>
    </div>
  );
}

export default Services;
