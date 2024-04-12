import React from "react";
import { Link } from "react-router-dom";

function ListOfContents() {

    function ResponsiveContent() {
        var contentbarhead = document.getElementById("content_bar_head");
        var contentstab = document.getElementById("list_of_content_idd");

        if (contentstab.style.display === "block"){
            contentstab.style.display = "none";
        }else{
            contentstab.style.display = "block";
        }
        contentbarhead.classList.toggle("contentnavchange");
    }


    return (
        <div>

            <div className="contents_bar_head" id="content_bar_head" onClick={ResponsiveContent}>
                <div className="contents_bar_one"></div>
                <div className="contents_bar_two"></div>
                <div className="contents_bar_three"></div>
                <p>Contents</p>
            </div>

            <div className="listofcontents_main_tag" id="list_of_content_idd">
                <h1 className="listofcontents_heading">Contents</h1>
                <div className="listofcontents">
                    <ol>
                        <li><Link to="about_india" className="listofcontents_links">About India</Link></li>
                        <li><Link to="ownership_confirmation" className="listofcontents_links">Ownership Confirmation</Link></li>
                        <li><Link to="location_confirmation" className="listofcontents_links">Location Confirmation</Link></li>
                        <li><Link to="prohibited_property_verification" className="listofcontents_links">Prohibited Property Verification</Link></li>
                        <li><Link to="approvals_check" className="listofcontents_links">Approvals Check</Link></li>
                        <li><Link to="examining_environment" className="listofcontents_links">Examining Environment</Link></li>
                        <li><Link to="confirming_facilities" className="listofcontents_links">Confirming Facilities</Link></li>
                        <li><Link to="price_clarification" className="listofcontents_links">Price Clarification</Link></li>
                        <li><Link to="taking_decision" className="listofcontents_links">Taking Decision</Link></li>
                        <li><Link to="preparing_documents" className="listofcontents_links">Preparing Documents</Link></li>
                        <li><Link to="registration_process" className="listofcontents_links">Registration Process</Link></li>
                        <li><Link to="collecting_documents" className="listofcontents_links">Collecting Documents</Link></li>
                        <li><Link to="be_updated" className="listofcontents_links">Be Updated</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ListOfContents;