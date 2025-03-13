import { feedback } from "../constants";
import styles from "../style";
import Clients from "./Clients";
import { motion } from "framer-motion";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/* Background Gradient */}
    <motion.div
      className="absolute z-[0] w-[60%] h-[50%] -right-[50%] rounded-full bottom-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Animated Heading & Description */}
    <motion.div
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className={`${styles.heading2} text-black`}>
        Trusted by <br className="sm:block hidden" />{" "}
        <span className="text-blue-500">Leading Businesses</span>
      </h2>
      <motion.div
        className="w-full md:mt-0 mt-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <p
          className={`${styles.paragraph} text-left max-w-[450px] text-black`}
        >
          Empowering top businesses with seamless, secure, and innovative
          payment solutions for a future-ready experience.
        </p>
      </motion.div>
    </motion.div>

    {/* Animated Client Cards */}
    <motion.div
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Clients />
    </motion.div>
  </section>
);

export default Testimonials;
