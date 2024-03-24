import './App.css';
import './App_Responsive.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './telangana/content_pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import SuggestFeedback from './pages/SuggestFeedback';
import Agriculture from './telangana/components/Agriculture';
import NonAgriculture from './telangana/components/NonAgriculture';
import NASelectState from './telangana/components/NASelectState';
import ASelectState from './telangana/components/ASelectState';
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
                    <Route path="selectstate-agriculture/tg-agriculture" element={<Agriculture />} />
                    <Route path="selectstate-non-agriculture/tg-non-agriculture" element={<NonAgriculture />} />
                    <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
