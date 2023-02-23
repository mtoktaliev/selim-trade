import Aboutus from "../aboutus/Aboutus";
import Header from "../header/Header";
import Navigation from "../navbar/Navigation";
import Ouradvantages from "../ouradvantages/Ouradvantages";
import Weoffer from "../weoffer/Weoffer";

const Home = () => {
    return ( 
        <div>
            <Navigation />
            <Header />
            <Aboutus />
            <Weoffer />
            <Ouradvantages />
        </div>
     );
}

export default Home;