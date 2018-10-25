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
            <div className='wrapper' id='containerWrapper'>
                <div className="content-wrapper1">
                    <section className="content-header margintop-20">
                        <h4 id="lblReportName"><strong>TimeOff Balance</strong></h4>

                        <div className="breadcrumb hidden-sm hidden-xs">
                            <div className="item"><a href="/">Dashboard</a> &gt;
                                <span style={{ color: "Gray" }}>
                                    <i className="fa fa-calendar-times-o"></i><span> TimeOff Management </span>
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

                        <div className="col-sm-12" id="leaveBalance">
                            <div className="my-row2">
                                <h5>Time Off Details for the Year 2018</h5>
                                <br />
                                <br />
                                <div className="eq-col-9">
                                    <span className="text-box-header opening-balance">Available Balance</span>
                                    <div className="text-box text-box-border">
                                        <span className="pto-bal-total">0.87</span>
                                        <span className="leave-balance-sign1">=</span>
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