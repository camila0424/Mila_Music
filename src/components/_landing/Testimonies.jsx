import lina from "/images/_landing/testimonios/lina.jpg";
function Testimonies() {
  return (
    <>
      <section className="student-testimonies-section">
        <article>
          <h3 className="student-testimonies">
            ¿Estos estudiantes te contarán su experiencia con nuestras clases?
          </h3>
          <h4 className="name-student-testimonies">Lina</h4>
          <img className="img-student-testimonies" src={lina} alt="" />
        </article>
        <article>
          <p className="paragraph-student-testimonies">
            "Llevo dos años tomando clases de canto con la profesora Camila y ha
            sido una experiencia increíble. Camila es muy motivadora y cada
            clase me inspira a mejorar. Hace poco empecé también a aprender
            ukulele con ella, ¡y ha sido genial! Las clases son muy divertidas y
            complementan perfectamente mi aprendizaje musical. La recomiendo
            totalmente."
          </p>
        </article>
      </section>
    </>
  );
}

export default Testimonies;
