
import './index.css';
import ContextProvider from './State_Manager/ContextProvider';
import {Switch,Route,BrowserRouter as Router}from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import Signup from './Compnenets/Register/Signup';
import './index.css';
import Login from './Compnenets/Register/Login';
import Profile from './Compnenets/Product/Profile';
import './Styles/Form.css';

function App() {
  return (
    <div className=" w-full  app">
      <ContextProvider>
       <ReactNotifications />
        <Router>
         <Switch>
           <Route exact={true} path="/signup" component={Signup}></Route>
           <Route exact={true} path="/" component={Login}></Route>
           <Route exact={true} path='/user/profile/:id/:name' component={Profile}></Route>
           <Route exact={true} path='/user/profile/:id' component={Profile}></Route>
         </Switch>
       </Router>
      </ContextProvider>
    </div>
  )
}

export default App;
