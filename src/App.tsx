import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import InfoPage from "./Pages/InfoPage/InfoPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/pokemon/:id" element={<InfoPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
