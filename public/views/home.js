class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.children} !</h1>
      </div>
    )
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  clickToMe() {
    alert(this.props.name)
  }
  render() {
    return (
      <div>
        <h2> Welcome {this.props.name} </h2>
        <button onClick={() => this.clickToMe()}>Click To Me</button>
        <button onClick={() => {getName(this.props.name)}}>Click To Me</button>
      </div>
    )
  }
}

var getName = (name) => {
  alert(name)
}

var _element = () => {
  const _Element =
  <div>
    <Title>ReactJS</Title>
    <Welcome name="to my website" quantity="20" />
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <hr />
  </div>
  ReactDOM.render(
    _Element
    , document.getElementById('root'))
}

setInterval(_element, 1000)
