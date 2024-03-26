import React from "react";
import { Link } from "react-router-dom";
import HeaderComp from "./Header";
import Footer from "./Footer";

function ASelectState() {
    return (
        <div>
            <HeaderComp />
            <div className="select_state_parent">
                <h1 className="select_state">Select your state</h1>
                <p className="states"><Link to="/select_state_agriculture/tg_agriculture" className="states_links">Telangana</Link></p>
            </div>
            <Footer />
        </div>
    )
}
export default ASelectState;