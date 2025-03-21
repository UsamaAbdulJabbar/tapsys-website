import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../style";
import { motion } from "framer-motion";

export default function ContactSales() {
  const [alert, setAlert] = useState("");

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Section */}
      <motion.div className="w-full lg:w-1/2">
        <h2 className={`${styles.heading2} text-gray-950`}>
          Let’s Get Started Contact Our <br />
          <span className="text-[#007fcc]">Sales Team Today!</span>
        </h2>

        <div className="mt-6 space-y-4">
          {[
            { Icon: Mail, title: "Email Address", info: "info@tapsys.net" },
            { Icon: MapPin, title: "Office Address", info: "Office no 1, 4th floor PMSTP, Stadium Road Karachi." },
            { Icon: Phone, title: "UAN", info: "+92 21 111827797" },
          ].map((item, index) => (
            <motion.div key={index} className="flex items-center gap-3">
              <item.Icon className="text-blue-500 w-6 h-6" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.info}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Section (Form) */}
      <motion.div className="w-full lg:w-1/2 bg-[#007fcc] p-8 rounded-xl shadow-md">
        <form
          className="space-y-4"
          action="https://formsubmit.co/info@tapsys.net "
          method="POST"
        >
          <p className="text-2xl text-white font-medium">
            Fill the form with your query, and we will get in touch with you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((name, index) => (
              <input
                key={index}
                type="text"
                name={name}
                placeholder={name.replace(/([A-Z])/g, " $1").trim()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            ))}
          </div>

          {["businessName", "phone", "address"].map((name, index) => (
            <input
              key={index}
              type="text"
              name={name}
              placeholder={name.replace(/([A-Z])/g, " $1").trim()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
            required
          />

          {/* Hidden Input for Success Redirect */}
          
          
          <input type="hidden" name="_autoresponse" value="Thankyou for contact to Tapsys Services. Our team will get in touch with you soon. Thankyou!"></input>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md transition"
          >
            Submit
          </button>

          {alert && <p className="text-white text-sm mt-3">{alert}</p>}
        </form>
      </motion.div>
    </motion.div>
  );
}
