import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'
import FoodCreate from './Form.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodAll: foods,
      formActive: false,
      searchName: '',
    }
    this.addFood = this.addFood.bind(this)
  }

  listFood() {
    if (this.state.searchName === '') {
      return this.state.foodAll.map(food => {
        return (
            <FoodBox name={food.name} calories={food.calories} image={food.image}/>
        )})
    } else {
      this.state.foodAll.filter((food) => {food.name.includes(this.state.searchName)}).map(food => {
        return (<FoodBox name={food.name} calories={food.calories} image={food.image}/>);
      })
  }
}

  activateForm(){
    this.setState({formActive: true})
  }

  showForm() {
    if(this.state.formActive){
    return(<FoodCreate addFood={this.addFood}/>)
    }
  }

  addFood(newFood) {
    let foodAllCopy = [...this.state.foodAll]
    foodAllCopy.push(newFood)
    this.setState((state) => {
      return { 
        foodAll: foodAllCopy,
        formActive: false
    }
    })
  }

  searchInput = (event) => {    
    this.setState({searchName: event.target.value})
  }

  render() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <button onClick={() => this.activateForm()}>Create new food</button>
      <input type="text" name="name" value={this.state.searchName} onChange={(e)=>this.searchInput(e)}/>
      {this.showForm()}
      {this.listFood()}
      </Fragment>
    );
  }
}

export default App;
