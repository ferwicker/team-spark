import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Navbar />
          <Route exact path="/team-spark" component={Home} />
          <Route exact path="/team-spark/about" component={About} />
          <Route exact path="/team-spark/help" component={Help} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
