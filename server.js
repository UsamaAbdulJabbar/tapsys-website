import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, businessName, phone, address, message } = req.body;

  if (!firstName || !lastName || !businessName || !phone || !address || !message) {
    return res.status(400).json({ message: "⚠️ Please fill out all fields!" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "usamajabbar1527@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Business: ${businessName}
      Phone: ${phone}
      Address: ${address}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "✅ Your query submitted successfully! We will get in touch soon." });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to send message. Try again later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
