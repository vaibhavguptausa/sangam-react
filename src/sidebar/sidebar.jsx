import React, { Component } from 'react';
import './sidebarStyle.css' ; 

export class Sidebar extends Component {
    render() {
        const style1={
            'marginLeft': '10px'
        }
        const style2={
            'display' : 'none'
        }
        return (
            <aside className="main-sidebar" id="menu_sideBar">

                <section className="sidebar">
                    <ul className="sidebar-menu">

                        <li className="treeview">
                            <a href="#" id="1">
                                <i className="fa fa-users" style={{padding:5+'px'}}></i><span> Employee Management</span><i className="fa fa-angle-left pull-right" style={{paddingRight:10+'px' , paddingTop:5+'px',paddingLeft:30+'px' }}></i>
                            </a>
                            <ul className="treeview-menu menu-open" >
                                <li style={style1}>
                                    <a href="/Employee/ViewEmployees" id="10"   target="">
                                        <i className="fa fa-street-view fx-3"></i> View Employee
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Employee/SearchEmployees" id="14"  target="">
                                        <i className="fa fa-search"></i> Search Employees
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Employee/OrganizationChart" id="18"   target="">
                                        <i className="fa fa-users"></i> Organization Chart
            </a>
                                </li>


                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="/TimeSheet/ViewTimeSheet" id="3"  target="">
                                <i className="fa fa-clock-o" style={{padding:5+'px'}}></i><span> Time Management</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#" id="4">
                                <i className="fa fa-calendar-times-o" style={{padding:5+'px'}}></i><span> TimeOff Management</span><i className="fa fa-angle-left pull-right" style={{paddingRight:10+'px',paddingTop: 5+'px' ,paddingLeft:30+'px' }}></i>
                            </a>
                            <ul className="treeview-menu menu-open">
                                <li style={style1}>
                                    <a href="/Leave/ApplyLeave" id="12"  target="">
                                        <i className="fa fa-calendar-minus-o"></i> Apply TimeOff
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Leave/GetLeaveBalance" id="13"  target="">
                                        <i className="fa fa-th-list"></i> TimeOff Balance
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Leave/GetLeaveHistory" id="11"  target="">
                                        <i className="fa fa-history"></i> TimeOff History
            </a>
                                </li>


                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="/Report/ReportDashBoard" id="5"  target="">
                                <i className="fa fa-bar-chart" style={{padding:5+'px'}}></i><span> Reports</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="http://sangam.ggktech.com/SRA#" id="22"  target="_blank">
                                <i className="fa fa-server" style={{padding:5+'px'}}></i><span> Service Management</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="http://pms.ggktech.com/pms/welcome.html" id="24"  target="_blank">
                                <i className="fa fa-line-chart" style={{padding:5+'px'}}></i><span> Performance Management</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#" id="27">
                                <i className="fa fa-paper-plane" style={{padding:5+'px'}}></i><span> Organization Documents</span><i className="fa fa-angle-left pull-right" style={{paddingRight:10+'px',paddingTop: 5+'px' ,paddingLeft:30+'px' }}></i>
                            </a>
                            <ul className="treeview-menu menu-open">
                                <li style={style1}>
                                    <a href="/Document/EmployeePolicies" id="20"  target="">
                                        <i className="fa fa-file-pdf-o"></i> Employee Policies
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Document/SoftwareDevelopmentProcess" id="28"  target="">
                                        <i className="fa fa-connectdevelop"></i> SDLC Process
            </a>
                                </li>


                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#" id="29">
                                <i className="fa fa-money" style={{padding:5+'px'}}></i><span> Benefits Management</span><i className="fa fa-angle-left pull-right" style={{paddingRight:10+'px',paddingTop: 5+'px' ,paddingLeft:30+'px' }}></i>
                            </a>
                            <ul className="treeview-menu menu-open">
                                <li style={style1}>
                                    <a href="/Employee/GetDependantsInsurance" id="30"  target="">
                                        <i className="fa fa-users"></i> Dependants Insurance
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Employee/GetLifeEventDetails" id="31"  target="">
                                        <i className="fa fa-life-ring"></i> Life Event Management
            </a>
                                </li>


                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#" id="51">
                                <i className="fa fa-institution" style={{padding:5+'px'}}></i><span> Training</span><i className="fa fa-angle-left pull-right" style={{paddingRight:10+'px',paddingTop: 5+'px' ,paddingLeft:30+'px' }}></i>
                            </a>
                            <ul className="treeview-menu">
                                <li style={style1}>
                                    <a href="/Training/TrainingDashboard" id="52"  target="">
                                        <i className="fa fa-object-group"></i> Dashboard
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/Training/SelfTraining" id="53"  target="">
                                        <i className="fa fa-graduation-cap"></i> Self Training
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/SaturdayTraining/Schedule" id="55"  target="">
                                        <i className="fa fa-calendar"></i> Saturday Training
            </a>
                                </li>
                                <li style={style1}>
                                    <a href="/ITTraining/SecurityTraining" id="1066"  target="">
                                        <i className="fa fa fa-dot-circle-o"></i> Information Security Awareness Training
            </a>
                                </li>


                            </ul>
                        </li>
                       


                    </ul>
                </section>
            </aside>
        )
    }
}