
const Sample = () =>{
    const experiences = [
        {
            company: 'Alx Fellow',
            position: 'Junior Software Developer',
            duration: 'April 2024 - Present',
            achievements: [
                'Developed and maintained web applications using Python and Django.',
                'Collaborated with the frontend team to integrate React components.',
                'Implemented RESTful APIs to improve backend and frontend communication.',
                'Enhanced application performance by optimizing database queries.'
            ],
        },
        {
            company: 'Spektra Consulting Engineers Limited',
            position: 'Senior MEP Engineer',
            duration: 'Jan 2018 - Jan 2024',
            achievements: [
                'Built backend services using Node.js and Express.',
                'Contributed to the development of a responsive frontend using React.',
                'Designed and implemented CI/CD pipelines to streamline deployment processes.',
                'Led a team of engineers in developing scalable solutions for client projects.'
            ],
        },
    ];
    


    return (<main>
        <section className="zero-intro">
        <div className="row">
            <p className="fw-light fs-2 text-center text-danger">About Me</p>
                <div className="col-md-6 text-center my-3">
                    <img className="w-75" src="./assets/images/images.png" alt="about" />
                </div>
                <div className="col-md-6">
                    <p className="fs-3 fw-bold text-center"></p>
                    <p>I am Boniface, a dedicated software developer with expertise in backend development using Python and the Django framework, 
                        as well as frontend development with JavaScript and React. 
                        I am passionate about creating efficient, scalable web applications
                         that deliver excellent user experiences. With a strong foundation in
                          both backend and frontend technologies, I am equipped to handle full-stack development
                           projects and eager to contribute to innovative solutions.</p>
                </div>
        </div>

        </section>

        <section className="one">
        <div className="row">
            <p className="fw-light fs-4 text-center text-danger"> Frontend Development</p>
                <div className="col-md-6">
                    <p></p>
                    <p>I specialize in creating intuitive and responsive user interfaces using modern technologies like React and JavaScript. My approach combines design principles with technical skills to deliver clean, user-friendly interfaces that work flawlessly across devices.</p>
                </div>
                <div className="col-md-6 text-center my-3">
                    <img className="w-75" src="./assets/images/front.jpg" alt="about" />
                </div>
            </div>

        </section>

        <section className="two">

        <div className="row">
            <p className="text-center fs-4 fw-light text-danger">Backend Development</p>
                <div className="col-md-6 text-center my-3">
                    <img className="w-75" src="./assets/images/back.svg" alt="about" />
                </div>
                <div className="col-md-6">
                    <p></p>
                    <p>On the backend, I leverage Python and Django to build scalable and efficient systems. My focus is on developing secure and high-performance server-side solutions that integrate seamlessly with frontend applications and handle complex data operations.</p>
                </div>
            </div>

        </section>

        <section className="three">
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <p className='fw-light fs-4 text-center text-danger'>Skills</p>
                <ul className='d-flex flex-column justify-content-center text-start'>
                    <li className='text-center'><strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, Responsive Design</li>
                    <li><strong>Backend:</strong> Python, Django, RESTful APIs, Database Design</li>
                    <li><strong>Tools & Technologies:</strong> Git, Docker, CI/CD, AWS</li>
                </ul>
                <p className='fw-light fs-4 text-center text-danger'>My Approach</p>
                <p className='text-center max-650'>I believe in writing clean, maintainable code and following best practices to ensure the longevity and scalability of applications. Collaboration and communication are key in my workflow, as I work closely with clients and team members to understand their needs and deliver solutions that exceed expectations.</p>
                <p className='fw-light fs-4 text-center text-danger'>Let’s Connect</p>
                <p className='text-center max-650'>I’m always excited about new opportunities and challenges. If you’re interested in collaborating on a project or just want to connect, feel free to reach out!</p>
                <ul className="d-flex flex-row justify-content-center">
                    <a href="" className="px-2"><li>
                    <i class="bi bi-linkedin"></i>
                        </li></a>
                        <a href="" className="px-2"><li>
                    <i class="bi bi-github"></i>
                        </li></a>
                        <a href="" className="px-2"><li>
                    <i class="bi bi-instagram"></i>
                        </li></a>
                        <a href="" className="px-2"><li>
                    <i class="bi bi-twitter"></i>
                        </li></a>
                        <a href="" className="px-2"><li>
                    <i class="bi bi-envelope"></i>
                        </li></a>
                </ul>
            </div>
            <div id="about-me" className="container my-5">
            <p className="text-center my-4 fw-light fs-2 text-danger">Experience</p>
            <div className="experience">
                {experiences.map((job, index) => (
                    <div className="job card mb-4" key={index}>
                        <div className="card-body">
                            <h3 className="card-title fw-light fs-5 text-danger">{job.position}</h3>
                            <h5 className="card-subtitle mb-2 text-muted fs-5 text-danger">{job.company}</h5>
                            <p className="card-subtitle mb-2 text-muted">{job.duration}</p>
                            <ul className="list-group list-group-flush">
                                {job.achievements.map((achievement, i) => (
                                    <li className="list-group-item" key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="button-container text-center mt-4">
                    <button type="button" className="btn btn-danger ">View My Projects</button>
                </div>

        </section>
       
    

    


        
    </main>)
}


export default Sample