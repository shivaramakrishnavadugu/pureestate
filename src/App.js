import './App.css';
import './App_Responsive.css';
import './Scripts.js';
import { Routes, Route } from "react-router-dom";
import HomeComponents from './Components/Home.jsx';
import ContactComponent from './Components/Contact.jsx';
import AboutComponent from './Components/About.jsx';
import SuggestFeedback from './Components/SuggestFeedback.jsx';
import PageNotFound from './Components/404.jsx';
import TermsOfUse from './Components/TermsOfUse.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import ContentsComponent from './Components/Contents.jsx'; //Parent(Contents)
import AboutIndia from './PagesOfContent/AboutIndia.jsx'; //Child
import OwnershipConfirmation from './PagesOfContent/OwnershipConfirmation.jsx'; //Child
import LocationConfirmation from './PagesOfContent/LocationConfirmation.jsx'; //Child
import ProhibitedPropertyVerification from './PagesOfContent/ProhibitedPropertyVerification.jsx'; //Child
import ApprovalsCheck from './PagesOfContent/ApprovalsCheck.jsx'; //Child
import ExaminingEnvironment from './PagesOfContent/ExaminingEnvironment.jsx'; //Child
import ConfirmingFacilities from './PagesOfContent/ConfirmingFacilities.jsx'; //Child
import PriceClarification from './PagesOfContent/PriceClarification.jsx'; //Child
import TakingDecision from './PagesOfContent/TakingDecision.jsx'; //Child
import PreparingDocuments from './PagesOfContent/PreparingDocuments.jsx'; //Child
import RegistrationProcess from './PagesOfContent/RegistrationProcess.jsx'; //Child
import CollectingDocuments from './PagesOfContent/CollectingDocuments.jsx'; //Child
import BeUpdated from './PagesOfContent/BeUpdated.jsx'; //Child
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomeComponents />} />
                <Route path="contact" element={<ContactComponent />} />
                <Route path="about" element={<AboutComponent />} />
                <Route path="suggestions&feedback" element={<SuggestFeedback />} />
                <Route path="contents" element={<ContentsComponent />}>
                    <Route path="about_india" element={<AboutIndia />} />
                    <Route path="ownership_confirmation" element={<OwnershipConfirmation />} />
                    <Route path="location_confirmation" element={<LocationConfirmation />} />
                    <Route path="prohibited_property_verification" element={<ProhibitedPropertyVerification />} />
                    <Route path="approvals_check" element={<ApprovalsCheck />} />
                    <Route path="examining_environment" element={<ExaminingEnvironment />} />
                    <Route path="confirming_facilities" element={<ConfirmingFacilities />} />
                    <Route path="price_clarification" element={<PriceClarification />} />
                    <Route path="taking_decision" element={<TakingDecision />} />
                    <Route path="preparing_documents" element={<PreparingDocuments />} />
                    <Route path="registration_process" element={<RegistrationProcess />} />
                    <Route path="collecting_documents" element={<CollectingDocuments />} />
                    <Route path="be_updated" element={<BeUpdated />} />
                </Route>
                <Route path="terms_of_use" element={<TermsOfUse />} />
                <Route path="privacy_policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes >
        </div >
    );
}

export default App;
