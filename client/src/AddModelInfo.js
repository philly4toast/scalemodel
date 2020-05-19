import React from 'react';


class AddModelInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      modelName: '',
      modelDesc: '',
      picture1: '',
      picture2: '',
      completed: false
    }
    this.typingModelName = this.typingModelName.bind(this)
  }
      typingModelName(event){
        console.log(event.target.value)
        this.setState({modelName: event.target.value})
      }
  render(){
    return (
      <form>
        <label> Model Name:
          <input type="text" name={this.state.modelName} value={this.state.modelName} placeholder='Make and model' onChange={this.typingModelName}/>
        </label>

        <label> Description:     
          <input/>
        </label>

        <label> Picture 1:     
          <input/>
        </label>

        <label> Picture 2:     
          <input/>
        </label>

        <button>add</button>

    </form>
    )
  }
}


export default AddModelInfo