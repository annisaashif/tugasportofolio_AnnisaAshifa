

import '../styles/Kontak.css';

function Kontak() {
  return (
    <div className="container">
      <h1>Kontak</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>Email: annisaashifa00@gmail.com</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>Phone: 082283820616</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Location: Padang, Sumatera Barat</span>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://wa.me/082283820616" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default Kontak;
