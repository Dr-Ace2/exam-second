import React from 'react';
import"./Styles/Error.css"

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    render(){
        if(this.state.hasError){
            return (
            <div> 
                <h1 className='errorp'>OOPS! SOMETHING WENT WRONG</h1>
                
                </div>
            
            )
        }
        return this.props.children;
    }
}

export default Error;