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
                        <div className="row">
                            Year: <YearPicker onChange={this.handleChange} />
                        </div>
                        
                        <div className="col-sm-12" id="LeaveBalance">
                            <div className="row">
                                <h5 style={{textAlign: 'center', color: '#8c7171', fontWeight: 'bold', fontSize: '1.1em', textDecoration: 'underline'}}>Time Off Details for the Year 2018</h5>
                                <br />
                                <br />
                                <div>
                                    <div className="progress hidden-sm hidden-xs progress-bar-class" id="leaveProgressBar" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="progress-bar" role="progressbar" id="1" title="0.87" style={{width: '11%', backgroundColor: 'rgb(92, 177, 92)'}}>
                                            0.87
                                                </div>
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="progress-bar" role="progressbar" id="10" title="2.87" style={{width: '37%', backgroundColor: 'darksalmon'}}>
                                            2.87
                                                </div>
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="progress-bar" role="progressbar" id="16" title="3" style={{width: '38%', backgroundColor: 'rgb(128, 128, 128)'}}>
                                            3
                                                </div>
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="progress-bar" role="progressbar" id="25" title="1" style={{width: '14%', backgroundColor: 'rgba(244, 7, 7, 0.84)'}}>
                                            1
                                                </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader opening-balance">Available Balance</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color: '#5cb15c'}}>0.87</span>
                                            <span className="leaveBalanceSign1">=</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader floating-vacation ">Floating Vacation</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"#ec69ab"}}>0</span>
                                            <span className="leaveBalanceSign1">+</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader compensated-leaves">Compensated</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:'#7777ff'}}>0</span>
                                            <span className="leaveBalanceSign1">+</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader earned-leaves">Earned Vacation</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:'darksalmon'}}>2.87</span>
                                            <span className="leaveBalanceSign1">+</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader carry-forward">Carry Forward</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"cadetblue"}}>0</span>
                                            <span className="leaveBalanceSign2">¯</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader leaves-taken">TimeOff Taken</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"gray"}}>3</span>
                                            <span className="leaveBalanceSign2">¯</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader lapsed-leaves">Lapsed</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"brown"}}>0</span>
                                            <span className="leaveBalanceSign2">¯</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader Encashed-leaves">Encashed</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"#006400"}}>0</span>
                                            <span className="leaveBalanceSign1">+</span>
                                        </div>
                                    </div>
                                    <div className="eq-col-9">
                                        <span className="TextBoxHeader loss-of-pay">Loss Of Pay Days</span>
                                        <div className="TextBox TextBoxBorder">
                                            <span className="pto-bal-total" style={{color:"rgba(244, 7, 7, 0.84 )"}}>1</span>
                                        </div>
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