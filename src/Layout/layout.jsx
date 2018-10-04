import React, { Component } from 'react';
import './layoutStyle.css';
import {Personal} from './personalContent';
import { Tab, TabContainer, TabContent, TabPane , MenuItem, NavDropdown, Nav, NavItem, Row, Col} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.scss';
import {AddressInfo} from './AddressInfo/AddressInfo';
import { ProfessionalInfo } from './Professional/ProfessionalInfo';
import {SkillsInfo} from './SkillsInfo/SkillsInfo' ;
export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Tabs'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={1}>
              <Nav bsStyle="tabs" stacked>
                <NavItem eventKey="first"><i className="fa fa-envelope fa-2x iconColor"></i>Personal</NavItem>
                <NavItem eventKey="second"><i className="fa fa-location-arrow fa-2x"></i>Address</NavItem>
                <NavItem eventKey="3"><i className="fa fa-black-tie fa-2x"></i>Professional</NavItem>
                <NavItem eventKey="4"><i className="fa fa-asterisk fa-2x"></i>Skills</NavItem>
                <NavItem eventKey="5"><i className="fa fa-book fa-2x"></i>Certification</NavItem>
                <NavItem eventKey="6"><i className="fa fa-graduation-cap fa-2x"></i>Academic</NavItem>
              </Nav>
            </Col>
            <Col sm={11}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first"><Personal /></Tab.Pane>
                <Tab.Pane eventKey="second"><AddressInfo /></Tab.Pane>
                <Tab.Pane eventKey="3"><ProfessionalInfo /></Tab.Pane>
                <Tab.Pane eventKey="4"><SkillsInfo /></Tab.Pane>
                <Tab.Pane eventKey="5">Tab 5 content</Tab.Pane>
                <Tab.Pane eventKey="6">Tab 6 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>;
           
      </div>
    )

  };
} 