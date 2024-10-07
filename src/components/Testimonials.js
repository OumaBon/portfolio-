const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">Testimonials</h2>
      <div className="mt-8 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 font-didact">
            "Boniface delivered a top-notch web application on time and exceeded our expectations. He is knowledgeable, responsive, and a pleasure to work with."
          </p>
          <h4 className="text-blue-950 mt-4 font-semibold font-didact">James Kimani, CEO of WoopySports</h4>
        </div>

        <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 font-didact">
            "The AI-powered solution Boniface built for our business has been a game-changer. He’s a true expert in his field."
          </p>
          <h4 className="text-blue-950 mt-4 font-semibold font-didact">Nicholas W, CTO of WoopySports</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
