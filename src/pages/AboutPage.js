const HomePage = () => {
    return (
        <main>
            <section className="introduction">
                <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                    <img 
                        className="rounded-circle shadow-lg" 
                        src="./assets/images/profile.jfif" 
                        alt="Profile of Boniface" 
                    />
                    <p className="pt-5 fw-bold fs-2">Hello, I am Boniface</p>
                    <p className="fw-light fs-5 text-danger text-center">Web Application Developer</p>
                    <p className="text-center max-650">
                        I'm a backend developer specializing in Python (Django). I also have a solid grasp of frontend technologies like JavaScript (React).
                    </p>
                    <p className="text-center max-650">
                        I focus on creating scalable, efficient backend systems and delivering seamless user experiences with robust, maintainable code.
                    </p>
                    <button type="button" className="btn btn-danger">Connect With Me</button>
                </div>
  
                <div>
                    <p className="text-center fs-3 fw-light text-danger">Sample Projects</p>
                </div>
  
                <section className="express">
                    <div className="pt-5">
                        <p className="fw-light fs-3 text-center">Express.Js Projects</p>
  
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img 
                                        src="./assets/images/bff.png" 
                                        className="img-fluid rounded-start" 
                                        alt="E-commerce project" 
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">E-commerce</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="https://your-demo-url.com" className="px-2">
                                                <button className="btn btn-light border border-danger border-2">Live Demo</button>
                                            </a>
                                            <a href="https://your-source-code-url.com" className="">
                                                <button className="btn btn-danger">Source Code</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img 
                                        src="./assets/images/bff.png" 
                                        className="img-fluid rounded-start" 
                                        alt="E-commerce project" 
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">E-commerce</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="https://your-demo-url.com" className="px-2">
                                                <button className="btn btn-light border border-danger border-2">Live Demo</button>
                                            </a>
                                            <a href="https://your-source-code-url.com" className="">
                                                <button className="btn btn-danger">Source Code</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  
                    </div>
                </section>
            </section>
        </main>
    );
  };
  
  export default HomePage;
  