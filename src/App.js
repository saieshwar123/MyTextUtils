// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";



function App() {
  const [Mode, setMode] = useState("white");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 1000);

  function DarktoggleMode() {
    setMode("#729ec5");
    showAlert("changed to dark mode", "success");
    document.body.style.backgroundColor = "grey";
    document.title = "TextUtils - Dark Mode";
  }

  function GreentoggleMode() {
    setMode("#2e782e");
    showAlert("changed to green mode", "success");
    document.body.style.backgroundColor = "#2e782e";
  }

  function RedtoggleMode() {
    setMode("#c23131");
    showAlert("changed to red mode", "success");
    document.body.style.backgroundColor = "#c23131";
  }

  function YellowtoggleMode() {
    setMode("#c7c73c");
    showAlert("changed to yellow mode", "success");
    document.body.style.backgroundColor = "#c7c73c";
  }

  function WhitetoggleMode() {
    setMode("white");
    showAlert("changed to yellow mode", "success");
    document.body.style.backgroundColor = "white";
  }

  return (
    <>
      <Router>
        <Navbar
          tit="TextUtils"
          abouttext="About TextUtils"
          mode={Mode}
          toggleMode={DarktoggleMode}
          GreentoggleMode={GreentoggleMode}
          YellowtoggleMode={YellowtoggleMode}
          RedtoggleMode={RedtoggleMode}
          WhitetoggleMode={WhitetoggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<About />} />

            <Route
              path="/home"
              element={
                <Textform
                  heading="Enter the text to Analyse"
                  mode={Mode}
                  showAlert={showAlert}
                  toggleMode={DarktoggleMode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
jkdkjljkfsdkldsfjfasdjkl