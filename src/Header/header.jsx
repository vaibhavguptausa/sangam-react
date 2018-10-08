import React from 'react';
import '../Header/headerStyle.css';
import Image from '../logoggk-sangam.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className='main-header'>
                <div className='main-header-logo'>
                    <img src={Image} border="0" alt="GGK-Tech" title="GGK-Tech" />
                </div>

                <div className='main-header-user'>
                    <img src="http://sangam.ggktech.com/docs/ProfilePhotos/10154_ProfilePhoto.JPG" />
                    <span className="main-header-username">Vaibhav Gupta</span>
                </div>
            </div>
        );
    }
}