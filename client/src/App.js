import React, { Component } from "react";
import sampleData from "../../DB/sampleData.js"
import ModelItem from './ModelItem.js';
import {ajax} from 'jquery'
import AddModelInfo from './AddModelInfo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      models: sampleData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getModelList();
  }

  getModelList() {
    ajax({
      method: "GET",
      url: '/ammo',
      success: (response)=>{
        this.setState(
          {models: response}
        )
      },
      error: (e)=>console.log(console.log(e))
    })
  }
  
  updateModelList(model) { 
    ajax({
      method: "PUT",
      url: '/ammo',
      data: {model},
      success: (response)=> console.log(response),
      error: (e)=>console.log(console.log(e))
    })
  }

  handleChange(modelObj){
    this.setState(prevState=>{
      const newStatus = prevState.models.map(model=>{

        if (model.id === modelObj.id){
          
          model.completed= !model.completed
          this.updateModelList(model)
        }
        return model;
      })
      return {models: newStatus} 
    })
  }




  render() {
    const todoModels = this.state.models.map(model => {
      return (
        <ModelItem 
          key={model.id}
          model={model} 
          handleChange={this.handleChange}
        />
      )
    })

    return (
      <div className="App">
        <h1 id='title'> quarantine MODELS </h1>
          <AddModelInfo/>
        <h2>{todoModels}</h2>
      </div>
    );
  }

}


export default App;