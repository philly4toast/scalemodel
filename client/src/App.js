import React, { Component } from "react";
import sampleData from "../../DB/sampleData.js"
import ModelItem from './ModelItem.js';
import {ajax} from 'jquery'

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


  handleChange(id){
    this.setState(prevState=>{
      const newStatus = prevState.models.map(model=>{
        // var modelCopy = model;
        if (model.id === id){

            model.completed= !model.completed
          
        }
        return model;
      })
      return {models: newStatus}
    })

    console.log('you just clicked on model # ', id)
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
        <h1> Quarantine Models </h1>
        <h2>{todoModels}</h2>
      </div>
    );
  }

}


export default App;