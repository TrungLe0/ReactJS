import React, { Component } from 'react'

class TodoItems extends Component {
  constructor (props) {
    super(props)
    this.createItem = this.createItem.bind(this)
  }

  createItem (item) {
    let checkClass = ['fa fa-check']
    if (item['done']) checkClass = checkClass.concat('checked').join(' ')
    return (
      <li onClick={(e) => this.checkDone(item.key, e)} key={item.key}>
        <span className={checkClass}></span>
        {item.name}
        <span onClick={() => this.delete(item.key)} className="fa fa-trash-o btn-remove"></span>
      </li>
    )
  }

  delete (key) {
    this.props.delete(key)
  }

  checkDone (key, e) {
    // Because the remove button is contained in the <li> tag, when clicked remove
    // so thís function will be triggered with the remove function
    if (e.target.className.indexOf('btn-remove') < 0) this.props.check(key)
  }

  render () {
    let todoEntries = this.props.entries
    let listItem = todoEntries.map(this.createItem)
    return (
      <div className="result">
        <ul>
          {listItem}
        </ul>
      </div>
    )
  }
}

export default TodoItems
