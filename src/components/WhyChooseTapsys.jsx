import {img1,img2,img3,img4,img5,img6} from "../assets";

export default function WhyChooseTapsys() {
    const features = [
      {
        title: "Comprehensive Solutions",
        description:
          "From payment gateways to POS devices, we offer everything you need to run your business smoothly.",
        icon: img1, // Replace with uploaded image path
      },
      {
        title: "Security First",
        description:
          "Our services are built with robust security protocols to protect your business and customers.",
        icon: img2,
      },
      {
        title: "Scalability",
        description:
          "Whether you're a small startup or an established enterprise, our solutions grow with your business.",
        icon: img3,
      },
      {
        title: "Cutting-Edge Technology",
        description:
          "Tapsys integrates the latest technological advancements into its solutions.",
        icon: img4,
      },
      {
        title: "Data-Driven Insights",
        description:
          "Tapsys equips you with actionable insights to make smarter business decisions.",
        icon: img5,
      },
      {
        title: "24/7 Support",
        description:
          "Dedicated customer support to assist you anytime.",
        icon: img6,
      },
    ];
  
    return (
      <section className="py-12 bg-white flex justify-center">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-3xl font-bold">
            Why Choose <span className="text-blue-500">Tapsys?</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-5 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-3" />
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  