const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start justify-between px-4 md:px-20 py-12 pt-12"> {/* Added pt-12 */}
      <div className="flex-1 text-left"> {/* Align text left */}
        <h1 className="text-4xl font-bold text-blue-950 font-didact">Boniface Ouma</h1>
        <h2 className="text-2xl text-blue-950 mt-4 font-didact">Full-Stack Developer | AI Enthusiast</h2>
        <p className="text-lg text-gray-900 mt-4 font-didact">
          I build scalable, efficient web applications and AI-powered solutions that solve real-world business challenges.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4"> {/* Center on small screens, align left on larger screens */}
          <a href="#contact" className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-didact">Hire Me</a>
          <a href="#projects" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-didact">See My Work</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <img src="/assets/images/profile.jfif" alt="Boniface Ouma" className="w-64 h-64 rounded-full border-4 border-gray-300 object-cover" />
      </div>
    </section>
  );
}

export default Hero;
