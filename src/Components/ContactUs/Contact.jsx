import { Link } from "react-router-dom";
import contactus from "../../assets/contactUs.jpg";
const Contact = () => {
  return (
    <section className="py-16 bg-black text-white relative mt-9">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${contactus})`,
        }}
      />
      <div className="flex flex-col justify-center items-center mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Bring Your Space to Life – Get in Touch Today!
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Transform your space into a center of innovation, communication, and
          inspiration. Our team of experts is ready to guide you through the
          process and help you create the perfect audio-visual environment for
          your needs.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default Contact;
