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
        this.state = {show:  false}
    }
    render(){
        return(<div> 
            <button className='bg-purple text-white rounded py-2 px-3 ' onClick={()=>this.setState({show : true})}>
                Click 
            </button>
            {
                this.state.show ? 
                <image className='w-40  m-5 h-25'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrX_9iANDm2mE-gZvxVo7xN0-hqwhf-yJmw&usqp=CAU' alt='image au click ' /> : null
            }
        </div> )
    }
}

export default App; 