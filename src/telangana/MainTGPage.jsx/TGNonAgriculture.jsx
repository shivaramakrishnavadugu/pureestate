import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../../components/Header";
import FooterNotFix from "../../components/FooterNotFix";
import TGNAListOfContents from "../StoredTGContents/TGNAListOfContents";
import AdsSection from "../StoredTGContents/AdsSection";

function TGNonAgriculture() {
    return (
        <div>
            <HeaderComp />
            <div className="tgna_main_contents_tag">
                <div className="ads_section_component"><AdsSection /></div>
                <div className="tgna_contents"><Outlet /></div>
                <div className="tgna_listofcontents"><TGNAListOfContents /></div>
            </div>
            <div><FooterNotFix /></div>
        </div>
    )
}
export default TGNonAgriculture;