import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <motion.div
        key={stat.id}
        className="flex-1 bg-black opacity-80 p-5 rounded-md shadow flex justify-start items-center flex-row m-3"
        initial={{ opacity: 0, y: 50 }} // Starts hidden and lower
        whileInView={{ opacity: 1, y: 0 }} // Slides up into position
        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} // Staggered effect
        whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </section>
);

export default Stats;
