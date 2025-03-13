import { feedback } from "../constants";
import styles from "../style";

import FeedbackCard from "./FeedbackCard";
import MerchantsLogo from "./MerchantLogo";

const Merchants = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  <div>
  <h2 className={`${styles.heading2} text-black`}>
      Our Trusted   <span className="text-blue-500">Merchants</span>
      </h2>
  </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <MerchantsLogo/>
    </div>
  </section>
);

export default Merchants;
