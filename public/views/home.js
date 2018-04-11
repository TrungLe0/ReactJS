var Title = (props) => {
  return <h1>Hello, {props.children} !</h1>
}

var Welcome = (props) => {
  return (
    <h2> Welcome {props.name} </h2>
  )
}

var _render = () => {
  const _Element =
  <div>
    <Title>ReactJS</Title>
    <Welcome name="to my website" />
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  ReactDOM.render(
    _Element
    , document.getElementById('root'))
}
setInterval(_render, 1000)
