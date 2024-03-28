import React from "react";
import { Link } from "react-router-dom";

function TGNAListOfContents() {
    return (
        <div>
            <div className="listofcontents_main_tag">
                <h1 className="listofcontents_heading">Contents</h1>
                <div className="listofcontents">
                    <ol>
                        <li><Link to="know_the_telangana" className="listofcontents_links">Know the Telangana</Link></li>
                        <li><Link to="ownership_confirmation_tg" className="listofcontents_links">Ownership Confirmation</Link></li>
                        <li><Link to="location_confirmation_tg" className="listofcontents_links">Location Confirmation</Link></li>
                        <li><Link to="prohibited_test_tg" className="listofcontents_links">Prohibited Property Check</Link></li>
                        <li><Link to="approvals_test_tg" className="listofcontents_links">Approvals Check</Link></li>
                        <li><Link to="environment_test_tg" className="listofcontents_links">Environment Check</Link></li>
                        <li><Link to="facilities_test_tg" className="listofcontents_links">Facilities Check</Link></li>
                        <li><Link to="price_test_tg" className="listofcontents_links">Price Check</Link></li>
                        <li><Link to="decision_taking_tg" className="listofcontents_links">Taking Decision</Link></li>
                        <li><Link to="preparing_documents_tg" className="listofcontents_links">Preparing Documents</Link></li>
                        <li><Link to="registration_tg" className="listofcontents_links">Registration Process</Link></li>
                        <li><Link to="collecting_documents_tg" className="listofcontents_links">Documents to Receive</Link></li>
                        <li><Link to="know_updates" className="listofcontents_links">Know the Updates</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TGNAListOfContents;