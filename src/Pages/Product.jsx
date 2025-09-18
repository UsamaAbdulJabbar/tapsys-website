import React from "react";
import { POS,MPOS,PayApp,google,PayAppVideo } from "../assets";
import SoundBox from "../assets/Products/SoundBox.png";
import styles, { layout } from "../style";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { 
  CreditCard,
  BarChart3,
  Smartphone, 
  ShieldCheck, 
  Zap,
  Wifi, 
  ShoppingCart, 
  Lock, 
  BatteryCharging, 
  Truck,
  Nfc,
  QrCode,
  Banknote,
  Speaker,
} from "lucide-react";

function Product() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <section
              className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
            >
              <div>
                <h2 className={`${styles.heading2} text-black`}>
                  Our <span className="text-[#007fcc]">Products</span>
                </h2>
              </div>
            </section>

         


          {/* POS Section */}
      

            <section id="card-deal" className={layout.section}>
  {/* Left Side - Animated Text Content */}
  <motion.div
    className={layout.sectionInfo}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className={`${styles.heading2} text-black`}>
      Point Of Sale <span className="text-[#007fcc]">Terminal</span>{" "}
      <br className="sm:block hidden" />
    </h2>
    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      Tapsys Mobile POS (Point of Sale) is an advanced and versatile
      payment solution designed to cater to the needs of modern
      businesses. It offers a seamless combination of hardware and
      software, enabling businesses to process transactions efficiently
      and manage their operations on the go.
    </motion.p>

    {/* ✅ Feature Points in Rows (2 Per Row) */}
    <motion.div
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      {[
        { icon: <CreditCard size={28} className="text-[#007fcc]" />, text: "Compact & Portable Design" },
        { icon: <Wifi size={28} className="text-[#007fcc]" />, text: "Works with WiFi & Mobile Data" },
        { icon: <ShoppingCart size={28} className="text-[#007fcc]" />, text: "Supports Multiple Payment Methods" },
        { icon: <Lock size={28} className="text-[#007fcc]" />, text: "Secure End-to-End Encryption" },
        { icon: <BatteryCharging size={28} className="text-[#007fcc]" />, text: "Long Battery Life for All-Day Use" },
        { icon: <Truck size={28} className="text-[#007fcc]" />, text: "Seamless Integration for Delivery Services" },
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-3  p-3  ">
          {feature.icon}
          <span className="text-black text-lg font-medium">{feature.text}</span>
        </div>
      ))}
    </motion.div>

    {/* Animated Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
    >
      <Button styles={`mt-10`} />
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
      src={POS}
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



{/* MPOS Section */}


