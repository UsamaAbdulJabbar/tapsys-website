import { useState, useEffect } from "react";
import styles from "../style";
import { robot } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  const staticText = "One-Stop-Shop"; // Blue-colored text
  const dynamicText = " for all your Payment Acceptance Needs"; // Typing effect text
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Typing speed
    const delayAfterComplete = 5000; // 5 sec delay before restarting

    if (index < dynamicText.length && !isDeleting) {
      // Typing effect
      setTimeout(() => {
        setDisplayText(dynamicText.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (index === dynamicText.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), delayAfterComplete);
    } else if (isDeleting && index > 0) {
      // Deleting effect
      setTimeout(() => {
        setDisplayText(dynamicText.substring(0, index - 1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (isDeleting && index === 0) {
      // Restart typing effect after a delay
      setTimeout(() => setIsDeleting(false), 500);
    }
  }, [index, isDeleting]);

  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div>
          <p className="text-5xl font-bold">
            <span className="text-[#007fcc]">{staticText}</span> <br />
            <span className="text-black">{displayText}</span>
            <span className="text-[#007fcc] blink">|</span> {/* Blinking cursor */}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className={`${styles.paragraph} text-gray-500 max-w-[500px] mt-5`}
        >
          Join us as a merchant and start accepting electronic payments
          effortlessly. Expand your business, enhance customer experience, and
          streamline transactions with ease.
        </motion.p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ rotate: 3, scale: 1.05 }}
        />

        {/* Floating Animation Effect */}
        <motion.div
          className="absolute w-[120%] h-[70%] bg-[#007fcc] opacity-20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
