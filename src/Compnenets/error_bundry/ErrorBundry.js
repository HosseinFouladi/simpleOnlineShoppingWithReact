import { Component } from "react";

class ErrorBundry extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDrivedStateFromError(error){
        return{
           hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error,info);
    }

    render(){
        if(this.state.hasError)
           return <div>SomeThing Went Rong</div>
           
        return this.props.children;
    }
}

export default ErrorBundry;