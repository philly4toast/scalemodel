import React from 'react'
import { ajax } from 'jquery'

class ModelItem extends React.Component {
  constructor(props) {
    super()
    this.deleteModel = this.deleteModel.bind(this)
  }

  deleteModel(modelId) {
    console.log(modelId)
    ajax({
      method: "DELETE",
      url: '/ammo',
      data: { modelId },
      success: () => window.location.reload(),
      error: (e) => console.log(console.log(e))
    })
  }

  render() {
    var completedStyle = {
      backgroundColor: 'rgb(0,102,0,0.5)',
      fontStyle: 'italic',
      color: 'rgb(1,1,1,0.4)',
      // textDecoration: 'line-through'
    }

    const {
      model,
      handleChange,
    } = this.props

    const style = model.completed ? completedStyle : null
    const imgSrc = model.completed ? model.completedURL : model.imageURL

    return (
      <div className="models" style={style} >

          <input
            type='checkbox'
            checked={model.completed}
            id={model.id}
            onChange={
              () => handleChange(model)} />
          <p id='desc'>{model.name} - {model.description}</p>

        <img className="thumbnail" src={imgSrc} />
        <button onClick={() => this.deleteModel(model.id)}>
          Discard
        </button>
      </div>
    )
  }
}

export default ModelItem;
