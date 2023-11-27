import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";

function NavbarComponent() {
  return (
    <header>
      <Navbar
        expand="md"
        className="bg-body-tertiary mb-3"
        data-bs-theme="light"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">Ozan Gokberk</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Ozan Gokberk
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-end flex-grow-1 pe-3 mr-5`}>
                <Nav.Link href="/" className={styles.nav_link}>Home</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <a
                  download
                  href="../../../public/Resume.pdf"
                  className={`btn btn-danger ${styles.resume}`}
                  role="button"
                >
                  Resume
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