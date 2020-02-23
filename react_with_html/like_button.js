'use strict';

const userItemStyle = {
  color: 'gray',
  margin: 10,
}

const fetchUsers = async () => axios.get('https://reqres.in/api/users')
// fetchUsers();
class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={userItemStyle}>
        <li>"id": {this.props.user.id}</li> 
        <li>"email": {this.props.user.email}</li>
        <li>"first_name": {this.props.user.first_name}</li>
        <li>"last_name": {this.props.user.last_name}</li>
      </div>);
  }
}

const list_user = (users) => {
  return (users.map((user, i) => (
    <div key={i}>
      <UserItem user={user}></UserItem>
      <br></br>
    </div>)
))}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      users: [{id: 0}],
      index: 0
    };
  }

  componentDidMount() {
    fetchUsers()
    .then(res => {
      this.setState({
        users: res.data.data
      })
    })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    console.log(this.state.users);
    return (
    <div>
      {list_user(this.state.users)}
      <button>previous</button>
      <button>next</button>
    </div>);
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton), domContainer);