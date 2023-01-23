import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feedbackcard from './components/Feedbackcard'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./Pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={
          <Fragment>
            <div className="container">
              <FeedbackForm />
              <FeedbackStats />
              <Feedbackcard />
            </div>
          </Fragment>
        }></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <AboutIconLink />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
