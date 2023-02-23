import sectional from "./../../img/we-offer-sectional.jpg"
import automation from "./../../img/we-offer-automation.jpg"
import roll from "./../../img/we-offer-roll.jpg"
import swing from "./../../img/we-offer-swing.jpg"
import folding from "./../../img/we-offer-folding.jpg"


const Weoffer = () => {
    return (
        <div className="weoffer">
            <div className="container">
            <h2 className="weoffer_title">Мы предлагаем</h2>
                <div className="weoffer_cards mansory">
                    <a href="/" className="weoffer_cards-link">
                        <div className="weoffer_img-box">
                            <img src={sectional} alt="sectional"/>
                            <div className="weoffer_card-name">Секционные</div>
                        </div>
                    </a>
                    <a href="/" className="weoffer_cards-link">
                        <div className="weoffer_img-box">
                            <img src={swing} alt="swing"/>
                            <div className="weoffer_card-name">Распашные</div>
                        </div>
                    </a>
                    <a href="/" className="weoffer_cards-link">
                        <div className="weoffer_img-box">
                            <img src={automation} alt="automation"/>
                            <div className="weoffer_card-name">Автоматика</div>
                        </div>
                    </a>
                    <a href="/" className="weoffer_cards-link">
                        <div className="weoffer_img-box">
                            <img src={folding} alt="folding"/>
                            <div className="weoffer_card-name">Складные</div>
                        </div>
                    </a>
                    <a href="/" className="weoffer_cards-link">
                        <div className="weoffer_img-box">
                            <img src={roll} alt="roll"/>
                            <div className="weoffer_card-name">Роль ворота</div>
                        </div>
                    </a>
                </div>
                <div className="light_btn-container">
                    <button className="light_btn">смотреть все</button>
                </div>
               
            </div>
        </div>
    );
}

export default Weoffer;