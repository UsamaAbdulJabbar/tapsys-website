import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Animated Image Section */}
    <motion.div
      className={layout.sectionImgReverse}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={bill}
        alt="billing"
        className="h-[455px] w-[530px] object-contain relative z-[5]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Gradient Effects */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </motion.div>

    {/* Animated Text Section */}
    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className={`${styles.heading2} text-black`}>
        Seamlessly Manage Your <br className="sm:block hidden" />{" "}
        <span className="text-[#007fcc]"> Payments & Transactions</span>
      </h2>
      <motion.p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Effortlessly streamline your payment processing with Tapsys. Secure,
        fast, and reliable solutions designed to enhance your business
        operations and customer experience.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="flex flex-row flex-wrap sm:mt-10 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
       
       <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>
  </section>
);

export default Billing;
