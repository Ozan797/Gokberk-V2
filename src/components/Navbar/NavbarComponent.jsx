import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import DownloadIcon from "@mui/icons-material/Download";
function NavbarComponent() {
  const whiteText = {
    color: "#fff",
  };
    const openPdf = () => {
      window.open("./src/assets/Resume.pdf")
    }
  

  return (
    <header>
      <Navbar expand="md" className="mb-3" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="/">Ozan Gokberk</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Ozan Gokberk
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-end flex-grow-1 pe-3 mr-5`}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <a
                  // download
                  // href="../../../public/OzanGokberkCV.pdf"
                  className={`btn ${styles.resume}`}
                  role="button"
                  style={whiteText}
                  onClick={openPdf}
                >
                  <DownloadIcon /> Resume
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarComponent;
