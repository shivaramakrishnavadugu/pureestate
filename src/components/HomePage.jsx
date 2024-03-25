import HeaderComp from "./Header";
import { Link } from "react-router-dom"
import Footer from "./Footer";

function Homepage() {
    return (
        <div className="homepage_main_division">
            <HeaderComp />
            

            <div className="typeofland">
                <div className="na">
                    <Link to="/selectstate-non-agriculture" className="link_na">Knowledge for <span className="home_span">Non-Agriculture</span> land</Link>
                </div>
                <div class="a">
                    <Link to="/selectstate-agriculture" className="link_a">Knowledge for <span className="home_span">Agriculture</span> land</Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Homepage;