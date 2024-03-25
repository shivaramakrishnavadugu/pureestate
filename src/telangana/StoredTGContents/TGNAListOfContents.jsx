import React from "react";
import { Link } from "react-router-dom";

function TGNAListOfContents() {
    return (
        <div>
            <div className="listofcontents_main_tag">
                <h1 className="listofcontents_heading">Steps to Know</h1>
                <div className="listofcontents">
                    <ol>
                        <li><Link to="" className="listofcontents_links">Introduction</Link></li>
                        <li><Link to="" className="listofcontents_links">Ownership Confirmation</Link></li>
                        <li><Link to="" className="listofcontents_links">Location Confirmation</Link></li>
                        <li><Link to="" className="listofcontents_links">Prohibited Property Check</Link></li>
                        <li><Link to="" className="listofcontents_links">Approvals Check</Link></li>
                        <li><Link to="" className="listofcontents_links">Environment Check</Link></li>
                        <li><Link to="" className="listofcontents_links">Facilities Check</Link></li>
                        <li><Link to="" className="listofcontents_links">Price Check</Link></li>
                        <li><Link to="" className="listofcontents_links">Taking Decision</Link></li>
                        <li><Link to="" className="listofcontents_links">Making Papers</Link></li>
                        <li><Link to="" className="listofcontents_links">Registration Process</Link></li>
                        <li><Link to="" className="listofcontents_links">Receiving Required Papers</Link></li>
                        <li><Link to="" className="listofcontents_links">Know the Govt Orders Regarding Properties</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TGNAListOfContents;