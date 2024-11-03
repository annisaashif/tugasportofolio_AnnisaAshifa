import '../styles/Porto.css';
import myImage5 from '../assets/Picture1.png'; 
import myImage6 from '../assets/Picture2.png'; 

function Porto() {
  return (
    <div>
      

      <div className="testimonial-container">
        <div className="testimonial-text">
        
          <h2>Projek 1</h2>
          <p>
            <span>Web Smart Nagari, </span>
            Dalam proyek ini, saya terlibat dalam pengkodean frontend untuk fitur login dan register, homepage, profil kota, dan lainnya.
          </p>
          <div className="testimonial-author">
            <h3>Link Github:</h3>
            <p>
              <a href="https://github.com/annisaashif/web_smart_nagari" target="_blank" rel="noopener noreferrer">
                https://github.com/annisaashif/web_smart_nagari
              </a>
            </p>
          </div>
          <div className="testimonial-image">
            <img alt="Gambar Web Smart Nagari" height="300" src={myImage5} width="300" />
          </div>
        </div>

        <div className="testimonial-text">
          <h2>Projek 2</h2>
          <p>
            <span>Website E-Rekap, </span>
            Sistem informasi untuk rekapitulasi data dengan fitur penginputan dan analisis data.
          </p>
          <div className="testimonial-author">
            <h3>Link Github:</h3>
            <p>
              <a href="https://github.com/annisaashif/web_e_rekap_BahanPokok" target="_blank" rel="noopener noreferrer">
              https://github.com/annisaashif/web_e_rekap_BahanPokok
              </a>
            </p>
          </div>
          <div className="testimonial-image">
            <img alt="Gambar Website E-Rekap" height="300" src={myImage6} width="300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porto;
