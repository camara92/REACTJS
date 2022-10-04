import './css/app.css'

import  'bootstrap/dist/css/bootstrap.min.css' ;
import React from 'react';
// function App({title }){

//     return(<h1 className="text-center bg-dark text-white "> {title} </h1> )
    
//     }
class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {title: 'Coucou les amis ! '}
    }
    render(){
        return(<h1 className="text-center bg-dark text-white "> {this.state.title } </h1> )
    }
}

export default App; 