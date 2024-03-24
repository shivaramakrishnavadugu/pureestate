import React from "react";
import HeaderComp from "../../components/Header";
import FooterNotFix from "../../components/FooterNotFix";
import TGNAContents from "../StoredTGContents/TGNAContents";
import TGNAListOfContents from "../StoredTGContents/TGNAListOfContents";

function TGNonAgriculture() {
    return (
        <div>
            <HeaderComp />
            <div className="tgna_main_contents_tag">
                <div className="tgna_contents"><TGNAContents /></div>
                <div className="tgna_listofcontents"><TGNAListOfContents /></div>
            </div>
            <div><FooterNotFix /></div>
        </div>
    )
}
export default TGNonAgriculture;