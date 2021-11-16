import React from "react"
import Counter from "./Counter"

class App extends React.Component{

  // constructor(){
  //   super()
  //   this.state={toggle: false}
  // }

   state={toggle: false}
  handletoggle=()=>{  this.setState({ toggle: !this.state.toggle  })   }


render(){

  console.log(this.state.toggle)
  return (
    <div>

      <button   onClick={this.handletoggle} >    { this.state.toggle ? "hide" :"show" }    </button>
      {this.state.toggle  ?   <Counter   name="salah"   />  :null}

    </div>
  )
}

}
export default App