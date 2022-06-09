import empstyle from'./employeeStyle.module.css'
import img from './spaceindex.png'
import avt from './img/AVAETAR.jpeg'
import { Link } from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Axios from 'axios';

const Employeelist = () => {
  const [fullName,setFullname] =useState("");
    const [position,setPosition] =useState("");
  const [employeeList, setEmployeeList]= useState([])
  useEffect(()=>{
        Axios.get("http://localhost:3001/get").then((response)=>{
          setEmployeeList(response.data);
        });
  },[]);
const deleteEmployee=(id)=>{
  Axios.delete(`http://localhost:3001/delete/${id}`);
};
  return(
 
<body class={empstyle.home}>
  <div>
<nav>
        <img id={empstyle.spaceindex} src={img} alt="spaceindex"/>Home
    <div id={empstyle.leftdiv}><Link to={"./home"}>home</Link>|<Link to={"./logs"}>logs</Link>|<Link to={"./employeelist"}>Employee list</Link>|<Link to={"./faqs"}>FAQs</Link>|<Link to={"./contacts"}>contacts</Link>
    </div>
    </nav>

    <input type="text" id={empstyle.search} placeholder="Search.." name="search"/>
    {employeeList.map((val, key)=>{
      return(
       
        <div class={empstyle.row1}>
        <div class={empstyle.column}>
          <div class={empstyle.card}>
            <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      
              <h2>{val.fullName}</h2>
              <p class={empstyle.title}>{val.position}</p>
              <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
              <input type="button" name="view" id={empstyle.view} value="view" />
              <input type="button" name="delete" id={empstyle.delete} value="delete" onClick={()=>deleteEmployee(val._id)}/> 
            </div>
            </div>
      </div>
      )
    }
    )}
   

<i class={empstyle.i}/>



<footer><div class={empstyle.btnbottom}>
<a href="http://www.google.com"><input type="button" name="signout" id={empstyle.signout} value="Sign out" /></a>
</div>&copy;MphoGiftZondo</footer>
</div>
</body>

    );
}
export default Employeelist;