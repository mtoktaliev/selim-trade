import logo from "./../../img/logo-selim-trade.png"

const Navigation = () => {
    return (
            <div className="navigation">
                <a href="/">
                    <img
                    src={logo}
                    alt="Logo"
                    className="d-inline-block align-top"/>
                </a>
                <nav className="nav">
                    <ul className="nav_list">
                        <li href="/" className="nav_link nav_link-active">Главная</li>
                        <li href="/services" className="nav_link">Услуги</li>
                        <li href="/news" className="nav_link">Новости</li>
                        <li href="/ourworks" className="nav_link">Наши работы</li>
                    </ul>
                </nav>
                <div href="/" className="nav_contacts">г. Бишкек<br/>+996 (552) 57 07 55</div>
            </div>
    );
}

export default Navigation;