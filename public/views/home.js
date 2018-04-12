function Title() {
  return <h1>to do list</h1>
}

class InputTag extends React.Component {
  constructor(props) {
    super(props)
    this.myText = React.createRef()
  }
  render() {
    return <input type="text" ref={this.myText} />
  }
}
//
class ClickButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn-clear">Clear</button>
        <button className="btn-add">Add</button>
      </div>
    )
  }
}

function Todos(props) {
  return (
    <ul>
      <Todo name="AngularJS" />
      <Todo name="NodeJS" />
      <Todo name="ReactJS" />
    </ul>
  )
}

function Todo(props) {
  return (
    <li>
      <span className="fa fa-check"></span>
      {props.name}
      <span className="fa fa-trash-o btn-remove"></span>
    </li>
  )
}

function CreateForm() {
  return (
    <div className="form">
      <Title />
      <InputTag />
      <ClickButton />
    </div>
  )
}

function CreateResult() {
  return (
    <div className="result">
      <Todos />
    </div>
  )
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
