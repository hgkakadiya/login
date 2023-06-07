 
 import { useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
 import React, { useEffect, useState } from 'react';
 import Modal from 'react-modal'
 import { useDispatch } from 'react-redux';
 
import { useFormik } from 'formik';
  import { Studentdata } from './Redux/StudentSlice';
Modal.setAppElement('#root');

export default function Conform() {
  const login = useSelector(state => state.login);
  const selectedStudent= useSelector(state => state.Student.selectedStudent);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(!login.username || !login.password) {
      navigate("/")
    }
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const divStyle = {
    width: '120px',
    color:"blur",
  };


  //const handleSubmit = values => {
   // dispatch(submitForm(values));
  //};
  

  const formik = useFormik({
  initialValues: {
     Name: '',
     SurName:'',
     Age:'',
    cardId: ''
    },
     


     
onSubmit: (values) => { 
  dispatch(Studentdata(values));
  formik.setFieldValue("Name", '');
  formik.setFieldValue("SurName", '');
  formik.setFieldValue("Age", '');
  formik.setFieldValue("cardId", '');
  // navigate("/student")
 // onSubmit={handleSubmit}
  } });

  useEffect(() => {
    if(selectedStudent && selectedStudent.cardId) {
      setIsOpen(true);
      formik.setFieldValue("Name", selectedStudent.Name);
      formik.setFieldValue("SurName", selectedStudent.SurName);
      formik.setFieldValue("Age", selectedStudent.Age);
      formik.setFieldValue("cardId", selectedStudent.cardId);
    } else {
      setIsOpen(false);
      // formik.setFieldValue("Name", '');
      // formik.setFieldValue("SurName", '');
      // formik.setFieldValue("Age", '');
      // formik.setFieldValue("cardId", '');
    }
    
    console.log(selectedStudent)
   // console.log( setIsOpen(true))
  }, [selectedStudent]);

  return (<> 
    <div  className="d-flex justify-content-around p-3 mb-2 bg-dark text-white"> 
    <div>Username:{login.username} </div> 
    <div>password:{ login.password}  </div>  
    <div> <img src="..." className="rounded-circle" alt=" "/></div>
    

</div>
<div className="d-flex justify-content-around "> <button className={'savewidth'} 
  onClick={openModal}>Add</button> </div> 

 






<Modal className={"Modal"}
    overlayClassName="Overlay"
        isOpen={isOpen}
        onRequestClose={closeModal} 
        contentLabel="Popup Modal"
      >
        <div className="d-flex justify-content-around  p-1 mb-2 bg-dark text-white" >
        <h2> Student  Information</h2> </div> 
        <div  className="d-flex justify-content-around text-white  p-1 mb-2"  >


   <div> <input type='text' placeholder='Name'   name='Name' 
    value={formik.values.Name}
    onChange={(e) => formik.setFieldValue("Name", e.target.value)} id="Name" style={divStyle} /> </div>
        
         
        <div> <input type='text' placeholder='SurName'  style={divStyle} 
         value={formik.values.SurName}
         onChange={(e) => formik.setFieldValue("SurName", e.target.value)} id="SurName"/>  
          </div>
                  <div>  <input type='text' placeholder='Age'    
     value={formik.values.Age}
  onChange={(e) => formik.setFieldValue("Age", e.target.value)} id="Age"

    // onChange={(e) => setFieldValue( "e.target.value.replace(/[^0-9.+]/g,)")} 
          style={divStyle} /></div></div>
        <div className="d-flex justify-content-around save" > 
        <button  type='button' className={'savewidth'}  
         onClick={()=>{ {closeModal()};  formik.handleSubmit(selectedStudent.cardId)} }  >save</button> </div> 
      </Modal>
 </>
  )
};
