import HeaderComp from "../components/Header";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="homepage_main_division">
            <HeaderComp />

            <div class="typeofland">
                <div class="na">
                    <Link to="#" class="link_na">Knowledge for <span>Non-Agriculture</span> land</Link>
                </div>
                <div class="a">
                    <Link to="#" class="link_a">Knowledge for <span>Agriculture</span> land</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;