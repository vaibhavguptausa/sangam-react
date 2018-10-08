import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer calibriFont14">
                <div>
                    <em>The Complete HRMS Suite</em>
                </div>
                <div className="pull-right">
                    © 2018
                    <strong><a id="tenantwebsite" href="http://www.ggktech.com"> GGK Technologies</a></strong>All Rights Reserved.
                </div>
            </footer>
        );
    }
}