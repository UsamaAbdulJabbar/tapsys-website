import { merchant } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const MerchantsLogo = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <motion.div
      className={`${styles.flexCenter} flex-wrap w-full`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {merchant.map((merchant) => (
        <motion.div
          key={merchant.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[140px] min-w-[120px] m-5`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
        >
          <img
            src={merchant.logo}
            alt="client_logo"
            className="sm:w-[110px] w-[110px] object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default MerchantsLogo;
