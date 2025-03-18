import { Link } from "react-router-dom";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Working with Digital Wisdom has been a game-changer for our corporate events. Their digital meeting solutions have helped us achieve seamless communication across our global teams.",
      author: "Sarah J.",
      rating: 5,
    },
    {
      text: "As a university, we needed a digital solution that could handle our complex educational requirements. Digital Wisdom delivered an effective platform. We've been very satisfied with the results.",
      author: "Michael T.",
      rating: 5,
    },
    {
      text: "Working with Digital Wisdom has been a perfect experience. The team truly understood our needs and delivered a solution that significantly increased our online presence.",
      author: "Jennifer K.",
      rating: 5,
    },
  ];

  return (
    <section className=" md:px-20 lg:px-40 py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          "What Our Client Say"
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="mb-4 text-2xl text-gray-600">"</div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/testimonials"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
