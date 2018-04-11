class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: this.props.quantity};
  }

  increase() {
    this.setState((prevState) => ({
      counter: Number(prevState.counter) + 1
    }))
  }
  render() {
    return (
      <div>
        <h2> Welcome {this.props.name} </h2>
        <h2> {this.state.counter} </h2>
        <button onClick={() => this.increase()}>count</button>
      </div>
    )
  }
}

var _element = () => {
  const _Element =
  <div>
    <Welcome name="to my website" quantity="20" />
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <hr />
  </div>
  ReactDOM.render(
    _Element
    , document.getElementById('root'))
}

setInterval(_element, 1000)
