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
import { API_URL, LOGINTYPE, SIGNUPTYPE } from './helpers/Constants';

const Profile=lazy(()=>import('./pages/profile/Profile'));
const SignLog=lazy(()=>import('./pages/Sign_in_up_HOC/SignHOC'));




function App() {

  const thememode=useSelector(selectTheme);
  const theme=thememode==='light'?lightTheme:darkTheme

  return (
 
    <ThemeProvider theme={theme}>
    <div className=" w-full app">
        <ReactNotifications />
        <Router>
         <Switch>
          <ErrorBundry>
            <Suspense fallback={<div>...Loading</div>}>
             <Route exact={true} path="/signup" render={()=>(<SignLog type={SIGNUPTYPE} url={API_URL.SIGN_UP}></SignLog>)}></Route>
             <Route exact={true} path="/" render={()=>(<SignLog type={LOGINTYPE} url={API_URL.LOGIN}></SignLog>)}></Route>
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
