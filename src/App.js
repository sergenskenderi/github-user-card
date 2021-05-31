import axios from 'axios';
import React from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends React.Component{
  // State
  state = {
    profile : [],
    followers : [],
    username : '',
    error : ''
  }

  // DidMount
  componentDidMount(){
    axios.get(`https://api.github.com/users/sergenskenderi`)
    .then( (res) => {
      this.setState({
        profile : res.data
      })
    })
    .catch( (err) => console.log(err));

    axios.get(`https://api.github.com/users/sergenskenderi/followers`)
    .then( (res) => {
      this.setState({
        followers : res.data
      })
    })
    .catch( (err) => console.log(err));
  }

  //DidUpdate
  componentDidUpdate(prepProps,prevState){
    if(prevState.username !== this.state.username){
      if(this.state.username === ''){
        axios
          .get(`https://api.github.com/users/sergenskenderi`)
          .then((res) => {
            this.setState({
              profile: res.data,
              username: "",
              error : ''
            });
          })
          .catch((err) => console.log(err));

          axios.get(`https://api.github.com/users/sergenskenderi/followers`)
    .then( (res) => {
      this.setState({
        followers : res.data
      })
    })
    .catch( (err) => console.log(err));
      }
    }
  }


  handleChanges = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  showProfile = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then( (res) => {
      this.setState({
        profile : res.data
      })
    })
    .catch( (err) => {
      this.setState({
        profile : [],
        error : "User not found !"
      })
    });

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then( (res) => {
      this.setState({
        followers : res.data
      })
    })
    .catch( (err) => {
      this.setState({
        followers : []
      })
    });
  }

  render ( ) {
    return(
    <div className="App">
      <input
          type="text"
          value={this.state.username}
          onChange={this.handleChanges}
          style={{marginTop : '10px'}}
        />
        <button onClick={this.showProfile}>Search</button>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        {!this.state.error &&
        <Profile profile={this.state.profile} followers={this.state.followers}/>
        }
    </div>
    );
  }
}

export default App;
