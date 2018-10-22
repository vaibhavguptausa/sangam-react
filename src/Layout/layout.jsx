import React from 'react';
import { Tab, Nav, NavItem, Row, Col } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.scss';
import Personal from './personalContent';
import AddressInfo from './AddressInfo/AddressInfo';
import ProfessionalInfo from './Professional/ProfessionalInfo';
import SkillsInfo from './SkillsInfo/SkillsInfo';
import Identification from './Identification/Identification';
import Contact from './Contact/Contact';
import './layoutStyle.css';
import classNames from 'classnames' ;

export default class Layout extends React.Component {
  render() {
    var cluster = classNames({
      'margin1-class': true,
       'Tabs': true

    })
    return (
      <div className={cluster}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix" style={{marginTop : 50+'px'}}>
            <Col sm={1}>
              <Nav bsStyle="tabs" stacked>
                <NavItem eventKey="first"><i className="fa fa-envelope fa-2x iconColor"></i>Personal</NavItem>
                <NavItem eventKey="second"><i className="fa fa-location-arrow fa-2x"></i>Address</NavItem>
                <NavItem eventKey="3"><i className="fa fa-black-tie fa-2x"></i>Professional</NavItem>
                <NavItem eventKey="4"><i className="fa fa-asterisk fa-2x"></i>Skills</NavItem>
                <NavItem eventKey="5"><i className="fa fa-book fa-2x"></i>Certification</NavItem>
                <NavItem eventKey="6"><i className="fa fa-graduation-cap fa-2x"></i>Academic</NavItem>
                <NavItem eventKey="7"><i className="fa fa-graduation-cap fa-2x"></i>Experience</NavItem>
                <NavItem eventKey="8"><i className="fa fa-graduation-cap fa-2x"></i>Contact</NavItem>
                <NavItem eventKey="9"><i className="fa fa-graduation-cap fa-2x"></i>Identification</NavItem>
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
                <Tab.Pane eventKey="7">Tab 7 content</Tab.Pane>
                <Tab.Pane eventKey="8"><Contact /></Tab.Pane>
                <Tab.Pane eventKey="9"><Identification /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}