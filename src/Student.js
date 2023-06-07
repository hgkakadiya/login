import React from 'react'
import { useSelector } from 'react-redux';
  import { remove, edit } from './Redux/StudentSlice';
import {   useDispatch } from 'react-redux';
// import Modal from 'react-modal'
// import  { useState } from 'react';


export default function Student() {

  const studentdatile = useSelector(state => state.Student.studentList);
  //console.log(studentdatile)
  const dispatch = useDispatch();

  const handleRemove = (studentdatileid) => {
      dispatch(remove(studentdatileid));
  };

  const handleEdit = (studentdatileid) => {
    dispatch(edit(studentdatileid));
};

 



  return (
    
    <div>
      {
      studentdatile.length > 0 ? (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">SurName</th>
            <th scope="col">Age</th>
            {/* <th scope="col">Name</th> */}
            <th scope="col">Action</th>                 
            {/* <th scope="col">delete</th> */}
          </tr>
        </thead>

        <tbody className=" table-dark" >
          {studentdatile.map((studentdatile, index) => {
            return (
              <tr key={index} className=" table-dark" >
                <th scope="row">{index + 1}</th>
                <td>{studentdatile.Name}</td>
                <td>{studentdatile.SurName}</td>
                <td>{studentdatile.Age}</td>
                <td>   




 




  




                  <button  
                   onClick={()=>{handleEdit(studentdatile.cardId) } } >  Edit    </button>
                &nbsp;
                  <button  onClick={() => handleRemove(studentdatile.cardId)}>  Delete    </button>
                </td>
              </tr>

            );
          })}
        </tbody>
      </table>

     

    ): null }


  
    </div>

         


  )
}







 