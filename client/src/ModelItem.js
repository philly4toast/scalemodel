import React from 'react'
import {ajax} from 'jquery'

class ModelItem extends React.Component{
  constructor(props){
    super()
    this.deleteModel = this.deleteModel.bind(this)
  }



  deleteModel(modelId) { 
    console.log(modelId)
    ajax({
      method: "DELETE",
      url: '/ammo',
      data: {modelId},
      success: ()=> window.location.reload(),
      error: (e)=>console.log(console.log(e))
    })
  }

  render(){
    var completedStyle = {
      backgroundColor: 'black',
      fontStyle: 'italic',
      color: 'gray',
      textDecoration: 'line-through'
    }

    const {
      model,
      handleChange,
    } = this.props

    const style = model.completed ? completedStyle : null
    const imgSrc = model.completed ? model.completedURL : model.imageURL

    return (
      <div className="models" style={style} >
        <div>
          <input
            type='checkbox'
            checked={model.completed}
            id={model.id}
            onChange={
              ()=>handleChange(model)
            } />
          <p>{model.name} - {model.description}</p>
        </div>
        <img className="thumbnail" src={imgSrc}/>
        <button onClick={()=>this.deleteModel(model.id)}>
          Discard
        </button>
      </div>
    )
  }
}

// function ModelItem(props){
//   return (
//     <div>
//     <div className="models">
//       <input type='checkbox' checked={props.model.completed} id={props.model.id} onChange={()=>props.handleChange(props.model.id)} />
//       <p>{props.model.text}</p>
//     </div>
//       <img className="thumbnail" src={props.model.imageURL}/>
//       </div>
//   )
// }

export default ModelItem;
