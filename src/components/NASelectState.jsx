import React from "react";
import { Link } from "react-router-dom";
import HeaderComp from "./Header";
import Footer from "./Footer";

function NASelectState() {
    return (
        <div>
            <HeaderComp />
            <div className="select_state_parent">
                <h1 className="select_state">Select an Option</h1>
                <p className="states">
                    <Link to="/select_state_non_agriculture/tg_non_agriculture/know_the_telangana" className="states_links">
                        <img src="hyderabad-charminar.jpg" alt="India" className="telangana_image" />
                        <p>Common for All India</p>
                    </Link></p>
            </div>
            <Footer />
        </div>
    )
}
export default NASelectState;