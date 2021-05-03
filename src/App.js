import React,{useState} from 'react'
import './App.css';
import Header from './components/header'
import Nav from './components/nav'
import Result from './components/result'
import request from './components/request'

function App() {
  const[option,setoption]=useState(request.fetchTrending)


  return (
    <div className="app">
      <Header/>
      <Nav setoption={setoption}/>
      <Result option={option}/>
    
    </div>
  );
}

export default App;
