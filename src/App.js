import React from "react";
import Header from "./Components/Header.js";
import './main.css';
import Card1 from "./Components/Card1.js";
import Card2 from "./Components/Card2.js";
import Card3 from "./Components/Card3.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Card1/>} />
          <Route path='/Card2' element={<Card2/>} />
          <Route path='/Card3' element={<Card3/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

