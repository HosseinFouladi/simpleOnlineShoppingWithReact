 export let email_error='';
 export let password_error='';
 export const Validatin=(name,value)=>{
    switch(name){
        case 'username':
            if(!value.includes('@')){
                email_error="username should contains @ mark plz try again!"
                return false;
            }
            else
              email_error='';
             
              case "password":
                  if(value.length<8){
                      password_error="password should be more than 8 charachtors!";
                      return false;
                  }
                  else
                  password_error='';
    }
   const isValid= email_error&&password_error?false:true;
   return isValid;
 }