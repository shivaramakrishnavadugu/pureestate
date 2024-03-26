import React from "react";
import HeaderComp from "../../components/Header";
import FooterNotFix from "../../components/FooterNotFix";
import TGAListOfContents from "../StoredTGContents/TGAListOfContents";
import AdsSection from "../StoredTGContents/AdsSection";

function TGAgriculture() {
    return (
        <div>
            <HeaderComp />
            <div className="tga_main_contents_tag">
                <div className="ads_section_component"><AdsSection /></div>
                <div className="tga_contents"></div>
                <div className="tga_listofcontents"><TGAListOfContents /></div>
            </div>
            <FooterNotFix />
        </div>
    )
}
export default TGAgriculture;