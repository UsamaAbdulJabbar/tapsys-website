import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../style";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContactSales() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
    address: "",
    message: "",
  });

  const [alert, setAlert] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setAlert("⚠️ Please fill out all fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setAlert(response.data.message);
      
      // Reset form fields after successful submission
      setFormData({ firstName: "", lastName: "", businessName: "", phone: "", address: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert("❌ Failed to send message. Try again later.");
    }
  };

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
            { Icon: Mail, title: "Email Address", info: "sales@tapsys.net" },
            { Icon: MapPin, title: "Office Address", info: "Office no 1, 4th floor PMSTP, Stadium Road Karachi." },
            { Icon: Phone, title: "Phone", info: "+92 213 4380180" },
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-2xl text-white font-medium">
            Fill the form with your query, and we will get in touch with you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((name, index) => (
              <input
                key={index}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={name.replace(/([A-Z])/g, " $1").trim()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>

          {["businessName", "phone", "address"].map((name, index) => (
            <input
              key={index}
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={name.replace(/([A-Z])/g, " $1").trim()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
          />

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
