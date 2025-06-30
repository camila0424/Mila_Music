import { Link } from "react-router-dom";
import calendario from "/images/landing/beneficios/calendario.png";
import bolsaDinero from "/images/landing/beneficios/bolsa-dinero.png";
import meet from "/images/landing/beneficios/meet.png";
import videoCall from "/images/landing/beneficios/video-call.png";
function Benefits() {
  return (
    <section className="benefits_container">
      <article className="aritcle_benefits">
        <img src={calendario} alt="imagen calendario" />
        <h3 className="tittle_benefits">Clases 100% flexibles</h3>
        <p className="description_benefits">
          Clases cuando quieras, desde el sofá de casa, despacho, oficina...
        </p>
      </article>

      <article className="aritcle_benefits">
        <img src={meet} alt="imagen de un meet " />
        <h3 className="tittle_benefits">Satisfacción garantizada</h3>
        <p className="description_benefits">
          Nos encargamos de todo. Así tu puedes centrarte en tus clases.
        </p>
      </article>

      <article className="aritcle_benefits">
        <img src={videoCall} alt="imagen video-call" />
        <h3 className="tittle_benefits">Profesores Certificados</h3>
        <p className="description_benefits">
          Da un salto en tu carrera musical, domina un instrumento o recibe
          refuerzo escolar.
        </p>
      </article>

      <article className="aritcle_benefits">
        <img src={bolsaDinero} alt="imagen bolsa de dinero" />
        <h3 className="tittle_benefits">Accesible para todos</h3>
        <p className="description_benefits">
          Clases económicas: sin matrícula, mínimo de horas, deslpazamientos.
        </p>
      </article>
      <Link className="reserva_btn" to="/teacher-list">
        Reserva tu prueba gratuita
      </Link>
    </section>
  );
}

export default Benefits;
