import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../../img/logo-selim-trade.png"

const Navigation = () => {
    return (
        <Container className="navigation">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navigation" fixed="top">
            <Container>
            <Navbar.Brand href="/">
                <img
                src={logo}
                alt="Logo"
                className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav_list">
                    <Nav.Link href="/" className="nav_link">Главная</Nav.Link>
                    <Nav.Link href="/services" className="nav_link">Услуги</Nav.Link>
                    <Nav.Link href="/news" className="nav_link">Новости</Nav.Link>
                    <Nav.Link href="/ourworks" className="nav_link">Наши работы</Nav.Link>
                </Nav>
                <Nav.Link href="/" className="nav_contacts">г. Бишкек<br/>+996 (552) 57 07 55</Nav.Link>
            </Navbar.Collapse>
            </Container>
    </Navbar>
    </Container>
    );
}

export default Navigation;