import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ApplyTimeOff from './ApplyTimeOff.js';
import ApplyEventRequest from './ApplyEventRequest.js';
import MyCalendar from './Calendar.js';
import BarGraph from './BarGraph.js';
import './TimeOff.css';

export default class TimeOff extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className='tabs'>
                    <div>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Apply TimeOff">
                                <ApplyTimeOff />
                            </Tab>
                            <Tab eventKey={2} title="ApplyEventRequest">
                                <ApplyEventRequest />
                            </Tab>
                        </Tabs>
                    </div>
                </section>
                <div className='calendarcustom'><MyCalendar /></div>
                <div className="bar-graph"><BarGraph /></div>
            </div>
        );
    }
}