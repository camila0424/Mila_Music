import { Link } from "react-router-dom";
import pianoIcon from "../../images/landing/instrumentos/piano.png";
import guitarraIcon from "../../images/_landing/instrumentos/guitarra.png";
import cantoIcon from "../../images/_landing/instrumentos/canto.png";
import saxofonIcon from "../../images/_landing/instrumentos/saxofón.png";
function Instruments() {
  return (
    <section className="instruments-container_landing">
      <h3 className="tittle-instruments_landing">
        Clases de música con profesores de <br />
        todo el mundo
      </h3>
      <ul className="instruments-list_landing">
        <li>
          <span className="icon-instrument_landing">
            <img src={pianoIcon} alt="icono piano" />
          </span>
          <div>
            <h3 className="subject-instrument_landing">Clases de piano</h3>
            <p className="teachers-instruments_landing">700 profesores</p>
          </div>
        </li>
        <li>
          <span className="icon-instrument_landing">
            <img src={saxofonIcon} alt="icono saxofón" />
          </span>
          <div>
            <h3 className="subject-instrument_landing">Clases de saxofón</h3>
            <p className="teachers-instruments_landing">200 profesores</p>
          </div>
        </li>
        <li>
          <span className="icon-instrument_landing">
            <img src={cantoIcon} alt="icono canto" />
          </span>
          <div>
            <h3 className="subject-instrument_landing">Clases de canto</h3>
            <p className="teachers-instruments_landing">1000 profesores</p>
          </div>
        </li>
        <li>
          <span className="icon-instrument_landing">
            <img src={guitarraIcon} alt="icono guitarra" />
          </span>
          <div>
            <h3 className="subject-instrument_landing">Clases de guitarra</h3>
            <p className="teachers-instruments_landing">800 profesores</p>
          </div>
        </li>
      </ul>
      <Link className="ver-mas_landing" to="/teacher-list">
        Ver más instrumentos
      </Link>
    </section>
  );
}

export default Instruments;
