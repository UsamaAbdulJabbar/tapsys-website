import { card } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { google } from "../assets";


const CardDeal = () => (
  <section id="card-deal" className={layout.section}>
    {/* Left Side - Animated Text Content */}
    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className={`${styles.heading2} text-black`}>
        Effortless Payments, <br className="sm:block hidden" /> 
        <span className="text-[#007fcc]"> Limitless Possibilities</span>
      </h2>
      <motion.p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Power up your business with the Tapsys Merchant Mobile App—a seamless, secure, and future-ready payment solution. Accept payments like a pro with advanced features.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      > 
        <a href="https://play.google.com/store/apps/details?id=com.tap_pay&hl=en" target="blank">
        <motion.img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        </a>
      </motion.div>
    </motion.div>

    

    {/* Right Side - Animated Image */}
    <motion.div
      className={layout.sectionImg}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={card}
        alt="card deal"
        className="h-[455px] w-[530px] object-contain relative z-[5]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Gradient Effects */}
      <div className="absolute z-[3] right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-1/2 bottom-0 rounded-full pink__gradient" />
    </motion.div>
  </section>
);

export default CardDeal;