<section id="mobile-pos" className={`${layout.section} flex-col-reverse lg:flex-row`}>
  {/* Left Side - Animated Image (Mobile POS) */}
  <motion.div
    className={`${layout.sectionImg} order-2 lg:order-1`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.img
      src={MPOS}
      alt="Mobile POS"
      className="h-[455px] w-[530px] object-contain relative z-[5]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Gradient Effects */}
    <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 bottom-0 rounded-full pink__gradient" />
  </motion.div>

  {/* Right Side - Animated Text Content */}
  <motion.div
    className={`${layout.sectionInfo} order-1 lg:order-2`}
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className={`${styles.heading2} text-black`}>
      Mobile <span className="text-[#007fcc]">POS</span>{" "}
      <br className="sm:block hidden" />
    </h2>
    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      Tapsys Mobile POS is a cutting-edge portable payment solution,
      designed for businesses on the go. With advanced security and
      real-time tracking, it ensures seamless transactions anytime,
      anywhere.
    </motion.p>

    {/* ✅ Feature Points in Rows (2 Per Row) */}
    <motion.div
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      {[
        { icon: <CreditCard size={28} className="text-[#007fcc]" />, text: "Accept Payments Anywhere" },
        { icon: <BarChart3 size={28} className="text-[#007fcc]" />, text: "Live Sales Monitoring" },
        { icon: <Smartphone size={28} className="text-[#007fcc]" />, text: "Works on Any Mobile Device" },
        { icon: <ShieldCheck size={28} className="text-[#007fcc]" />, text: "End-to-End Encryption" },
        { icon: <Zap size={28} className="text-[#007fcc]" />, text: "Lightning-Fast Transactions" },
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          {feature.icon}
          <span className="text-black text-lg font-medium">{feature.text}</span>
        </div>
      ))}
    </motion.div>

    {/* Animated Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
    >
      <Button styles={`mt-10`} />
    </motion.div>
  </motion.div>
</section>






{/* Merchant Mobile App */}
<section id="merchant-app" className={`${layout.section} flex-col lg:flex-row`}>
  {/* Left Side - Animated Text Content */}
  <motion.div
    className={`${layout.sectionInfo} order-2 lg:order-1`}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className={`${styles.heading2} text-black`}>
      Merchant <span className="text-[#007fcc]">Mobile App</span>{" "}
      <br className="sm:block hidden" />
    </h2>
    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      The Tapsys Merchant Mobile App empowers businesses with secure,
      real-time payment solutions. With NFC, QR Code, SoftPOS, and Raast
      integration, merchants can accept payments effortlessly.
    </motion.p>

    {/* ✅ Feature Points in Rows (2 Per Row) */}
    <motion.div
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      {[
        { icon: <Nfc size={28} className="text-[#007fcc]" />, text: "NFC Tap-to-Pay Support" },
        { icon: <QrCode size={28} className="text-[#007fcc]" />, text: "QR Code Payment Integration" },
        { icon: <Smartphone size={28} className="text-[#007fcc]" />, text: "SoftPOS for Cardless Transactions" },
        { icon: <Banknote size={28} className="text-[#007fcc]" />, text: "Raast - Instant Digital Payments" },
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          {feature.icon}
          <span className="text-black text-lg font-medium">{feature.text}</span>
        </div>
      ))}
    </motion.div>

    {/* Animated Button */}
  <a href="https://play.google.com/store/apps/details?id=com.tap_pay&hl=en" target="blank">
  <motion.img
      src={google}
      alt="google_play"
      className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mt-5"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
  </a>
  </motion.div>

  {/* Right Side - Animated Image (Merchant Mobile App) */}
  <motion.div
    className={`${layout.sectionImg} order-1 lg:order-2`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.img
      src={PayApp}
      alt="Merchant Mobile App"
      className="h-[455px] w-[530px] object-contain relative z-[5]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Gradient Effects */}
    <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 bottom-0 rounded-full pink__gradient" />
  </motion.div>
</section>

{/* SoundBOX Section */}


<section id="mobile-pos" className={`${layout.section} flex-col-reverse lg:flex-row`}>
  {/* Left Side - Animated Image (Mobile POS) */}
  <motion.div
    className={`${layout.sectionImg} order-2 lg:order-1`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.img
      src={SoundBox}
      alt="Mobile POS"
      className="h-[455px] w-[530px] object-contain relative z-[5]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Gradient Effects */}
    <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 bottom-0 rounded-full pink__gradient" />
  </motion.div>

  {/* Right Side - Animated Text Content */}
  <motion.div
    className={`${layout.sectionInfo} order-1 lg:order-2`}
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className={`${styles.heading2} text-black`}>
      Sound <span className="text-[#007fcc]">BOX</span>{" "}
      <br className="sm:block hidden" />
    </h2>
    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      Tapsys SoundBOX is an innovative payment alert device, designed to simplify digital
      payments for merchants. By scanning a QR code, customers can pay instantly, 
      while the device generates a real-time audio confirmation — ensuring trust,
      speed, and convenience.
    </motion.p>

    {/* ✅ Feature Points in Rows (2 Per Row) */}
    <motion.div
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      {[
        { icon: <Speaker size={28} className="text-[#007fcc]" />, text: "Instant Payment Confirmation with Sound Alerts" },
        { icon: <QrCode size={28} className="text-[#007fcc]" />, text: "QR Code–Based Digital Payments" },
        { icon: <Smartphone size={28} className="text-[#007fcc]" />, text: "Compact, Easy-to-Use Design" },
        { icon: <ShieldCheck size={28} className="text-[#007fcc]" />, text: "Secure & Reliable Transactions" },
       
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          {feature.icon}
          <span className="text-black text-lg font-medium">{feature.text}</span>
        </div>
      ))}
    </motion.div>

    {/* Animated Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
    >
      <Button styles={`mt-10`} />
    </motion.div>
  </motion.div>
</section>








{/* Video Section */}

<section id="video-demo" className="flex flex-col items-center text-center py-12">
 

  <motion.p
    className="text-gray-600 max-w-[600px] mt-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  >
    
  </motion.p>

  {/* Video Container */}
  <motion.div
    className="mt-8 w-full max-w-[850px] h-[480px] relative rounded-xl overflow-hidden  "
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <iframe
      className="w-full h-full"
      src={PayAppVideo}
      title="Tapsys Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </motion.div>

  {/* Call to Action Button */}
  <motion.a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 px-6 py-3 bg-[#007fcc] text-white rounded-full text-lg font-medium hover:bg-[#005fa3] transition duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    Learn More
  </motion.a>
</section>





           
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
