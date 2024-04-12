import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import ListOfContents from "./ListOfContents";
import AdsComponent from "./Ads";

function ContentsComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="tgna_main_contents_tag">
                <div className="tgna_listofcontents"><ListOfContents /></div>
                <div className="tgna_contents"><Outlet /></div>
                <div className="ads_section"><AdsComponent/></div>
            </div>
        </div>
    )
}
export default ContentsComponent;