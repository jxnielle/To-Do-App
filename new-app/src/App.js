import React from 'react';
import './App.css';
import AddSection from './Components/AddSection';
import SectionList from './Components/SectionList'
import {ToDoProvider} from './Context/ToDoContext'

function App() {
  return (
    <ToDoProvider>
      <div className="appContainer">
        <div className="App" style={{backgroundColor:'#FBFCFC', paddingBottom: "2px"}}>
          <div style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
            <img src={require("./checked-list.png")} className="taskImg" alt=""></img>
            <h1 style={{fontFamily:"Impact, Charcoal, sans-serif"}}>
              To-Do App
            </h1>
          </div>
          <AddSection/>
          <SectionList/>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
