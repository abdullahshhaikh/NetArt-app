import React from "react";
import NavBar from "./components/NavBar";
import TopDiv from "./components/TopDiv";
import BottomDiv from "./components/BottomDiv";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <TopDiv />
      <BottomDiv />
      <Footer />
    </div>
  );
}

export default App;
