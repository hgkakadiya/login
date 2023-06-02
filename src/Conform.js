import React from 'react'
 import { useSelector } from 'react-redux';



export default function Conform() {
  const products = useSelector(state => state.login);

  return (<> 
    <div  className="d-flex justify-content-around p-3 mb-2 bg-dark text-white"> 
    <div>Username:{products.username} </div> 
    <div>password:{ products.password}  </div>  
    <div> <img src="..." className="rounded-circle" alt=" "/></div>
    

</div>
<div className="d-flex justify-content-around" > <button>Add</button> </div>  </>
  )
}
