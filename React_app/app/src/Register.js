import css from './style.module.css'
import img from './spaceindex.png'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
const Register = () => {
    return(
      <body id={css.otherbody}>
  <div class={css.right}>
    <p id={css.welText}>Welcome!</p>
    <p id={css.logtext2}>Enter your details and start journery with us.Thank you for choosing to join us.</p>
    <Link to="/"><input type="button" name="Exit" id={css.Exit} value="Exit"/></Link>
  </div>
 <div class={css.left}>
   <div class={css.loginText}>
    <p id={css.infoText}>Enter the information required</p>
    </div>
    <form id={css.login} method="get" action="login.php" align="center">
        <br></br><br></br>
        <input type="email" name="Email" id={css.email2} placeholder="Enter you email" />
        <br></br><br></br>
        <input type="text" name="name" id={css.name} placeholder="Enter your fullname"/>
        <br></br><br></br>
        <input type="text" name="number" id={css.number} placeholder="Enter your number"/>
        <br></br><br></br>
        <input type="Password" name="Pass" id={css.Pass1} placeholder="Enter your password"/>
        <br></br><br></br>
        <input type="Password" name="Pass2" id={css.Pass2} placeholder="Re-Enter your password"/>
        <br></br><br></br>
		    <input type="button" name="Register" id={css.Register} value="register"/>
        <br></br><br></br>
    </form>
    </div>
<footer>&copy;MphoGiftZondo</footer>
</body>
    );
}
export default Register;