import HeaderComp from "./Header";
import { Link } from "react-router-dom"
import Footer from "./Footer";

function HomeComponent() {
    return (
        <div className="homepage_main_division">
            <HeaderComp />
            <div className="typeofland">
                <p>If your visited here means your going to buy a property. So, what are you waiting for please click below button and follow the steps.</p>
                <p>Please read consciously and take action.</p>
                <div className="na">
                    <Link to="/contents/about_india" className="link_na"><span className="home_span">Steps for Buying a Property</span></Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomeComponent;