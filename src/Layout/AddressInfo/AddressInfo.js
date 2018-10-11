import React from 'react';
import { Button } from 'react-bootstrap';

export default class AddressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, toggle: false };
    }

    handleAddressClick = () => {
        let add = document.getElementById('currentAddress');
        if (add.style.display == 'none')
            add.style.display = 'block';
        else
            add.style.display = 'none'
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
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleCancel = () => {
        this.setState({ user: Object.assign({}, this.state.tempObj), edit: true })
    }
    handleToggleChange = () => {
        this.setState({ toggle: true });
    }
    render() {
        const element = (
            <div class="col-sm-11" id="presentAddressDetails">
                <div class="panel panel-primary">
                    <div class="panel-heading clickable height-0 panel-blue-color" id="curAddressDiv" style={{ paddingTop: 8 + 'px' }}>
                        <h3 class="panel-title">
                            Present Address
                    </h3>
                        <span class="pull-right "><i class="glyphicon glyphicon-minus" style={{ fontSize: 0.8 + 'em' }}></i></span>
                    </div>
                    <div class="row padding-top-20" id="currentAddress" style={{ display: 'block' }}>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressLine1">Address Line1:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth">
                                <input class="form-control addressEditableField requiredAddressField " id="currentAddressLine1" maxlength="100" type="text" required="required" />

                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressLine2">Address Line2:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth">
                                <input class="form-control addressEditableField " id="currentAddressLine2" maxlength="100" type="text" />

                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressStreet">Street:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth">
                                <input class="form-control addressEditableField requiredAddressField " id="currentAddressStreet" maxlength="100" type="text" required="required" />

                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressCountry">Country:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth typeAheadEditableField">
                                <div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressState">State:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrState">
                                <div>
                                    <div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressCity">City:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrCity">
                                <div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 form-group windowWidth">
                            <div class="col-md-4 form-group labelWidth">
                                <label class="calibriFont14 padding-top-5" for="_lblCurrentAddressZipCode">Pincode:</label>
                            </div>
                            <div class="col-md-6 form-group textboxWidth">
                                <input class="form-control addressEditableField requiredAddressField" id="currentAddressZipCode" min="0" type="text" required="required" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
        return (
            <div>
                <div class="col-md-12 form-group windowWidth" style={{ marginTop: '1%' }}>
                    <div class="toggle btn btn-default off" data-toggle="toggle" style={{ width: 0 + 'px', height: 0 + 'px' }}>
                        <input checked="" data-onstyle="success" id="chkPermanentSameAsPresent" type="checkbox" onChange={this.handleToggleChange} />
                        <div class="toggle-group">
                            <label class="btn btn-success toggle-on">Yes</label>
                            <label class="btn btn-default active toggle-off">No</label>
                            <span class="toggle-handle btn btn-default"></span>
                        </div>
                    </div>

                    <label class="calibriFont14 padding-top-5" for="_lblPermanentAddressCountry">Present Address is same as Permanent Address</label>

                </div>

                <div className="col-xs-4 form-group">
                    <button className="btn btn-primary font-bold default-cursor" id="btnAddPermanentAddr" >
                        <i className="fa fa-plus"></i>Add Permanent Address
                    </button>
                </div>

                <div className="col-sm-11" id="presentAddressDetails">
                    <div className="panel panel-primary">
                        <div className="panel-heading clickable height-0 panel-blue-color panel-collapsed" id="curAddressDiv" onClick={this.handleAddressClick}>
                            <h3 className="panel-title">Present Address</h3>
                        </div>

                        <div className="row padding-top-20" id="currentAddress">
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Address Line1:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.currentAddressLine1} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressLine1" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Address Line2:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth">
                                    <input value={this.state.user.currentAddressLine2} onChange={this.handleChange} className="form-control addressEditableField ng-untouched ng-pristine" id="currentAddressLine2" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Street:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.currentAddressStreet} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressStreet" maxLength="100" type="select" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth select">
                                    <label className="calibriFont14 padding-top-5">Country:</label>
                                    {/* <input value={this.state.} onChange={this.handleChange} type="select" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-input value={this.state.} onChange={this.handleChange}" placeholder="Select a country" id="countrySearch2" autoComplete="off" spellCheck="false"  style={{position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent'}} /> */}
                                </div>
                                <div className="col-md-6 form-group textboxWidth" >
                                    <select value={this.state.user.currentAddressCountry} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' id='currentAddressCountry' disabled={this.state.edit}>
                                        <option value="">Select</option>
                                        <option value="INDIA">India</option>
                                        <option value="AMERICA">America</option>
                                        <option value="SWITZERLAND">Switzerland</option>
                                        <option value="PORTUGAL">Portugal</option>
                                        <option value="MEXICO">Mexico</option>
                                        <option value="AFGHANISTAN">Afghanistan</option>
                                    </select>
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

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">City:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrCity" disabled="disabled">
                                    <div>
                                        <input value={this.state.user.txtcurrentCity} onChange={this.handleChange} id="txtcurrentCity" type="text" className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' tabIndex="-1" disabled={this.state.edit} autoComplete="off" spellCheck="false" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Pincode:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.currentAddressZipCode} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressZipCode" min="0" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                {/* {this.state.toggle ? {element}:{<div></div>}} */}
                <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
            </div>
        );
    }
}