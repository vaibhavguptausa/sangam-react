import React from 'react';
import '../Header/headerStyle.css';
import Image from '../logoggk-sangam.png';

export default class Header extends React.Component {

    handleClick = () => {
        let Element = document.getElementById('logout-dropdown');
        if (Element.style.display === 'none') {
            Element.style.display = 'block';
        }
        else {
            Element.style.display = 'none';
        }
    }

    render() {

        return (
            <div className='main-header'>
                <div className='main-header-logo'>
                    <img src={Image} border="0" alt="GGK-Tech" title="GGK-Tech" />
                </div>

                <div className='main-header-user' onClick={this.handleClick}>
                    <img src={this.props.profile.image_url} alt="User Image" />
                    <span className="main-header-username">{this.props.profile.name}</span>
                </div>

                <ul className="my-dropdown-menu" id="logout-dropdown" style={{ display: 'none' }}>
                    <li className="user-header">
                        <img src={Image} className="img-circle" alt="User Image" />
                        <p>
                            <span id="userProfileName">{this.props.profile.name}</span> <br />
                            <span id="userDesignation"> Intern </span>
                        </p>
                    </li>

                    <li className="user-footer">
                        <a id="logout" className="btn btn-default btn-flat"> Logout </a>
                    </li>
                </ul>

            </div>
        );
    }
}