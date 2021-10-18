
import './index.css';
import {Switch,Route,BrowserRouter as Router}from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import Signup from './pages/Signup';
import './index.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './Styles/Form.css';


function App() {

  return (
    <div className=" w-full  app">
       <ReactNotifications />
        <Router>
         <Switch>
           <Route exact={true} path="/signup" component={Signup}></Route>
           <Route exact={true} path="/" component={Login}></Route>
           <Route exact={true} path='/user/profile/:id/:name' component={Profile}></Route>
           <Route exact={true} path='/user/profile/:id' component={Profile}></Route>
         </Switch>
       </Router>
    </div>
  )
}

export default App;
