import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthorIntro from "./components/AuthorIntro";
import FeaturedBooks from "./components/FeaturedBooks";
import BookDetails from "./components/BookDetails";
import FollowSumaya from "./components/FollowSumaya";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AuthorIntro />
                  <FeaturedBooks />
                  <FollowSumaya />
                </>
              }
            />
            <Route path="/book-details" element={<BookDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
