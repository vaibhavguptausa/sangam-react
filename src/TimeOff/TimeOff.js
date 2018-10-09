import React from 'react';
import { Tab, Tabs, TabContainer, TabContent, TabPane, MenuItem, NavDropdown, Nav, NavItem, Row, Col } from 'react-bootstrap';

export default class TimeOff extends React.Component {
    render() {
        return (
            <div className="content-wrapper" style={{ minHeight: 912 + 'px' }}>

                <section className="content-header margintop-20">
                    <h1 id="lblReportName">Apply TimeOff</h1>

                    <div className="breadcrumb hidden-sm hidden-xs">
                        <div className="item">
                            <a href="http://sangam.ggktech.com/Home/Index">Dashboard</a> &gt;
                            <span style={{ color: 'Gray' }}>
                                <i className="fa fa-calendar-times-o"></i>
                                <span> TimeOff Management</span>
                            </span> &gt;
                            <span style={{ color: 'Gray' }}>
                                <i className="fa fa-calendar-minus-o"></i>Apply TimeOff
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='Tabs'>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Apply TimeOff">
                                Apply TimeOff
                            </Tab>
                            <Tab eventKey={2} title="Tab 2">
                                Tab 2 content
                            </Tab>
                        </Tabs>
                    </div>
                </section>
            </div>
        );
    }
}