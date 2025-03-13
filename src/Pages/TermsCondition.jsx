import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <section className=" py-12 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Terms & <span className="text-[#007fcc]">Conditions</span>
        </motion.h2>
      </div>

      {/* Terms Content */}
      <div className="mt-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. Acceptance of Terms",
            description:
              "By accessing and using Tapsys services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.",
          },
          {
            title: "2. Use of Services",
            description:
              "Our services are provided for business transactions only. Any misuse, fraudulent activities, or violation of applicable laws may result in account suspension.",
          },
          {
            title: "3. Payment & Transactions",
            description:
              "All transactions processed through Tapsys must comply with legal and financial regulations. We reserve the right to decline or reverse any transaction if fraud is suspected.",
          },
          {
            title: "4. Privacy & Data Protection",
            description:
              "We respect your privacy. Personal and transaction data is securely handled as per our Privacy Policy. We do not share your sensitive information with third parties without consent.",
          },
          {
            title: "5. Service Availability",
            description:
              "While we strive for 24/7 uptime, we are not liable for service disruptions due to maintenance, third-party failures, or unforeseen technical issues.",
          },
          {
            title: "6. Modifications to Terms",
            description:
              "Tapsys reserves the right to modify these Terms & Conditions at any time. Continued use of our services after changes indicates acceptance of the revised terms.",
          },
        ].map((term, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-black">{term.title}</h3>
            <p className="text-gray-700 mt-2">{term.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TermsConditions;
