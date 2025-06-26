import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/*  <!-- Botón hamburguesa --> */}
      <button className="hamburguesa js_hamburguer ">&#9776;</button>

      {/*  <!-- Menú personalizado --> */}
      <section className="menu_ham js_menu_ham collapsed" id="menu">
        <Link className="menu_ham_log-in-btn" to="#">
          Inicia sesión
        </Link>
        <Link className="menu_ham_sign-up-btn" to="#">
          Regístrate Gratis
        </Link>
        <Link className="menu_ham_find">Busca clases</Link>
        <section className="other-class">
          <Link className="menu_ham_sub-find" to="#">
            Repaso Escolar
          </Link>
          <Link className="menu_ham_sub-find" to="#">
            Solfeo
          </Link>
          <Link className="menu_ham_sub-find" to="#">
            Guitarra Eléctrica
          </Link>
        </section>
        <Link className="menu_ham_find" to="#">
          Inscribete como profe de Mila Music
        </Link>
        <Link className="menu_ham_find" to="#">
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
        <Link to="#">
          <img
            src="../../../images/logo/logo_final.png"
            height="100px"
            alt="Esta es la imagen del logo"
          />
        </Link>
      </div>
      <div className="menu_general">
        <nav className="menu_cent">
          <Link to="#como-funciona">¿Cómo funciona?</Link>
          <Link to="#encuentra-tu-profe">Encuentra tu profe</Link>
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
