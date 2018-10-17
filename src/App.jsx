import React from 'react';
import './App.css';
import Header from './Header/header';
import Sidebar from './sidebar/sidebar';
import Layout from './Layout/layout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeOff from './TimeOff/TimeOff.js';
import TimeOffBalance from './TimeOffBalance/TimeOffBalance.js';
import { PerformanceManagement } from './PMS/PMS';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: localStorage.getItem('profile')
    };
  }
  componentDidMount = () => {
    this.buildSignInBtn()
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
    Object.keys(profile).map(p => {
      localStorage.setItem(p, profile[p])
    })
  }
  buildSignInBtn = () => {
    window.gapi.signin2.render('signinbtn', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn,
      'onfailure': () => { console.log('login failed') }
    });
  }
  signOut = (() => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      if (auth2 != null) {
        auth2.signOut().then(() => {
          this.setState({ profile: null })
          localStorage.clear()
          this.buildSignInBtn()

          // auth2.disconnect().then(this.props.onLogoutSuccess)
        }
        )
      }
    }

    // this.forceUpdate()
  })
  render() {
    return (
      <div>
        {this.state.profile && this.state.profile.user_id ?

          <Router >
            <div className="App">
              <Header className="App-header" profile={this.state.profile} signOut={this.signOut} />

              <div className='App-layout'>
                <Sidebar className='App-sidebar' />
                <div>
                  <Route path="/ApplyTimeOff" component={TimeOff} />
                  <Route path="/ViewEmployees" component={Layout} />
                  <Route path='/TimeOffBalance' component={TimeOffBalance} />
                  <Route path="/PerformanceManagement" component={PerformanceManagement} />
                </div>
              </div>
            </div>
          </Router> :
          <div>
            <div id='signinbtn'></div>
          </div>
        }
      </div>
    );
  }
}