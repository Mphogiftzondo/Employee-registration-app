
//import './App.css';
import Register from './Register';
import Employeelist from './employeelist';
// import Navbar from './navbar';
import Home from './home'
import Login from './login'
import background from './img/bg.jpg'
import Addemp from './addEmp'
// import background from './img/bg2.jpg'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import AddEmp from './addEmp';
function App() {
  return (
    
    <div className="App">
    <Router>
       <Switch>
         <Route  exact path="/">   <Login/></Route>
         <Route exact path="/register"><Register/></Route>
         <Route exact path="/home"><Home/></Route>
         <Route exact path="/employeelist"><Employeelist/></Route>
         <Route exact path="/addEmp"><AddEmp/></Route>
         
        
       </Switch>
     </Router>
    </div>
  );
}

export default App; 
