
import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import {action,originals} from './url'
import Banner from "./Components/Header/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Rowpost url={originals} title='Netflix Originals'/>
     <Rowpost url={action} title='Action Movies' isSmall={true}/>
    </div>
  );
}

export default App;
