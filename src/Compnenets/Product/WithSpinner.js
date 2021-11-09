
const WithSpinner=wrappedComponent=>{

    const spinner=isloading=>{
   
        console.log(isloading)
        return (

            <div>
                {isloading?<h2>isLoadings.....</h2>:<wrappedComponent/>}
            </div>
           
        )

    }

    return spinner;
}

export default WithSpinner;

    
