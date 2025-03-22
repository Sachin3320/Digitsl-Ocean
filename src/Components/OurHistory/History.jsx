import { Link } from "react-router-dom";
import contactus from "../../assets/contactUs.jpg";
const History = () => {
  return (
    <section className="py-16 bg-black text-white relative mt-9">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${contactus})`,
        }}
      />
      <div className="flex flex-col justify-center items-center mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Our History
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          
          Dattatray Consultancy's journey began with our founder, a
          seasoned chef, culinary artist, and professor with 17 years of
          expertise. After years of teaching, he recognized the need to
          support and educate startups in the food industry. Driven by this
          vision, he transitioned from freelancing to founding Dattatray
          Consultancy in 2021.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#21697D] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default History;