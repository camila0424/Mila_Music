import okay from "../../../public/images/_landing/beneficios/okay.png";

function How_it_works() {
  return (
    <section className="how-it-works-container">
      <div className="container-purple">
        <h3 className="easy-tittle">¿Cómo funciona Mila Music?</h3>
        <p className="easy">
          ¡Sencillo! <br />
          son clases online, en directo, con un profesor particular para ti.
        </p>
      </div>

      <ul className="how-it-works-list">
        <li>
          <span className="number-how-it">1 </span>
          <div>
            <h3 className="tittle-functions">Encuenta a tu profe</h3>
            <p className="description-functions">
              En nuestro equipo, encontrarás a tu profesor ideal. Se adaptará a
              tus necesidades y te ayudará a alcanzar tus objetivos.
            </p>
          </div>
        </li>

        <li>
          <span className="number-how-it">2 </span>
          <div>
            <h3 className="tittle-functions">
              Organiza tus clases en tu agenda
            </h3>
            <p className="description-functions">
              Escoge un profesor online según tu disponibilidad horaria y
              disfruta de la flexibilidad de las clases en línea.
            </p>
          </div>
        </li>

        <li>
          <span className="number-how-it">3 </span>
          <div>
            <h3 className="tittle-functions">
              Aprende con metodologías únicas
            </h3>
            <p className="description-functions">
              Nuestras clases son diseñadas de acuerdo a tus necesidades, tus
              conocimientos y en pro de ayudarte a lograr tus objetivos.
            </p>
          </div>
        </li>
      </ul>
      <div className="ok">
        <img className="imag-ok" src={okay} alt="imagen de okay" />
        <h3 className="thinking-of-you">Nos preocupamos por ti.</h3>
        <p className="paragraph-thinking">
          Por eso, si después de tu primera clase <br />
          no te convence tu profesor/a, <br />
          te ayudamos a encontrar otro.
        </p>
      </div>
    </section>
  );
}

export default How_it_works;
