import { lazy,Suspense } from 'react';
import './index.css';
import {Switch,Route,BrowserRouter as Router}from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import './index.css';
import './Styles/Form.css';
import { ThemeProvider } from 'styled-components';
import ErrorBundry from './error_bundry/ErrorBundry';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/user_redux/User-selector';
import { Container, darkTheme, lightTheme } from './Styles/GlobalStyles';
const Signup=lazy(()=>import('./pages/signup/Signup'));
const Login=lazy(()=>import('./pages/login/Login'));
const Profile=lazy(()=>import('./pages/profile/Profile'));


function App() {

  const thememode=useSelector(selectTheme);
  const theme=thememode==='light'?lightTheme:darkTheme

  return (
 
    <ThemeProvider theme={theme}>
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
         <Container/>
       </Router>
    </div>
    </ThemeProvider>

  )
}

export default App;
