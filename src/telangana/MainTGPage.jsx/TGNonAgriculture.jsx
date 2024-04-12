import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../../components/Header";
import TGNAListOfContents from "../StoredTGContents/TGNAListOfContents";
import AdsSection from "./AdsSection";

function TGNonAgriculture() {
    return (
        <div>
            <HeaderComp />
            <div className="tgna_main_contents_tag">
                <div className="tgna_listofcontents"><TGNAListOfContents /></div>
                <div className="tgna_contents"><Outlet /></div>
                <div className="ads_section"><AdsSection/></div>
            </div>
        </div>
    )
}
export default TGNonAgriculture;