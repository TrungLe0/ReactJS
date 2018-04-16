function Title() {
  return <h1>to do list</h1>
}

class InputTag extends React.Component {
  constructor(props) {
    super(props)
    this.myText = React.createRef()
    this.state = {value: ''}
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} />
        <Button />
      </div>
    )
  }
}
//

function Button() {
  return (
    <div className="btn-group">
      <button className="btn-clear">Clear</button>
      <button className="btn-add">Add</button>
    </div>
  )
}

function Todos(props) {
  return (
    <ul>
      {
        props.result.map((todo) => {
          return <Todo key={ todo['id'] } todo={ todo } />
        })
      }
    </ul>
  )
}

function Todo(props) {
  let classCheck = ['fa fa-check']
  if (props.todo['done'] === true)
    classCheck = classCheck.concat('checked').join(' ')
  return (
    <li>
      <span className={ classCheck }></span>
      {props.todo['name']}
      <span className="fa fa-trash-o btn-remove"></span>
    </li>
  )
}

function CreateForm() {
  return (
    <div className="form">
      <Title />
      <InputTag />
    </div>
  )
}

class CreateResult extends React.Component {
  constructor(props) {
    super(props)
    this.state ={result: [
      {
        id: 1,
        name: 'AngularJS',
        done: false
      },
      {
        id: 2,
        name: 'NodeJS',
        done: true
      }
    ]}
  }
  render() {
    return (
      <div className="result">
        <Todos result={this.state.result} />
      </div>
    )
  }

}

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <CreateForm />
        <CreateResult />
      </div>
    )
  }
}
ReactDOM.render(
  <Container />
  , document.getElementById('root'))
