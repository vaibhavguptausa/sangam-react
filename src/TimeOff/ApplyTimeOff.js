import React from 'react';
import { Button } from 'react-bootstrap';
import './ApplyTimeOffStyle.css';

export default class ApplyTimeOff extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, duration: '', value: '' };
    }

    handleChange1 = (e) => {
        const name = e.target.id;
        console.log(name);
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleChange = (e) => {
        const name = e.target.id;
        console.log(name);
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });

        let value = e.target.value;
        if (value === 'FULL-DAY' || value === 'HALF-DAY' || value === '') {
            this.setState({ duration: 'single' });
        }
        else {
            this.setState({ duration: 'multiple' });
        }
    }

    handleSubmit = () => {
        console.log(this.state, 'state');
    }

    render() {
        return (
            <div>
                <div id="timeOffDetails">
                    <div className="row container-fluid">
                        <div className="col-md-12 form-group">
                            <h4 className="timeOffDetailHeading pull-left">Available TimeOff Balance : 0.87</h4>
                        </div>

                        <div _ngcontent-fgg-1="" className="col-md-12">
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveType">TimeOff Type :</label>
                            </div>
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <div className="twitter-typeahead" >
                                    <select value={this.state.user.timeOffType} onChange={this.handleChange1} className='form-control' id='timeOffType' >
                                        <option value="">Select...</option>
                                        <option value="SICK">Sick</option>
                                        <option value="CASUAL">Casual</option>
                                        <option value="OPTIONAL">Optional</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDuration">TimeOff Duration :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <div className="twitter-typeahead" >
                                        <select value={this.state.user.timeOffDuration} onChange={this.handleChange} className='form-control' id='timeOffDuration' >
                                            <option value="">Select...</option>
                                            <option value="FULL-DAY">Full Day</option>
                                            <option value="HALF-DAY">Half Day</option>
                                            <option value="MULTIPLE-DAYS">Multiple Days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {this.state.duration === 'multiple' ? <div></div> : <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationStartDate">Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div className="twitter-typeahead">
                                        <input value={this.state.user.Date} onChange={this.handleChange} className="form-control identityEditableField " id="Date" type="date" />
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {this.state.duration === 'multiple' ? <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationStartDate">Start Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div className="twitter-typeahead">
                                        <input value={this.state.user.LicenseDate} onChange={this.handleChange} className="form-control identityEditableField " id="StartDate" type="date" />
                                    </div>
                                </div>
                            </div>
                        </div> : <div></div>}

                        {this.state.duration === 'multiple' ? <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationStartDate">End Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div className="twitter-typeahead">
                                        <input value={this.state.user.LicenseDate} onChange={this.handleChange} className="form-control identityEditableField " id="LicenseDate" type="date" disabled={this.state.edit} tabIndex="-1" />
                                    </div>
                                </div>
                            </div>
                        </div> : <div></div>}

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 padding-top-bottom-10">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblApproverName">Approver Name :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_approverName">Kishore Ithadi</label>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveReason">Reason/Comments :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-6 form-group">
                                    <div _ngcontent-fgg-1="" className="_divLeaveComments">
                                        <textarea _ngcontent-fgg-1="" className="form-control" id="_areaReason" maxlength="256" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="pull-right padding-right-20">
                            <Button _ngcontent-fgg-1="" className="btn btnSubmit" id="_btnSubmitLeave" onClick={this.handleSubmit}>
                                <i _ngcontent-fgg-1="" className="fa fa-save"></i> Submit
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}