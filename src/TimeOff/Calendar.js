import React from 'react';
import { Calendar } from 'react-calendar';
import './calendar.css';

export default class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <Calendar onChange={this.onChange} value={this.state.date}  />
    );
  }
}