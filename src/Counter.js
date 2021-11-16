
import React from 'react'
class Counter extends React.Component{

constructor(props){

    super(props)
    this.state={  count:0, newText:"" }

    console.log("1-constructor ")
}


componentDidMount(){
   document.title="i am here"
}
componentDidUpdate(){
  document.title= `${this.state.count} fois`
}
componentWillUnmount(){
    document.title="bye bye"
}

increment=()=> {  this.setState({ count: this.state.count+1 })  }

decrement=()=>{
    if (this.state.count>0 ) 
      this.setState({  count: this.state.count-1   })
    }
 
render(){
  console.log("render")

   const {name}=this.props
    return (
      
        <div>
            <h1>WS State</h1>
            <h2>{name}</h2>
            <button  onClick={this.increment}  >+</button>
            <span> {this.state.count} </span>
            <button   onClick={this.decrement}  >-</button>
            <input type="text" 
            value={this.state.newText} 
             onChange={(event)=> this.setState({newText: event.target.value})   }  ></input>
             <h1>{ this.state.newText }</h1>
        </div>
    )
}

}


export default Counter