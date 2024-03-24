import React from "react";
import HeaderComp from "../../components/Header";
import FooterNotFix from "../../components/FooterNotFix";
import TGAContents from "../StoredTGContents/TGAContents";
import TGAListOfContents from "../StoredTGContents/TGAListOfContents";

function TGAgriculture() {
    return (
        <div>
            <HeaderComp />
            <div className="tga_main_contents_tag">
                <div className="tga_contents"><TGAContents /></div>
                <div className="tga_listofcontents"><TGAListOfContents /></div>
            </div>
            <FooterNotFix />
        </div>
    )
}
export default TGAgriculture;