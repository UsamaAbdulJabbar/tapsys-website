import React from "react";
import { mastercard, visa, unionpay, paypak } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5], // Floating effect
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function SchemeLogo() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <motion.div
        className={`${styles.flexCenter} flex-wrap w-full`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {[visa, mastercard, unionpay, paypak].map((logo, index) => (
          <motion.div
            key={index}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
            variants={floatAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <motion.img
              src={logo}
              className="sm:w-[120px] w-[100px] object-contain"
              alt="payment logo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SchemeLogo;
