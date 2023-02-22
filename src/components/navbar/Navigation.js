import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../../img/logo-selim-trade.png"

const Navigation = () => {
    return (
        <Container expand="md" className="navigation">
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
                <Nav.Link href="/" className="nav_link">г. Бишкек<br/>+996 (552) 57 07 55</Nav.Link>
            </Navbar.Collapse>
            </Container>
    </Navbar>
    </Container>
        // <div className="container">
        // <nav className="nav_container container">
        //         <div className="nav_row">
        //             <a href="/">
        //                 <img src={logo} alt="logo" />
        //             </a>
        //             <ul className="nav_list">
        //                 <li><a href="/">Главная</a></li>
        //                 <li><a href="/">Услуги</a></li>
        //                 <li><a href="/">Новости</a></li>
        //                 <li><a href="/">Наши работы</a></li>
        //             </ul>
        //             <a href="tel:+996552570755">г. Бишкек<br/>+996 (552) 57 07 55</a>
        //         </div>
        // </nav>
        // </div>
    );
}

export default Navigation;