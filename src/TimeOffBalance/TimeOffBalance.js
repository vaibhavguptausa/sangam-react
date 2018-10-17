import React from 'react';
import './TimeOffBalance.css';
import YearPicker from 'react-year-picker';

export default class TimeOffBalance extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (date) => {
        console.log(date);
    }

    render() {
        return (
            <div className='wrapper' id='container-wrapper'>
                <div className="content-wrapper" style={{ minHeight: "912px" }}>
                    <section className="content-header margintop-20">
                        <h4 id="lblReportName">TimeOff Balance</h4>

                        <div className="breadcrumb hidden-sm hidden-xs">
                            <div className="item"><a href="http://sangam.ggktech.com/Home/Index">Dashboard</a> &gt;
                                <span style={{ color: "Gray" }}>
                                    <i className="fa fa-calendar-times-o"></i><span> TimeOff Management</span>
                                </span> &gt;
                                <span style={{ color: "Gray" }}>
                                    <i className="fa fa-th-list"></i> TimeOff Balance
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="container-fluid">
                        <div className="my-row">
                            Year: <YearPicker onChange={this.handleChange} />
                        </div>

                        <div className="col-sm-12" id="LeaveBalance">
                            <div className="my-row2">
                                <h5 style={{ textAlign: 'center', color: '#8c7171', fontWeight: 'bold', fontSize: '1.1em', textDecoration: 'underline' }}>Time Off Details for the Year 2018</h5>
                                <br />
                                <br />
                                <div class="eq-col-9">
                                    <span class="TextBoxHeader opening-balance">Available Balance</span>
                                    <div class="TextBox TextBoxBorder">
                                        <span class="pto-bal-total" style={{color:'#5cb15c'}}>0.87</span>
                                        <span class="leaveBalanceSign1">=</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}