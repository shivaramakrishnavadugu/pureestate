import React from "react";
import HeaderComp from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return(
        <div>
            <HeaderComp />
            <div className="about_main_tag">
                <div className="about">
                    <h2 className="about_heading">About Us</h2>
                    <div className="about_info">
                        <p>We are PureEstate, dedicated to provide knowledge on real estate in India and make the India to grow problematic free real estate, our aim is to save an individual from buying a problematic property whether it is agriculture land, plot or home.</p>
                        <p>The India's common people mostly shows an interest to buy a plot, agriculture land and home. Investing a lot of money in it to secure the future and to come out from the rent trap and investment purpose but if the property has any litigation than that property could become the biggest problem of his entire life until it solves, mostly the land problems are very complicated and it could not be solvable in a short period of time.</p>
                        <p>So, that's the reason we started the PureEstate to help every individual in India to providing a clear cut knowledge in property buying matters.</p>
                        <p>For any further help can contact us through email in Contact Us page and can give us any suggestions, complaints and feedback through the email in Suggestions & Feedback page.</p>

                        <p>Thanking you</p>
                        <p>Team PureEstate.</p>
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    )
}
export default About;