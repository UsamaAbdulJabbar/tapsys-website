import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Privacy <span className="text-[#007fcc]">Policy</span>
        </motion.h2>
      </div>

      {/* Privacy Policy Content */}
      <div className="mt-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. Introduction",
            description:
              "At Tapsys, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.",
          },
          {
            title: "2. Information We Collect",
            description:
              "We collect personal data such as name, email, contact details, and payment information when you use our services. We may also gather technical data like IP addresses and browsing behavior.",
          },
          {
            title: "3. How We Use Your Information",
            description:
              "Your data is used for service improvements, secure transactions, fraud prevention, and personalized experiences. We do not sell your information to third parties.",
          },
          {
            title: "4. Data Security",
            description:
              "We implement advanced security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
          },
          {
            title: "5. Third-Party Services",
            description:
              "Tapsys may use third-party services for analytics, payment processing, and marketing. These services adhere to their own privacy policies.",
          },
          {
            title: "6. Your Rights & Choices",
            description:
              "You have the right to access, update, or delete your personal data. If you wish to opt out of marketing communications, you can contact us anytime.",
          },
          {
            title: "7. Policy Updates",
            description:
              "We may update this Privacy Policy periodically. Any significant changes will be communicated via email or website notifications.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-black">{section.title}</h3>
            <p className="text-gray-700 mt-2">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
