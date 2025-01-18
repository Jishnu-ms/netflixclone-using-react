
import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Banner from "./Components/Header/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;
