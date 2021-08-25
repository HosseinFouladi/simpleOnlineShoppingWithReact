import ReactNotifications from 'react-notifications-component';
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
const Notif=(mtitle="signup_message",mmessage="succesfull",type='success')=>{
   

        store.addNotification({

            title:`${mtitle}`,
            message:`${mmessage}`,
            container:"top-right",
            type:type,
            insert:"top",
            animationIn: ["animated", "fadeOut"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
    
        })
  
         
    }
 
export default Notif;