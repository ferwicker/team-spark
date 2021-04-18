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
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/help" component={Help} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
