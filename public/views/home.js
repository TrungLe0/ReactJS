class InputTag extends React.Component {
  constructor(props) {
    super(props)
    this.username = React.createRef()
  }
  showName() {
    let username = this.username.current.value
    alert(username)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.username} />
        <button onClick={() => this.showName()}>Show</button>
      </div>
    )
  }
}

class ClickButton extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
  }
  increase() {
    this.setState({
      count: Number(this.state.count) + 1
    })
  }
  render() {
    return (
      <button onClick={() => this.increase()}>Hello {this.state.count}</button>
    )
  }
  componentDidMount() {
    setInterval(() => this.increase(), 1000)
  }
}

var _element = () => {
  const _Element =
  <div>
    <InputTag />
    <ClickButton />
  </div>
  ReactDOM.render(
    _Element
    , document.getElementById('root'))
}

setInterval(_element, 1000)
