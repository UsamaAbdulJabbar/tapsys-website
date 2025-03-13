import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
});

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
    variants={fadeInRight(index * 0.2)}
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      whileHover={{ rotate: 10 }}
    >
      <img src={icon} alt="feature-icon" className="w-[50%] h-[50%] object-contain" />
    </motion.div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => (
  <section id="features" className={`${layout.section} my-10`}>
    {/* Left Side - Text Content */}
    <motion.div className={layout.sectionInfo} variants={fadeInLeft} initial="initial" animate="animate">
      <h2 className={`${styles.heading2} text-gray-950`}>
        You do the business, <br className="sm:block hidden" />
        <span className="text-blue-500">we’ll handle the money.</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-950`}>
        With Tapsys, streamline transactions, enhance security, and unlock seamless payment solutions—all designed to help your business grow effortlessly.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    {/* Right Side - Features List */}
    <motion.div className={`${layout.sectionImg} flex-col`} initial="initial" animate="animate">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Business;