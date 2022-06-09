import style from './style.module.css'
import {Link} from 'react-router-dom';

const Login = () => {
    return(
 
 <body class={style.otherbody}>

  <div class={style.right}>

    <p id={style.welText}>Welcome!</p>
    <p id={style.logtext2}>Enter your details and start journery with&emsp;us</p>
    <Link to={"./register"}><input type="button" name="Sign up" id={style.Signup} value="Sign Up" ></input></Link>


  </div>
 <div class={style.left}>
    <form id={style.login} method="get" action="login.php" align="center">
      <p class={style.loginText}>Please Login</p><br></br><br></br>
        <input type="text" name="Email" id={style.email} placeholder="Enter you email"/>
        
        <input type="Password" name="Pass" id={style.Pass} placeholder="Enter your password"/>
        
		    <Link to={"./home"}><input type="button" name="Login" id={style.Login} value="Login"/></Link>
        

        <span id="RememberME"><input type="checkbox" id={style.check}/>Remember me  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Forgot Password</span>

		

    </form>
    </div>
<footer>&copy;MphoGiftZondo</footer>
</body>
    );
}
export default Login;