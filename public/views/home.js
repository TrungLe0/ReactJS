class LoginController extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLogin: false}
  }

  handleLoginClick() {
    this.setState({isLogin: true})
  }

  handleLogoutClick() {
    this.setState({isLogin: false})
  }
  render() {
    let isLogin = this.state.isLogin
    let button = !isLogin ? (<LoginButton onClick={this.handleLoginClick} />) : (<LogoutButton onClick={this.handleLogoutClick} />)
    return (
      <div>
        <Greeting isLogined={isLogin} />
        {button}
      </div>
    )
  }
}

function Greeting(props) {
  if(props.isLogined) return <UserGreeting />
  return <GuesGreeting />
}

function UserGreeting() {
  return <h1>Hello User</h1>
}

function GuesGreeting() {
  return <h1>Hello Gues</h1>
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}
ReactDOM.render(
  <LoginController />
  , document.getElementById('root'))
