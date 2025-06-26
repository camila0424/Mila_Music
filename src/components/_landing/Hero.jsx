import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <h1 className="title_1">
        Aprende música <br />
        en clases privadas online <br />
        desde cualquier parte del mundo
      </h1>
      <form className="form_landing">
        <Link className="toolBtn buscar-instrumentos" to="x">
          ¿Qué quieres aprender?<i className="fa-solid fa-magnifying-glass"></i>
        </Link>
      </form>
      <h2 className="instruments_landing">
        Canto - Piano - Guitarra - Saxofón - Ukulele
      </h2>
      <ul className="benefits_3_landing">
        <li>Conoce al profesor</li>
        <li>Prueba 20 minutos gratis</li>
        <li>Aula virtual para tus clases</li>
      </ul>
    </section>
  );
}

export default Hero;
