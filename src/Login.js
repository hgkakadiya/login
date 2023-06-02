import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setUsername, setPassword } from './features/login/loginSlice';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit() {
    dispatch(setUsername(inputUsername));
    dispatch(setPassword(inputPassword));
    navigate("/your-route")}
 return (
    <> 
     <div className="d-flex justify-content-around p-3 mb-2 bg-dark text-white">

 <div> <input type="text"  onChange={(e) => setInputUsername(e.target.value)}  
          className="form-control"  id="inputtext1"  placeholder="Userid" name="inputtext1"/></div>
 <div> <input type="password"   onChange={(e) => setInputPassword(e.target.value)}
          className="form-control" id="inputPassword4" name="inputtext1" placeholder="Password"/></div>
      </div>

       <div className="d-flex justify-content-around">
        <input type="submit" onClick={() => submit()} className="btn btn-primary" /> 
         </div>
 </>
)}
