import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setUsername, setPassword } from './Redux/loginSlice';

import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit() {
    dispatch(setUsername(inputUsername));
    dispatch(setPassword(inputPassword));
    navigate("/conform")} 
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





// function submit() {
//   dispatch(setUsername(inputUsername));
//   dispatch(setPassword(inputPassword));
//   navigate("/your-route")
  // navigation.goBack();
  //console.log(username);
  //console.log(password);
  //alert("username: "+ username + ", your password is : " + password);
// }

// return (
//   <>

//     <div className="d-flex justify-content-around p-3 mb-2 bg-dark text-white">
//       <div> <input type="text"
//         //  onChange={(e)=>setdata(e.target.value)}
//         onChange={(e) => setInputUsername(e.target.value)}
//         // onClick={(e) => dispatch(setUsername(e.target.value))}
//         className="form-control"
//         id="inputtext1"
//         value={inputUsername}
        // placeholder="Userid"

        // name="inputtext1" /> </div>      <div>  <input type="password"
        //   //  onChange={(e)=>setdata(e.target.value)}
        //   onChange={(e) => setInputPassword(e.target.value)}
        //   //  onClick={(e) => dispatch(setPassword(e.target.value))}
        //   className="form-control"
        //   id="inputPassword4"
        //   value={inputPassword}
        //   name="inputtext1"
        //   placeholder="Password" />   </div>


//     </div>

//     <div className="d-flex justify-content-around">
//       <input type="submit"
//         //  onClick={()=>props.da()} 
//         onClick={() => submit()}

//         className="btn btn-primary" />  </div>
// </>
// )
// }   