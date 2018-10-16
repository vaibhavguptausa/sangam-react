import React from 'react';
import './App.css';
import Header from './Header/header';
import Sidebar from './sidebar/sidebar';
import Layout from './Layout/layout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeOff from './TimeOff/TimeOff.js';
import GoogleLoginButton from 'react-google-login-button';
import TimeOffBalance from './TimeOffBalance/TimeOffBalance.js';
import {PerformanceManagement} from './PMS/PMS' ;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: localStorage.getItem('profile')
    };
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

  render() {

    var forceMyOwnLogout = ((response) => {
      if (window.gapi) {
        const auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2 != null) {
          auth2.signOut().then(() => {
            this.setState({ profile: null })
          })
        }
      }
    })

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
                  <Route path='/TimeOffBalance' component={TimeOffBalance} />
                  <Route path="/PerformanceManagement" component={PerformanceManagement} />
                </div>
              </div>
            </Router>

            <button onClick={() => forceMyOwnLogout()} style={{ float: 'right' }}>Logout</button>
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