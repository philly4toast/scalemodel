import React from 'react';
import {ajax} from 'jquery'


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
    this.typingModelDesc = this.typingModelDesc.bind(this)
    this.typingPic1 = this.typingPic1.bind(this)
    this.typingPic2 = this.typingPic2.bind(this)
    this.addModelToModelList = this.addModelToModelList.bind(this)
  }
  typingModelName(event) {

    this.setState({ modelName: event.target.value })
  }
  typingModelDesc(event) {

    this.setState({ modelDesc: event.target.value })
  }
  typingPic1(event) {

    this.setState({ picture1: event.target.value })
  }
  typingPic2(event) {

    this.setState({ picture2: event.target.value })
  }
  addModelToModelList(event){

    const kitName = this.state.modelName
    const kitDesc = this.state.modelDesc
    const pic1 = this.state.picture1
    const pic2 = this.state.picture2
    if (kitName === ''|| kitDesc === ''|| pic1 === '' || pic2 === ''){
      alert('INFO missing: check boxes')
      event.preventDefault();
      
    }else if ((pic1 || pic2).indexOf('jpg' || 'jpeg') === -1) {
      alert('INFO missing: img url incorrect: is not a jpeg')
      event.preventDefault();
      return;
    }else {
      this.setState(
        {
          modelName: '',
          modelDesc: '',
          picture1: '',
          picture2: '',
          completed: false
        }
      )
      ajax(
        {
          method: "POST",
          url: '/ammo',
          data: { name: kitName,
                  description: kitDesc,
                  picture1: pic1,
                  picture2: pic2,
                  completed: false
           },
          success: (response)=> console.log(response),
          error: (blah)=>(console.log("error adding item"))
      })
    }

    // event.preventDefault();
  }

  render() {
    return (
      <form id="form" onSubmit={this.addModelToModelList}>
        <label> Model Name:
          <input type="text" name={this.state.modelName} value={this.state.modelName} placeholder='Make and model' onChange={this.typingModelName} />
        </label>

        <label> Description:
        <input type="text" name={this.state.modelDesc} value={this.state.modelDesc} placeholder='Description' onChange={this.typingModelDesc} />
        </label>

        <label> Picture 1:
        <input type="text" name={this.state.picture1} value={this.state.picture1} placeholder='picture url' onChange={this.typingPic1} />
        </label>

        <label> Picture 2:
        <input type="text" name={this.state.picture2} value={this.state.picture2} placeholder='completed url' onChange={this.typingPic2} />
        </label>

        <button >add</button>

      </form>
    )
  }
}


export default AddModelInfo