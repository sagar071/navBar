import React from "react";
import './App.css';
import Menubar from "./Menubar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (

    <>
      <Router>
        <Menubar />
        <Switch>
         
        </Switch>
        
      </Router>
      
    </>

  );
}

export default App;