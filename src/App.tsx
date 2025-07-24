import './App.css';
import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import LandingPage2 from "./pages/LandingPage2";
import TestBlogPage from "./pages/TestBlogPage";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyPage from "./pages/CaseStudyPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage2 />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="test" element={<TestBlogPage />} />
      </Routes>
    </>
  )
}

export default App
