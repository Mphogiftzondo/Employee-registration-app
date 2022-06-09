
import css from './home.module.css'
import img from './spaceindex.png'
import background from './img/bghome.jpg'
import {Link} from 'react-router-dom';
const Home = () => {
    return(

<body class={css.home}>
<nav>
        <img id={css.spaceindex} src={img} alt="spaceindex"/>Home
    <div id={css.leftdiv}><Link to={"./"}>home</Link>|<Link to={"./logs"}>logs</Link>|<Link to={"./employeelist"}>Employee list</Link>|<Link to={"./faqs"}>FAQs</Link>|<Link to={"./contacts"}>contacts</Link>
    </div>
    </nav>


<div class={css.homeText} >

<p id={css.loremHome}>
  <span class={css.welText}>WELCOME to Space Index!</span><br></br>
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en<br></br>
  im ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui<br></br>
  p ex ea commodo consequat. Duis aute irure dolor in reprehender<br></br>
  it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br></br>
  officia deserunt mollit anim id est laborum.</p>
</div>

<input type="button" name="learnmore" id={css.learnMore} value="learn more" />

<footer class={css.footer}><div class="btn-bottom">
<Link to={"./"}><input type="button" name="signout" class={css.signout} value="Sign out" /></Link></div>&copy;MphoGiftZondo</footer>
</body>

    );
}
export default Home;