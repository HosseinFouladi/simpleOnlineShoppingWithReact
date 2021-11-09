import { lazy,Suspense } from 'react';
import './index.css';
import {Switch,Route,BrowserRouter as Router}from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import './index.css';
import './Styles/Form.css';
import ErrorBundry from './Compnenets/error_bundry/ErrorBundry';
const Signup=lazy(()=>import('./pages/Signup'));
const Login=lazy(()=>import('./pages/Login'));
const Profile=lazy(()=>import('./pages/Profile'));


function App() {

  return (
    <div className=" w-full  app">
       <ReactNotifications />
        <Router>
         <Switch>
          <ErrorBundry>
            <Suspense fallback={<div>...Loading</div>}>
             <Route exact={true} path="/signup" component={Signup}></Route>
             <Route exact={true} path="/" component={Login}></Route>
             <Route exact={true} path='/user/profile/:id/:name' component={Profile}></Route>
             <Route exact={true} path='/user/profile/:id' component={Profile}></Route>
            </Suspense>
          </ErrorBundry>
         </Switch>
       </Router>
    </div>
  )
}

export default App;
