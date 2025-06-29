import { useEffect } from "react";
import TeacherItem from "./TeacherItem";

function ListingTeachers({ allTeachers }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!Array.isArray(allTeachers)) {
    return <p>Cargando profesores...</p>;
  }
  return (
    <ul className="listing_teachers_container">
      {allTeachers.map((teacher) => (
        <li className="teacher_card" key={teacher.id}>
          <TeacherItem teacherToShow={teacher} />
        </li>
      ))}
    </ul>
  );
}
export default ListingTeachers;
