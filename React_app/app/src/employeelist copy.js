import empstyle from'./employeeStyle.module.css'
import img from './spaceindex.png'
import avt from './img/AVAETAR.jpeg'
import { Link } from 'react-router-dom'
import React,{useeffect} from "react";
const Employeelist = () => {
    return(
      
<body class={empstyle.home}>
  <div>
<nav>
        <img id={empstyle.spaceindex} src={img} alt="spaceindex"/>Home
    <div id={empstyle.leftdiv}><Link to={"./home"}>home</Link>|<Link to={"./logs"}>logs</Link>|<Link to={"./employeelist"}>Employee list</Link>|<Link to={"./faqs"}>FAQs</Link>|<Link to={"./contacts"}>contacts</Link>
    </div>
    </nav>
    <input type="text" id={empstyle.search} placeholder="Search.." name="search"/>
    <div class={empstyle.row1}>
  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>

        <h2>Jane Doe</h2>
        <p class={empstyle.title}>CEO & Founder</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" /> 
      </div>
      </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>Mike Ross</h2>
        <p class={empstyle.title}>Art Director</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>

        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>

        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>
  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>
</div>
<div class={empstyle.row1}>
  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>

        <h2>Jane Doe</h2>
        <p class={empstyle.title}>CEO & Founder</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" /> 
      </div>
      </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>Mike Ross</h2>
        <p class={empstyle.title}>Art Director</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>

        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>

        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>

  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>
  <div class={empstyle.column}>
    <div class={empstyle.card}>
      <img src={avt} alt="AVAETAR" id={empstyle.AVAETAR}/>
      <div class={empstyle.container}>
        <h2>John Doe</h2>
        <p class={empstyle.title}>Designer</p>
        <input type="button" name="Edit" id={empstyle.edit} value="Edit" />
        <input type="button" name="view" id={empstyle.view} value="view" />
        <input type="button" name="delete" id={empstyle.delete} value="delete" />
      </div>
    </div>
  </div>
</div>

<i class={empstyle.i}/>



<footer><div class={empstyle.btnbottom}>
<a href="http://www.google.com"><input type="button" name="signout" id={empstyle.signout} value="Sign out" /></a>
</div>&copy;MphoGiftZondo</footer>
</div>
</body>

    );
}
export default Employeelist;