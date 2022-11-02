import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchEngine from "./components/assignment1";
import DisplayBoard from "./components/assignment2";
import ZeroToHeroRater from "./components/assignment3";
// import Api from "./components/assignment1/api";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SearchEngine />} />
          <Route path="/displayboard" element={<DisplayBoard />} />
          <Route path="/zerotohero" element={<ZeroToHeroRater />} />
          {/* <Route path="/api" element={<Api />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
