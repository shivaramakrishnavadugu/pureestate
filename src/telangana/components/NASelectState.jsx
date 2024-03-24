import React from "react";
import { Link } from "react-router-dom";
import HeaderComp from "./Header";

function NASelectState() {
    return (
        <div>
            <HeaderComp />
            <div className="select_state_parent">
                <h1 className="select_state">Select your state</h1>
                <p className="states"><Link to="/selectstate-non-agriculture/tg-non-agriculture" className="states_links">Telangana</Link></p>
            </div>
        </div>
    )
}
export default NASelectState;