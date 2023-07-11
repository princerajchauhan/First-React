// import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";


// let name = "<b>Prince</b>"
function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeClasses = () =>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeClasses()
    showAlert(`${cls} mode has been enabled.`, `${cls}`)
    document.body.classList.add('bg-'+cls)
  }

  const toggMode = () =>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0f2549"
      showAlert("Dark mode has been enabled.", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled.", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode} toggMode = {toggMode}/>

        <Alerts alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Route exact path="/" element={<TextForm heading="Try TextUtils - word counter | character counterf" mode={mode} showAlert={showAlert} />} />
            {/* <Route path="/">
              <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
            </Route> */}
          </Routes>
        </div>
      </Router>


      {/* <div className="container my-4">
      <About/>
    </div> */}

    </>
  );
}

export default App;
