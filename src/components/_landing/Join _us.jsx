import { Link } from "react-router-dom";

function Join_us() {
  return (
    <section className="join-us">
      <h3 className="title-join">Únete a la familia musical más grande</h3>
      <p className="paragraph-join">
        Nuestros profes son unos expertos en su materia y te <br />
        ayudarán a alcanzar tu objetivo musical.
      </p>
      <Link className="button-join" to="/teacher-list">
        Encuentra a tu profesor ideal
      </Link>
    </section>
  );
}

export default Join_us;
