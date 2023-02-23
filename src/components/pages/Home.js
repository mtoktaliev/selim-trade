import Aboutus from "../aboutus/Aboutus";
import Header from "../header/Header";
import News from "../news/News";
import Ouradvantages from "../ouradvantages/Ouradvantages";
import Weoffer from "../weoffer/Weoffer";

const Home = () => {
    return ( 
        <div>
            <Header />
            <Aboutus />
            <Weoffer />
            <Ouradvantages />
            <News />
        </div>
     );
}

export default Home;