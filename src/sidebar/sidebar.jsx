import React from 'react';
import './sidebarStyle.css';

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
                                    <a href="/Employee/ViewEmployees" id="10" target="">
                                        <i className="fa fa-street-view fa-1x"></i>View Employee
                                     </a>
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
                                    <a href="/Leave/ApplyLeave" id="12" target="">
                                        <i className="fa fa-calendar-minus-o fa-1x"></i>Apply TimeOff
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Leave/GetLeaveBalance" id="13" target="">
                                        <i className="fa fa-th-list fa-1x"></i>TimeOff Balance
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Leave/GetLeaveHistory" id="11" target="">
                                        <i className="fa fa-history fa-1x"></i>TimeOff History
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-bar-chart-o fa-2x"></i>
                                <span className="nav-text">Reports</span>
                            </a>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-adn fa-2x"></i>
                                <span className="nav-text">Service Management</span>
                            </a>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span className="nav-text">Performance Management</span>
                            </a>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-archive fa-2x"></i>
                                <span className="nav-text">Organisation Documents</span>
                            </a>

                            <ul className="treeview-menu menu-open">
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Document/EmployeePolicies" id="20" target="">
                                        <i className="fa fa-file-pdf-o fa-1x"></i> Employee Policies
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Document/SoftwareDevelopmentProcess" id="28" target="">
                                        <i className="fa fa-connectdevelop fa-1x"></i> SDLC Process
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-money fa-2x"></i>
                                <span className="nav-text">Benefits Management</span>
                            </a>

                            <ul className="treeview-menu menu-open">
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/GetDependantsInsurance" id="30" target="">
                                        <i className="fa fa-users fa-1x"></i> Dependants Insurance
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/GetLifeEventDetails" id="31" target="">
                                        <i className="fa fa-life-ring fa-1x"></i> Life Event Management
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-clipboard fa-2x"></i>
                                <span className="nav-text">Training</span>
                            </a>

                            <ul className="treeview-menu">
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Training/TrainingDashboard" id="52" target="">
                                        <i className="fa fa-object-group fa-1x"></i> Dashboard
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Training/SelfTraining" id="53" target="">
                                        <i className="fa fa-graduation-cap fa-1x"></i> Self Training
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/SaturdayTraining/Schedule" id="55" target="">
                                        <i className="fa fa-calendar fa-1x"></i> Saturday Training
                                    </a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/ITTraining/SecurityTraining" id="1066" target="">
                                        <i className="fa fa fa-dot-circle-o fa-1x"></i> Information Security Awareness Training
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}