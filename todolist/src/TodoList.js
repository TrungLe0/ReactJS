import React, { Component } from 'react'
import TodoItems from './TodoItems'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.checkItem = this.checkItem.bind(this)
  }

  addItem (e) {
    let item = this._inputElement.value.trim()
    if (item !== '') {
      let newItem = {
        key: Date.now(),
        name: item,
        done: false
      }

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
    }
    this._inputElement.value = ''
    e.preventDefault()
  }

  deleteItem (key) {
    this.setState({items: this.state.items.filter(item => item['key'] !== key)})
  }

  checkItem (key) {
    let todoEntries = this.state.items
    for (var i = 0; i < todoEntries.length; i++) {
      let todo = todoEntries[i]
      if (todo['key'] === key) {
        todo['done'] = !todo['done']
        break
      }
    }
    this.setState({items: this.state.items})
  }

  render () {
    return (
      <div>
        <div className="form">
          <h1>to do list</h1>
          <form onSubmit={this.addItem}>
            <input ref={ (a) => (this._inputElement = a) } type="text" placeholder="Enter task" />
            <button type="submit" className="btn-add">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} check={this.checkItem} />
      </div>
    )
  }
}

export default TodoList
