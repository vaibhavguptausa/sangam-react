import React from 'react';
import { Button } from 'react-bootstrap';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {} };
    }

    handleEdit = () => {
        this.setState({ edit: false });
        this.setState({ tempObj: this.state.user })
    }

    handleSave = () => {
        this.setState({ edit: true });
        console.log(this.state, 'state');
    }

    handleChange = (e) => {
        const name = e.target.id;
        console.log(name);
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleCancel = () => {
        this.setState({ user: Object.assign({}, this.state.tempObj), edit: true })
    }

    render() {
        return (
            <div>
                <div id="contactDetails">
                    <div className="row container-fluid">
                        <div className="col-md-12 form-group">
                            <h3 className="contactDetailHeading">Available TimeOff Balance : 0.87</h3>
                        </div>

                        <div _ngcontent-fgg-1="" className="col-md-12">
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveType">TimeOff Type :</label>
                            </div>
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <span className="twitter-typeahead" style={{ position: 'relative', display: 'inline-block' }}>
                                    <input type="text" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-hint" tabindex="-1" readonly="" autocomplete="off" spellcheck="false" style={{ position: 'absolute', top: '0px', left: '0px', borderColor: 'transparent', boxShadow: 'none', opacity: '1', background: 'none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)' }} dir="ltr" />
                                    {/* <input type="text" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-input" placeholder="Select TimeOff Type" id="TypeAheadLeaveTypes" tabindex="0" autocomplete="off" spellcheck="false" dir="auto" style={{ position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent' }} /> */}
                                    <pre aria-hidden="true" style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontFamily: 'calibri', fontSize: '14px', fontStyle: 'normal', fontVariant: 'normal', fontWeight: '500', wordSpacing: '0px', letterSpacing: '0px', textIndent: '0px', textRendering: 'auto', textTransform: 'none' }}></pre>
                                    <div className="tt-menu" style={{ position: 'absolute', top: '100%', left: '0px', zIndex: '100', display: 'none' }}>
                                        <div className="tt-dataset tt-dataset-1"></div>
                                    </div>
                                    <select value={this.state.user.currentAddressState} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' id='currentAddressState' >
                                        <option value="SICK">Sick</option>
                                        <option value="CASUAL">Casual</option>
                                        <option value="OPTIONAL">Optional</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-4 form-group labelWidth">
                                <label className="calibriFont14 padding-top-5">State:</label>
                            </div>
                            <div className="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrState" disabled="disabled">
                                <select value={this.state.user.currentAddressState} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' id='currentAddressState' disabled={this.state.edit}>
                                    <option value="">Select</option>
                                    <option value="UP">UP</option>
                                    <option value="TELANGANA">Telangana</option>
                                    <option value="MP">MP</option>
                                    <option value="BIHAR">Bihar</option>
                                    <option value="PUNJAB">Punjab</option>
                                    <option value="RAJASTHAN">Rajasthan</option>
                                </select>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="col-md-12">
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveType">TimeOff Duration :</label>
                            </div>
                            <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                <div>
                                    <span className="twitter-typeahead" style={{ position: 'relative', display: 'inline-block' }}>
                                        <input type="text" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-hint" tabindex="-1" readonly="" autocomplete="off" spellcheck="false" style={{ position: 'absolute', top: '0px', left: '0px', borderColor: 'transparent', boxShadow: 'none', opacity: '1', background: 'none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)' }} dir="ltr" />
                                        <input type="text" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-input" placeholder="Select TimeOff Type" id="TypeAheadLeaveTypes" tabindex="0" autocomplete="off" spellcheck="false" dir="auto" style={{ position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent' }} />
                                        <pre aria-hidden="true" style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontFamily: 'calibri', fontSize: '14px', fontStyle: 'normal', fontVariant: 'normal', fontWeight: '500', wordSpacing: '0px', letterSpacing: '0px', textIndent: '0px', textRendering: 'auto', textTransform: 'none' }}></pre>
                                        <div className="tt-menu" style={{ position: 'absolute', top: '100%', left: '0px', zIndex: '100', display: 'none' }}>
                                            <div className="tt-dataset tt-dataset-1"></div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 ">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationStartDate">Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div _ngcontent-fgg-1="" className="controls">
                                        <div _ngcontent-fgg-1="" className="input-group">
                                            <input _ngcontent-fgg-1="" className="date-picker form-control underLineTextBox" id="fromdatepicker" type="text" />
                                            <label _ngcontent-fgg-1="" className="input-group-addon btn" for="fromdatepicker" id="calendarIconFromDate">
                                                <span _ngcontent-fgg-1="" className="glyphicon glyphicon-calendar"></span>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row" id="toDate" style={{ display: 'none' }}>
                            <div _ngcontent-fgg-1="" className="col-md-12 padding-top-bottom-10">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblLeaveDurationEndDate">End Date :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 control-group">
                                    <div _ngcontent-fgg-1="" className="controls">
                                        <div _ngcontent-fgg-1="" className="input-group">
                                            <input _ngcontent-fgg-1="" className="date-picker form-control underLineTextBox" id="todatepicker" type="text" />
                                            <label _ngcontent-fgg-1="" className="input-group-addon btn" for="todatepicker" id="calendarIconEndDate">
                                                <span _ngcontent-fgg-1="" className="glyphicon glyphicon-calendar"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="row">
                            <div _ngcontent-fgg-1="" className="col-md-12 padding-top-bottom-10">
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group">
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lblApproverName">Approver Name :</label>
                                </div>
                                <div _ngcontent-fgg-1="" className="col-md-4 form-group" style={{ textAlign: 'left !Important' }}>
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_approverName" style={{ color: 'rgba(64, 126, 181, 0.99)' }}>Kishore Ithadi</label>
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
                                        <textarea _ngcontent-fgg-1="" className="form-control" id="_areaReason" maxlength="256" rows="5" style={{ resize: 'none' }}></textarea>

                                    </div>
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lbltextArea">Characters Left :&nbsp;</label>
                                    <label _ngcontent-fgg-1="" className="fontSize" id="_lbltextAreaSize">256</label>
                                </div>
                            </div>
                        </div>

                        <div _ngcontent-fgg-1="" className="pull-right padding-right-20">
                            <button _ngcontent-fgg-1="" className="btn btnSubmit" id="_btnSubmitLeave">
                                <i _ngcontent-fgg-1="" className="fa fa-save"></i> Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}