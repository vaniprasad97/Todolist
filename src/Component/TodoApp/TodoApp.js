import React, { Component } from "react";
import "./TodoApp.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default class TodoApp extends Component {
  state = {
    input: "",
    description: "",
    prority: "",
    date :"",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.input);
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const { description } = this.state;
    console.log(description)

    this.setState({
      items: [...this.state.items, input],
     
      input: ""
     
    });
  };

  deleteItem = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1);
    this.setState({
      items: allItems,
    });
  };
  editItem = (key) => {
    const allItems = this.state.items;
  };
  render() {
    const { input,description, items } = this.state;
    console.log(items);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp </h1>
          <input
            type="text"
            name ="input"
            value={input}
            onChange={this.handleChange}
            placeholder="enter the task name"
          />
          <input
            type="text"
            value={input}
            name ="description"
            onChange={this.handleChange}
            placeholder="enter the description"
          />
          <input
            type="text"
            value={input}
            name = "priority"
            onChange={this.handleChange}
            placeholder="priority"
          />
          <input type="date" 
          value={input} 
          name = "date"
          onChange={this.handleChange} 
          placeholder="enter the date"/>

          <div>
            <button type="submit">Add Items</button>
          </div>
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <AiFillEdit onClick={() => this.editItem(index)} />
              <AiFillDelete onClick={() => this.deleteItem(index)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
