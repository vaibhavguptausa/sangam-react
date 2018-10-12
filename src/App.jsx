import React from 'react';
import './App.css';
import Header from './Header/header';
import Sidebar from './sidebar/sidebar.jsx';
import Layout from './Layout/layout';
import RouterFile from './routerFile.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeOff from './TimeOff/TimeOff.js';
import GoogleLoginButton from 'react-google-login-button'
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: localStorage.getItem('profile')
    }
  }
  onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    profile = {
      user_id: profile.getId(),
      name: profile.getName(),
      image_url: profile.getImageUrl(),
      email: profile.getEmail()
    }
    this.setState({ profile: profile });
    localStorage.setItem('profile', profile)
  }
  logout = () => {
    this.setState({profile : null});
  }
  render() {
    return (
      <div>

        {this.state.profile && this.state.profile.user_id ?

          <div className="App">
            <Header className="App-header" profile={this.state.profile} />
           
            <Router >
              <div className='App-layout'>
                <Sidebar className='App-sidebar' />
                <div>
                  <Route path="/ApplyTimeOff" component={TimeOff} />
                  <Route path="/ViewEmployees" component={Layout} />
                </div>
              </div>
            </Router>
              <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.logout}
            >
              Log out
        </GoogleLogout>
          </div> :
          <div><GoogleLoginButton
            className="Login-Page"
            googleClientId='13711333764-l85op5klrq1sorp5lbbuao603ne9nrc5.apps.googleusercontent.com'
            onLoginSuccess={this.onSignIn}
            onLoginFailure={() => console.log('Login failed')}
            width={140}
            height={40}
            longTitle={false}
            theme="light"
          />    </div>
        }
      </div>

    );
  }
}
