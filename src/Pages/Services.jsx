import React from "react";
import { Hero, Stats } from "../components";
import styles from "../style";
import Banner from "../components/Banner";
import SchemeLogo from "../components/SchemeLogo";
import Merchants from "../components/Merchants";

function Services() {
  return (
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
        >
          <div>
            <h2 className={`${styles.heading2} text-gray-950`}>
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
            <h2 className={`${styles.heading2} text-gray-950 text-center`}>
              Small or Large, All Shops Will Now{" "}
              <span className="text-[#007fcc]">Accept Cards!</span>
            </h2>
            <p className={`${styles.paragraph} text-gray-950 text-center`}>
              Have you ever lost sales because customer only wanted to pay with
              card? Sign up now as a merchant and get the right set of POS with
              our variety of POS Terminals. From a conventional POS machine to a
              more Eco-Friendly MobilePOS to the most innovative SoftPOS, we
              have a variety for your type of business.
            </p>
          </div>
        </section>
        <Stats/>
        <Merchants/>
      </div>
    </div>
  );
}

export default Services;
