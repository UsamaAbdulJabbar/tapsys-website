import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion for animations
import styles from "../style";
import {founder,CTO,COO,TapsysOffice} from "../assets";
// ✅ Import images (replace with actual paths or URLs)


function Company() {
  return (
    <>
      {/* About Tapsys Section */}
      <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div>
          <h2 className={`${styles.heading2} text-black`}>
            About <span className="text-[#007fcc]">Tapsys</span>
          </h2>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about-us" className="py-12 bg-white">
        <div className="container mx-auto text-center px-4">
          {/* Title */}
          <motion.h2
            className="text-black text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our <span className="text-[#007fcc]">Story</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Pakistan's financial market has gone through acute economic pressure and witnessed
            liquidity of wealth from the formal into the grey economy. An increase in Debit and
            Credit cards issued did not match the rate of increase in digital touch points. Large
            acquiring banks have found it difficult to work with small and micro merchants.
            <br />
            <br />
            With the aim to cater to the needs of these Small and Medium Enterprises (SMEs) and
            include them in the financial ecosystem, Paysys Labs (Pvt.) Limited joined hands to form{" "}
            <span className="text-[#007fcc] font-semibold">Tapsys</span>. It aims to bridge the gap
            between an acquirer and merchants by providing a hands-on technology platform and
            merchant onboarding services.
          </motion.p>
        </div>

        {/* Leadership Team Section */}
        <div className="mt-12 container mx-auto px-4">
          <motion.h3
            className="text-black text-2xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Meet Our Leadership Team
          </motion.h3>

          {/* Team Members Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Karim Jindani", role: "Co-Founder & CEO", image: founder },
              { name: "Azeem Yaseen", role: "Co-Founder & CTO", image: CTO },
              { name: "Owais Moon", role: "Chief Operating Officer (COO)", image: COO },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full border-4 border-[#007fcc] mb-4"
                />
                <h4 className="text-black text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>



        
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
            src={TapsysOffice}
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
      
    </>
  );
}

export default Company;
