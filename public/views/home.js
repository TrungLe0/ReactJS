class Note extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p>{this.props.children}</p>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayString: ['NodeJS', 'ReactJS', 'AngularJS'],
      arrayNumber: [1, 2, 3, 4, 5]
    }
  }
  addItem() {
    this.setState(prevState => ({
        arrayString: prevState.arrayString.concat(['hello', 'bla'])
    }))
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addItem()}>Add Item</button>
        {this.state.arrayString.map((item, index) => {
          return <Note key={index}>{item}</Note>
        })}
      </div>
    )
  }
}
ReactDOM.render(
  <List />
  , document.getElementById('root'))
