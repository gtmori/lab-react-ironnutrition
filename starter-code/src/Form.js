import React, { Component } from 'react';

class FoodCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    }
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state)
    console.log(this.props);    
    this.setState ({
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    })
  }

  handleFormInput = (event) => {
    const { name, value } = event.target     
    this.setState({[name]: value})
  }
  
render() {
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Food Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleFormInput(e)}/>

          <label>Food Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e)=>this.handleFormInput(e)}/>

          <label>Image:</label>
          <input type="file" name="image" value={this.state.image} onChange={(e)=>this.handleFormInput(e)}/>
          
          <input type="submit" value="Submit"/>
      </form>
    </div>
  )}
}

export default FoodCreate