import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListingTeachers from "./_listing_Teachers/ListingTeachers";
import FormTeachersList from "./_listing_Teachers/FormTeacherList";
import TeacherDetail from "../components/_pages/TeacherDetail";
import ContactTeacher from "../components/_pages/ContactTeacher";
import LandingPage from "../components/_pages/Landing";
import Header from "./_landing/Header";
import Footer from "./_landing/Footer";

function App() {
  const [allTeachers, setAllTeachers] = useState([]);
  const [filterInstrument, setFilterInstrument] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleInputFilterInstrument = (ev) => {
    setFilterInstrument(ev.target.value);
  };

  function handleChange(event) {
    setSelectedLanguage(event.target.value);
  }

  const filteredTeachers = allTeachers.filter(
    (teacher) =>
      teacher.language.toLowerCase().includes(selectedLanguage.toLowerCase()) &&
      teacher.instrument.toLowerCase().includes(filterInstrument.toLowerCase())
  );
  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos cargados:", data);
        setAllTeachers(data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/teacher-list"
          element={
            <>
              <FormTeachersList
                handleInputFilterInstrument={handleInputFilterInstrument}
                selectedLanguage={selectedLanguage}
                filterInstrument={filterInstrument}
                handleChange={handleChange}
              />
              <ListingTeachers allTeachers={filteredTeachers} />
            </>
          }
        />
        <Route
          path="/teacher-detail/:id/:name"
          element={<TeacherDetail allTeachers={allTeachers} />}
        />

        <Route
          path="/contact-teacher/:id/:name"
          element={<ContactTeacher allTeachers={allTeachers} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
