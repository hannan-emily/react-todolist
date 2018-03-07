import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      toDoItemArray: props.theList,
      currentItem: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    //create a copy
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    //push item to copy
    toDoItemArrayCopy.push(this.state.currentItem)
    //update master with copy
    this.setState({
      toDoItemArray: toDoItemArrayCopy,
      currentItem: '',
    })
  }

  clearList = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: []
    })
  }

  render() {

    let jsxTodos = this.state.toDoItemArray.map((listItem, index) => {
      return  <ListItem doThis={listItem} key={index} />
    })

    return (
      <div className="App">
        <h1>How about this next?</h1>
        <ul>
            {jsxTodos}
        </ul>
        <input type="text" value={this.state.currentItem} onChange={this.handleChange} />
        <br />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={this.clearList}>Finished The List!</button>
      </div>
    );
  }
}

export default MyList;
