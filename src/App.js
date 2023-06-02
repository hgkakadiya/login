 import {   Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Conform from "./Conform";


function App() {


 //function   loge () {alert("hi")}

  return (
  
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/your-route" element={<Conform />}/>
      
      
    </Routes>
 

    
 
  
  );







}






export default App;



