import React from 'react';
import TimeOff from './TimeOff/TimeOff.js';
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './sidebar/sidebar.jsx';
import Layout from './Layout/layout';

export default class RouterFile extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Sidebar />
                    <div>
                        <Route path="/ApplyTimeOff" component={TimeOff} />
                        <Route path="/ViewEmployees" component={Layout} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}