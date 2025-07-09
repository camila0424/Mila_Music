import Logo from "/images/logo/logo__final.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [menuClass, setMenuClass] = useState("collapsed");

  const handleClick = () => {
    setMenuClass(menuClass === "collapsed" ? "" : "collapsed");
  };
  useEffect(() => {
    document.body.addEventListener("click", (ev) => {
      console.log(ev);

      if (!ev.target.classList.contains("hamburguesa")) {
        setMenuClass("collapsed");
      }
    });
  }, []);

  return (
    <header>
      {/*  <!-- Botón hamburguesa --> */}
      <button className="hamburguesa js_hamburguer " onClick={handleClick}>
        &#9776;
      </button>

      {/*  <!-- Menú personalizado --> */}

      <section className={"menu_ham js_menu_ham " + menuClass} id="menu">
        <Link className="menu_ham_log-in-btn" to="#">
          Inicia sesión
        </Link>
        <Link className="menu_ham_sign-up-btn" to="#">
          Regístrate Gratis
        </Link>
        <Link className="menu_ham_find">Busca clases</Link>
        <section className="other-class">
          <Link className="menu_ham_sub-find" to="/teacher-list">
            Piano
          </Link>
          <Link className="menu_ham_sub-find" to="/teacher-list">
            Canto
          </Link>
          <Link className="menu_ham_sub-find" to="/teacher-list">
            Guitarra
          </Link>
        </section>
        <Link className="menu_ham_find" to="#">
          Inscribete como profe de Mila Music
        </Link>
        <Link className="menu_ham_find" to="#how_it_works">
          ¿Cómo funciona?
        </Link>
        <Link className="menu_ham_find" to="#">
          Comunidad
        </Link>
        <Link className="menu_ham_find" to="#">
          Contáctanos
        </Link>
        <Link className="menu_ham_find-benefit" to="#">
          Beneficios
        </Link>
      </section>

      <div className="logo">
        <Link to="/">
          <img src={Logo} height="80px" alt="Esta es la imagen del logo" />
        </Link>
      </div>
      <div className="menu_general">
        <nav className="menu_cent">
          <Link to="#como-funciona">¿Cómo funciona?</Link>
          <Link to="/teacher-list">Encuentra tu profe</Link>
        </nav>
        <nav className="menu_der">
          <Link to="#iniciar-sesion">Inicia sesión</Link>
          <Link to="#registro">Regístrate gratis</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
