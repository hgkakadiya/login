 import {   Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Conform from "./Conform";
import Student from './Student';

function App() {


 //function   loge () {alert("hi")}

  return (
   <>
   {/* {<Login/>}  */}
   
    <Routes> 
       <Route path="/" element={<Login/>}> </Route> 
      <Route path="/conform" element={<Conform />}> </Route>
    {/* <Route path="/student" element={< Student />}> </Route>  */}
    
    </Routes> 
    < Student /> 
    </>

    
 
  
  );







}






export default App;



