import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Experience from "./pages/Experience/Experience";
import Error from "./pages/Error/Error";
import Projects from "./pages/Projects/Projects";
function App() {
  return (
    <>
    <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/experience"  element={<Experience />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
