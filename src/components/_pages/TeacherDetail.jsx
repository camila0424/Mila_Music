import { Link, useParams } from "react-router-dom";

function TeacherDetail({ allTeachers }) {
  const { id } = useParams();

  const teacherToShow = allTeachers.find((teacher) => teacher.id === id);
  if (!teacherToShow) {
    return (
      <div className="detailTeacher">
        <div>
          <h3 className="detail_name_teacher">
            No existe esa profesora/profesor con el id {id}
          </h3>
          <Link className="detail_return_btn" to="/">
            Volver
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="detailTeacher">
      <img
        className="detail_photo_teacher"
        src={teacherToShow.photo}
        alt={teacherToShow.name}
      />
      <div>
        <h3 className="detail_name_teacher">{teacherToShow.name}</h3>
        <p>{teacherToShow.number_of_classes}</p>
        <p className="detail_instrumet_to_teach">{teacherToShow.instrument}</p>
        <p>Habla: {teacherToShow.language}</p>
        <p className="detail_cost_per_hour">
          Valor de la clase: {teacherToShow.cost_per_hour}
        </p>

        <h3 className="detail_about_teacher">Título del anuncio</h3>
        <p className="detail_ad_title">{teacherToShow.ad_title}</p>

        <h3 className="detail_about_teacher">Acerca del profe</h3>
        <p className="detail_ad_description">{teacherToShow.ad_desc}</p>

        <h3 className="detail_about_teacher">Acerca de la clase</h3>
        <p className="detail_class_description">{teacherToShow.class_desc}</p>
      </div>

      <div className="detail_buttons_container">
        <Link className="detail_return_btn" to="/teacher-list">
          Volver
        </Link>
        <Link
          to={`/contact-teacher/${
            teacherToShow.id
          }/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
          className="detail_contact_btn"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
}

export default TeacherDetail;
