import React from 'react';
import './headerStyle.css';
import Image from '../logoggk-sangam.png';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disp: false, open: false };
    }
    componentDidMount = () => {
        window.addEventListener('click', (e) => {
            if ((document.getElementById('mainHeaderUser') && document.getElementById('mainHeaderUser').contains(e.target))
                || (document.getElementById('logoutDropdown') && document.getElementById('logoutDropdown').contains(e.target))) {
                this.setState({ disp: !this.state.disp });
            } else {
                this.setState({ disp: false });
            }
        })
    }
    handleClick = () => {
        this.setState({ disp: !this.state.disp });
    }

    

    render() {
        return (
            <div className='main-header'>
                <div className='main-header-logo'>
                    <Link to='/'>
                        <img src={Image} border="0" alt="GGK-Tech" title="GGK-Tech" />
                    </Link>
                </div>

                <div className='main-header-user' id='mainHeaderUser'>
                    <img src={this.props.profile.image_url} alt="User Image" />
                        <span className="main-header-username">{this.props.profile.name}</span>
                </div>

                {this.state.disp ?
                    <ul className="my-dropdown-menu" id="logoutDropdown" >
                        <li className="user-header">
                            <img src={this.props.profile.image_url} className="img-circle" alt="User Image" />
                            <p>
                                <span id="userProfileName">{this.props.profile.name}</span> <br />
                                <label>
                                    <span>Night mode</span>
                                    <Toggle
                                        icons={false}
                                        onChange={() => this.props.handleNightMode()} />
                                </label>
                            </p>
                        </li>

                        <li className="user-footer">
                            <a id="logout" className="btn btn-default btn-flat" onClick={() => this.props.signOut()}> Logout </a>
                        </li>
                    </ul> : <div></div>}
            </div >
        );
    }
}