import React from 'react';
import { Button } from 'react-bootstrap';
import './ApplyEventRequest.css';

export default class ApplyEventRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    handleChange = (e) => {
        const name = e.target.id;
        console.log(name);
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    render() {
        return (
            <div>
                <div id="EventDetails">
                    <div className="row container-fluid">
                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveType">Event Type :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <div className="twitter-typeahead" >
                                        <input value={this.state.user.eventType} onChange={this.handleChange} className="form-control" id="EventType" maxLength="100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationStartDate">Event Start Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div className="twitter-typeahead">
                                            <input value={this.state.user.EventStartDate} onChange={this.handleChange} className="form-control" id="EventStartDate" type="date" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveReason">Comments :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-6 form-group">
                                    <div _ngcontent-fgg-1="" className="_divLeaveComments">
                                        <textarea _ngcontent-fgg-1="" className="form-control" id="_areaReason" maxlength="256" rows="5" style={{ resize: 'none' }}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="pull-right padding-right-20">
                            <button _ngcontent-fgg-1="" className="btn btnSubmit" id="_btnSubmitLeave">
                                <i _ngcontent-fgg-1="" className="fa fa-save"></i> Request
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}