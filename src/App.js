import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import "./Style.css";
import { MyContext } from "./MyContext";
import Feeds from "./Components/Feeds";
import girl from "./assets/girl.svg";
import Marvin from "./assets/Marvin.svg";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    userName: "",
    modalType: false,
    feeds: [
      {
        id: 1,
        username: "Theresa Webb",
        avatar: girl,
        time: "5mins ago",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        comments: 24,
      },
      {
        id: 2,
        username: "Marvin McKinney",
        avatar: Marvin,
        time: "8mins ago • Edited",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        comments: 12,
      },
    ],
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      <div className="app-comp">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/feeds" element={<Feeds />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
