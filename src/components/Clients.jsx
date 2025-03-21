import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <motion.div
      className={`${styles.flexCenter} flex-wrap w-full`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {clients.map((client) => (
        <motion.div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[130px] min-w-[120px] m-5`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[110px] w-[110px] object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Clients;
