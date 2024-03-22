import HeaderComp from "../components/Header";

function Homepage() {
    return (
        <div className="homepage_main_division">
            <HeaderComp />

            <div class="typeofland">
                <div class="na">
                    Knowledge for <span>Non-Agriculture</span> land
                </div>
                <div class="a">
                    Knowledge for <span>Agriculture</span> land
                </div>
            </div>
        </div>
    )
}

export default Homepage;