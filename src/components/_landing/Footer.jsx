import { Link } from "react-router-dom";
import facebook from "/images/landing/redes-sociales/facebook.png";
import instagram from "/images/landing/redes-sociales/instagram.png";
import twitter from "/images/landing/redes-sociales/twitter.png";

function Footer() {
  return (
    <footer className="footer" id="page-footer">
      <section className="line">
        <h3>Nuestra empresa</h3>
        <ul>
          <li>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/ayuda">Ayuda</Link>
          </li>
          <li>
            <Link to="/privacidad">Políticas de privacidad</Link>
          </li>
        </ul>
      </section>

      <section className="line">
        <h3>Recursos</h3>
        <ul>
          <li>
            <Link to="/dar-clases">Dar clases online</Link>
          </li>
          <li>
            <Link to="/teacher-list">Recibir clases online</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </section>

      <section className="social">
        <a
          href="https://twitter.com/?lang=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="icono de twitter" />
        </a>
        <a
          href="https://www.facebook.com/login/?locale=es_ES"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="icono de Facebook" />
        </a>
        <a
          href="https://www.instagram.com/mila_musikclass/?igsh=MTdoMDQ2bXE5MHp4eg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="icono de Instagram" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
