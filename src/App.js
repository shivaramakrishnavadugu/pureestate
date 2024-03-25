import './App.css';
import './App_Responsive.css';
import './App_js.js';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import SuggestFeedback from './pages/SuggestFeedback';
import TGAgriculture from './telangana/MainTGPage.jsx/TGAgriculture';
import TGNonAgriculture from './telangana/MainTGPage.jsx/TGNonAgriculture';
import NASelectState from './components/NASelectState';
import ASelectState from './components/ASelectState';
import PageNotFound from './components/PageNotFound';
function App() {
    return (
        <div className="App">
            <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="suggestions&feedback" element={<SuggestFeedback />} />
                    <Route path="selectstate-agriculture" element={<ASelectState />} />
                    <Route path="selectstate-non-agriculture" element={<NASelectState />} />
                    <Route path="selectstate-agriculture/tg-agriculture" element={<TGAgriculture />} />
                    <Route path="selectstate-non-agriculture/tg-non-agriculture" element={<TGNonAgriculture />} />
                    <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
