const Contact = () => {
    return (
      <section id="contact" className="bg-pink-50 py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">Get In Touch</h2>
        <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-didact">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-didact">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-didact">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <div className="flex justify-center">
          <button type="submit" className="bg-orange-500  text-white px-6 py-3 rounded-lg hover:bg-blue-950 transition font-didact">Send Message</button>
          </div>
        </form>
      </section>
    );
  };
  
  export default Contact;
  