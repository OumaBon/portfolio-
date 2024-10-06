import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-bg-light">
      <div className="footer-container py-4">
        {/* Add row to wrap the columns */}
        <div className="row">
          {/* Navigation Links */}
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
            <ul className="d-flex flex-column">
              <Link to="/" className="text-decoration-none text-danger pt-2 fw-bold fs-3">BO.</Link>
              <Link to="/" className="text-decoration-none text-dark pt-2 fs-6">Home</Link>
              <Link to="/about" className="text-decoration-none text-dark pt-2 fs-6">About Me</Link>
              <Link to="/projects" className="text-decoration-none text-dark pt-2 fs-6">Projects</Link>
              <Link to="/contact" className="text-decoration-none text-dark pt-2 fs-6">Contact</Link>
            </ul>
          </div>

          {/* Technologies Summary */}
          <div className="col-lg-4 col-md-4 col-sm-12 pt-4 pt-md-0">
            <h5 className="fw-bold">Technologies I Use</h5>
            <p className="text-muted">
              I specialize in building full-stack web applications using the following technologies:
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-danger"></i>Databases(SQL, NoSQL)</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>Python (Django, Flask, FastAPI)</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>JavaScript (React, Express,Node)</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>CI/CD (Github, Jenkins)</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>Bootstrap, CSS, SCSS</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>DevOps/Cloud(Docker,Kubernetes,CI/CD)</li>
              <li><i className="bi bi-check-circle-fill text-danger"></i>API Development &Integration</li>
            </ul>
          </div>

          {/* Projects List */}
          <div className="col-lg-4 col-md-4 col-sm-12 pt-4 pt-md-0">
            <h5 className="fw-bold">Notable Projects</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/project1" className="text-decoration-none text-dark">
                  <i className="bi bi-file-earmark-code-fill text-danger"></i> E-commerce Platform
                </Link>
                <p className="text-muted small">An online store with product listings, cart functionality, and payment integration.</p>
              </li>
              <li>
                <Link to="/project2" className="text-decoration-none text-dark">
                  <i className="bi bi-file-earmark-code-fill text-danger"></i> Property Management System
                </Link>
                <p className="text-muted small">A system for managing property listings, tenants, and payments.</p>
              </li>
              <li>
                <Link to="/project3" className="text-decoration-none text-dark">
                  <i className="bi bi-file-earmark-code-fill text-danger"></i> Sports Streaming Platform
                </Link>
                <p className="text-muted small">A platform for streaming sports events and managing subscriptions.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <main className="pt-3">
          <hr className="flex-grow-1 hr-custom" />
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="m-0 p-2">Boniface Ouma</p>
            <ul className="d-flex flex-row list-unstyled m-0 p-2">
              <Link to="https://github.com/OumaBon" target="_blank">
                <i className="bi bi-github text-danger px-3"></i>
              </Link>
              <Link to="https://twitter.com/OumaBon" target="_blank">
                <i className="bi bi-twitter text-danger px-3"></i>
              </Link>
              <Link to="https://wa.me/your-whatsapp-number" target="_blank">
                <i className="bi bi-whatsapp text-danger px-3"></i>
              </Link>
              <Link to="mailto:oumamugah@gmail.com" target="_blank">
                <i className="bi bi-envelope-fill text-danger px-3"></i>
              </Link>
            </ul>
          </div>
          <hr className="flex-grow-1 hr-custom" />
          
          {/* Footer bottom info */}
          <div className="d-flex flex-column align-items-center pt-3">
            <p className="text-muted small">© {new Date().getFullYear()} Boniface Ouma. All Rights Reserved.</p>
            <p className="text-muted small">Built with React & Bootstrap</p>
            <p className="text-muted small">Designed by Boniface Ouma</p>
          </div>
        </main>
      </div>
    </footer>
  );
}

export default Footer;
