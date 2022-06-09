import style from './style.module.css'
import {Link} from 'react-router-dom';
import React,{useState} from "react";
import Axios from 'axios';

const AddEmp = () => {
    const [fullName,setFullname] =useState("");
    const [position,setPosition] =useState("");
    const AddToList =()=>{
       Axios.post("http://localhost:3001/insert",{
           fullName : fullName,
           position: position,
       });

    }

    return(
        
 <body class={style.otherbody}>

  <div class={style.right}>

    <p id={style.AddEmpText}>Add Employee</p>
    <p id={style.logtext2}>Enter detail of the new employee</p>
    <Link to={"./employeelist"}><input type="button" name="ViewEmployee" id={style.addEmpBtn} value="View employee list" ></input></Link>


  </div>
 <div class={style.left}>
    <form id={style.login} method="get" action="login.php" align="center">
      <p class={style.addText}>Add Employee Details</p><br></br><br></br>
        <input type="text" name="Email" id={style.fullName} placeholder="Enter Employee full name" onChange={(event)=>{
            setFullname(event.target.value);
        }}/>
        
        <input type="text" name="Text" id={style.postion} placeholder="Enter Employee postion" onChange={(event)=>{
            setPosition(event.target.value);
        }}/>
        
		    <input type="button" name="AddEmp" id={style.addEmp} value="Add" onClick={AddToList}/>


		

    </form>
    </div>
<footer>&copy;MphoGiftZondo</footer>
</body>
    );
}
export default AddEmp;