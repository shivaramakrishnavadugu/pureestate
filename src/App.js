import './App.css';
import './App_Responsive.css';
import './App_js.js';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import SuggestFeedback from './pages/SuggestFeedback';
import TGAgriculture from './telangana/MainTGPage.jsx/TGAgriculture';
import NASelectState from './components/NASelectState';
import ASelectState from './components/ASelectState';
import PageNotFound from './components/PageNotFound';
import TermsOfUse from './legalities/TermsOfUse.jsx';
import PrivacyPolicy from './legalities/PrivacyPolicy.jsx';
import TGNonAgriculture from './telangana/MainTGPage.jsx/TGNonAgriculture'; //Parent TGNA
import KnowTheTelangana from './telangana/PagesTGNAContent/KnowTheTelangana.jsx'; //Child of TGNA
import OwnershipConfirmation from './telangana/PagesTGNAContent/OwnershipConfirmationTG.jsx'; //Child of TGNA
import LocationConfirmation from './telangana/PagesTGNAContent/LocationConfirmationTG.jsx'; //Child of TGNA
import ProhibitedPropertyTestTG from './telangana/PagesTGNAContent/ProhibitedPropertyTestTG.jsx'; //Child of TGNA
import ApprovalsTestTG from './telangana/PagesTGNAContent/ApprovalsTestTG.jsx'; //Child of TGNA
import EnvironmentTestTG from './telangana/PagesTGNAContent/EnvironmentTestTG.jsx'; //Child of TGNA
import FacilitiesTestTG from './telangana/PagesTGNAContent/FacilitiesTestTG.jsx'; //Child of TGNA
import PriceTestTG from './telangana/PagesTGNAContent/PriceTestTG.jsx'; //Child of TGNA
import DecisionTakingTG from './telangana/PagesTGNAContent/DecisionTakingTG.jsx'; //Child of TGNA
import DocumentsPreparationTG from './telangana/PagesTGNAContent/DocumentsPreparationTG.jsx'; //Child of TGNA
import RegistrationTG from './telangana/PagesTGNAContent/RegistrationTG.jsx'; //Child of TGNA
import CollectingDocumentsTG from './telangana/PagesTGNAContent/CollectingDocumentsTG.jsx'; //Child of TGNA
import KnowUpdates from './telangana/PagesTGNAContent/KnowUpdates.jsx'; //Child of TGNA
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="suggestions&feedback" element={<SuggestFeedback />} />
                <Route path="select_state_agriculture" element={<ASelectState />} />
                <Route path="select_state_non_agriculture" element={<NASelectState />} />
                <Route path="select_state_agriculture/tg_agriculture" element={<TGAgriculture />} />
                <Route path="select_state_non_agriculture/tg_non_agriculture" element={<TGNonAgriculture />}>
                    <Route path="know_the_telangana" element={<KnowTheTelangana />} />
                    <Route path="ownership_confirmation_tg" element={<OwnershipConfirmation />} />
                    <Route path="location_confirmation_tg" element={<LocationConfirmation />} />
                    <Route path="prohibited_test_tg" element={<ProhibitedPropertyTestTG />} />
                    <Route path="approvals_test_tg" element={<ApprovalsTestTG />} />
                    <Route path="environment_test_tg" element={<EnvironmentTestTG />} />
                    <Route path="facilities_test_tg" element={<FacilitiesTestTG />} />
                    <Route path="price_test_tg" element={<PriceTestTG />} />
                    <Route path="decision_taking_tg" element={<DecisionTakingTG />} />
                    <Route path="preparing_documents_tg" element={<DocumentsPreparationTG />} />
                    <Route path="registration_tg" element={<RegistrationTG />} />
                    <Route path="collecting_documents_tg" element={<CollectingDocumentsTG />} />
                    <Route path="know_updates" element={<KnowUpdates />} />
                </Route>
                <Route path="terms_of_use" element={<TermsOfUse />} />
                <Route path="privacy_policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes >
        </div >
    );
}

export default App;
