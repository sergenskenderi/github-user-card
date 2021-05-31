import axios from 'axios';
import React from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends React.Component{
  // State
  state = {
    profile : [],
    followers : [],
    username : 'sergenskenderi'
  }

  // DidMount
  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then( (res) => {
      this.setState({
        profile : res.data
      })
    })
    .catch( (err) => console.log(err));

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then( (res) => {
      this.setState({
        followers : res.data
      })
    })
    .catch( (err) => console.log(err));
  }

  //DidUpdate


  render ( ) {
    return(
    <div className="App">
      <Profile profile={this.state.profile} followers={this.state.followers}/>
    </div>
    );
  }
}

export default App;
