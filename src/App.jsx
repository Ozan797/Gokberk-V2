import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import NavbarComponent from "./components/Navbar/NavbarComponent";
function App() {
  return (
    <>
    <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
