// https://repl.it/@1VinceP/ReactMapPractice

import React, { Component } from 'react';
import './App.css';

import Food from './Food';
import data from './data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPhone: '',
      editIndex: null
    }
  }

  onEdit(currentPhone, editIndex) {
    this.setState({
      currentPhone,
      editIndex
    })
  }

  handleChange( e ) {
    this.setState({
      currentPhone: e.target.value
    })
  }

  onSave( i ) {
    data.customers[i].phone = this.state.currentPhone

    this.setState({
      currentPhone: '',
      editIndex: null
    })
  }

  renderCustomers() {
    return data.customers.map( ( customer, i ) => {
      return (
        <div className='list' key={i}>
            { this.state.editIndex === i
              ? <div>
                  <div>{customer.name}</div>
                  <input value={this.state.currentPhone} onChange={e => this.handleChange(e)} />
                  <button onClick={() => this.onSave(i)}>Save</button>
                </div>
              : <div>
                  <div>{customer.name}</div>
                  <div>{customer.phone}</div>
                  <button onClick={() => this.onEdit(customer.phone, i)}>Edit</button>
                </div>
            }
        </div>
      )
    } )
  }

  render() {

    let animals = data.animals.map( ( animal, i ) => {
      return (
        <div key={i} className='list'>
          {animal}
        </div>
      )
    } )

    let food = data.food.map( ( food, i ) => {
      return <Food key={i} food={food} />
    } )

    return (
      <div className='App'>
        <div>{animals}</div>
        <div>{food}</div>
        <div>{this.renderCustomers()}</div>
      </div>
    )
  }

}

export default App;