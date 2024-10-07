const Projects = () => {
    return (
        <section id="projects" className="bg-white py-12 px-4 md:px-20">
            <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">My Projects</h2>
            <div className="mt-8">
                {/* Main Card that holds all project cards */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-blue-950 font-didact">E-Commerce Platform</h4>
                            <p className="text-gray-600 mt-2 font-didact">A fully functional e-commerce platform with cart, checkout, and payment integration.</p>
                            <p className="mt-2 text-gray-500 font-didact">React | Node.js | Stripe API</p>
                            <div className="mt-2 flex justify-between">
                                <a href="#" className="text-orange-500 hover:underline font-didact">Live Demo</a>
                                <a href="#" className="text-orange-500 hover:underline font-didact">Source Code</a>
                            </div>
                        </div>
                        
                        {/* Project 2 */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-blue-950 font-didact">AI Chatbot</h4>
                            <p className="text-gray-600 mt-2 font-didact">An AI-powered chatbot that provides intelligent customer support responses.</p>
                            <p className="mt-2 text-gray-500 font-didact">Python | TensorFlow | Flask</p>
                            <div className="mt-2 flex justify-between">
                                <a href="#" className="text-orange-500 hover:underline font-didact">Live Demo</a>
                                <a href="#" className="text-orange-500 hover:underline font-didact">Source Code</a>
                            </div>
                        </div>
                        
                        {/* Project 3 */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-blue-950 font-didact">Personal Portfolio</h4>
                            <p className="text-gray-600 mt-2 font-didact">A personal portfolio website to showcase my projects and skills.</p>
                            <p className="mt-2 text-gray-500 font-didact">React | Tailwind CSS | GitHub Pages</p>
                            <div className="mt-2 flex justify-between">
                                <a href="#" className="text-orange-500 hover:underline font-didact">Live Demo</a>
                                <a href="#" className="text-orange-500 hover:underline font-didact">Source Code</a>
                            </div>
                        </div>
  
                        {/* Add more project cards as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default Projects;
  