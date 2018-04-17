function Title() {
  return <h1>to do list</h1>
}

class InputTag extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  setResult(value) {
    this.setState({
      value: value
    })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.todoChange(this.state.value)
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setResult(e.target.value)} onKeyPress={this.handleKeyPress}/>
        <div className="btn-group">
          <button className="btn-clear" >Clear</button>
          <button onClick={(e) => this.props.todoChange(this.state.value)} className="btn-add">Add</button>
        </div>
      </div>
    )
  }
}

function Todos(props) {
  return (
    <ul>
      {
        props.result.map((todo) => {
          return <Todo key={todo['id']} todo={todo} remove={props.remove} checkDone={props.checkDone} />
        })
      }
    </ul>
  )
}

class Todo extends React.Component {
  constructor(props, state) {
    super(props, state)
    console.log(this.state)
    this.removeTodo = this.removeTodo.bind(this)
    this.checkDone = this.checkDone.bind(this)
  }

  removeTodo(id) {
    console.log(this.state)
    let newResult = this.state.result.filter(result => result['id'] !== id )
    this.setState({result: newResult})
    localStorage.removeItem('todo' + id)
  }

  checkDone(id, e) {
    if (e.target.className.indexOf('btn-remove') < 0) {
      for (var i = 0; i < this.state.result.length; i++) {
        let item = this.state.result[i]
        if (item['id'] === id){
          item['done'] = !item['done']
          localStorage.setItem('todo' + id, JSON.stringify(item))
        }
      }
    }
  }
  render() {
    let classCheck = ['fa fa-check']
    if (this.props.todo['done'] === true)
      classCheck = classCheck.concat('checked').join(' ')
    return (
      <li onClick={(e) => this.checkDone(this.props.todo['id'])}>
        <span className={ classCheck }></span>
        {this.props.todo['name']}
        <span onClick={ (e) => this.removeTodo(this.props.todo['id'], e)} className="fa fa-trash-o btn-remove"></span>
      </li>
    )
  }

}

function CreateForm(props) {
  return (
    <div className="form">
      <Title />
      <InputTag todoChange={props.onAddData}/>
    </div>
  )
}

class CreateResult extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="result">
        <Todos result={this.props.result} remove={this.props.remove} checkDone={this.props.checkDone} />
      </div>
    )
  }

}

if (!localStorage.getItem('storeId')) localStorage.setItem('storeId', 1)

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)

    var todos = []
    if(localStorage) {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        if (key.substring(0, 4) === 'todo') {
          var item = JSON.parse(localStorage.getItem(key))
          todos.push(item)
        }
      }
      if (todos.length === 0) {
        let angular = {
          id: 1,
          name: 'AngularJS',
          done: false
        }
        todos.push(angular)
        let key = 'todo' + localStorage.getItem('storeId')
        localStorage.setItem(key, JSON.stringify(angular))
      }
    }
    this.state = {result: todos}
  }

  addTodo(name) {
    let id = Number(localStorage.getItem('storeId')) + 1
    let key = 'todo' + id
    let todo = {id: id, name: name, done: false}
    localStorage.setItem('storeId', id)
    localStorage.setItem(key, JSON.stringify(todo))
    this.setState({
      result: this.state.result.concat(todo)
    })
  }

  render() {
    return (
      <div className="container">
        <CreateForm onAddData={this.addTodo}/>
        <CreateResult result={this.state.result} />
      </div>
    )
  }
}
ReactDOM.render(
  <Container />
  , document.getElementById('root'))
