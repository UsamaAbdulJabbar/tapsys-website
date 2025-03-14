import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";



const Footer = () => (
  <section className={`${styles.flexCenter} flex-col  `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Tapsys"
          className="w-[200px] h-[72.14px] object-contain drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
        Contact Us now as a Merchant and start accepting payments electronically
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between  flex-wrap md:mt-0 mt-10 rounded">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-black cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link to={link.link} >{link.name}</Link>
                  
                </li>
              ))}
            </ul>
          </div>

          
        ))}
      </div>
    </div>

    <div className="w-full  flex justify-between items-center md:flex-row flex-col p-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ {`${new Date().getFullYear()}`} Tapsys Services Pvt. Ltd. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
