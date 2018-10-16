import React from 'react';
import { Tab, Nav, NavItem, Row, Col, MenuItem, NavDropdown } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.scss';
import './PMS.css';
import { SelfAppraisal } from './SelfAppraisal';
import { OneOnOne } from './OneOnOne';
import { SharedAppraisal } from './SharedAppraisal';
import { Link } from "react-router-dom";
export class PerformanceManagement extends React.Component {
    render() {
        return (
            <div className='Tabs'>
            
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" >
                    <Row className="clearfix">
                        <Col sm={12} className='stylenav'>
                            <Nav bsStyle="pills">
                                <NavItem eventKey="1">Home</NavItem>
                                <NavDropdown eventKey="2" title="Appraisal" id="nav-dropdown-within-tab">
                                    <MenuItem eventKey="2.1">Self Appraisal</MenuItem>
                                    <MenuItem eventKey="2.2">Shared Appraisal</MenuItem>
                                    <MenuItem eventKey="2.3">One on One</MenuItem>
                                    <MenuItem eventKey="2.4">Sangam Home</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey="3">Performance mgt tookKit</NavItem>
                                <NavItem eventKey="4">Sangam Home</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="1">Tab 1 content</Tab.Pane>
                                <Tab.Pane eventKey="2.1"><SelfAppraisal /></Tab.Pane>
                                <Tab.Pane eventKey="2.2"><SharedAppraisal/></Tab.Pane>
                                <Tab.Pane eventKey="2.3"><OneOnOne/></Tab.Pane>
                                <Tab.Pane eventKey="2.4">sf</Tab.Pane>
                                <Tab.Pane eventKey="3">Tab 2 content</Tab.Pane>
                                <Tab.Pane eventKey="4"></Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>;
          
          </div>
        )
    }
}