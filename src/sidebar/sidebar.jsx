import React from 'react';
import './sidebarStyle.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="area">
                <nav className="main-menu">
                    <ul>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-users fa-2x"></i>
                                <span className="nav-text">Employee Management</span>
                            </a>

                            <ul className="treeview-menu menu-open" >
                                <li style={{ marginLeft: '10px' }}>
                                    <Link to='/ViewEmployees'><a href="/Employee/ViewEmployees" id="10" target="">
                                        <i className="fa fa-street-view fa-1x"></i>View Employee
                                     </a></Link>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/SearchEmployees" id="14" target="">
                                        <i className="fa fa-search fa-1x"></i>Search Employees</a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/OrganizationChart" id="18" target="">
                                        <i className="fa fa-users fa-1x"></i>Organization Chart
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-clock-o fa-2x"></i>
                                <span className="nav-text">Time Management</span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-ban fa-2x"></i>
                                <span className="nav-text">Time-Off Management</span>
                            </a>

                            
                                
                                <ul className="treeview-menu menu-open">
                                    <li style={{ marginLeft: '10px' }}>
                                        <Link to="/ApplyTimeOff"><a href="/Leave/ApplyLeave" id="12" target="">
                                            <i className="fa fa-calendar-minus-o fa-1x"></i>Apply TimeOff
                                        </a></Link>
                                    </li>
                                    
                                    {/* <li style={{ marginLeft: '10px' }}>
                                        <Link to=""><a href="/Leave/GetLeaveBalance" id="13" target="">
                                            <i className="fa fa-th-list fa-1x"></i>TimeOff Balance
                                        </a></Link>
                                    </li>
                                    <li style={{ marginLeft: '10px' }}>
                                        <Link to=""><a href="/Leave/GetLeaveHistory" id="11" target="">
                                            <i className="fa fa-history fa-1x"></i>TimeOff History
                                        </a></Link>
                                    </li> */}
                                </ul>
                                

                                
                            

                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}