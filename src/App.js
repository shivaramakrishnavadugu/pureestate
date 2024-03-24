import './App.css';
import './App_Responsive.css';
import { HashRouter, Route } from "react-router-dom";
import Homepage from './telangana/content_pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import SuggestFeedback from './pages/SuggestFeedback';
import Agriculture from './telangana/components/Agriculture';
import NonAgriculture from './telangana/components/NonAgriculture';
import NASelectState from './telangana/components/NASelectState';
import PageNotFound from './components/PageNotFound';
function App() {
    return (
        <div className="App">
            <HashRouter>
                    <Route index element={<Homepage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="suggestions&feedback" element={<SuggestFeedback />} />
                    <Route path="selectstate-agriculture" element={<Agriculture />} />
                    <Route path="selectstate-non-agriculture" element={<NonAgriculture />} />
                    <Route path="selectstatena" element={<NASelectState />} />
                    <Route path="*" element={<PageNotFound />} />
            </HashRouter>
        </div>
    );
}

export default App;
