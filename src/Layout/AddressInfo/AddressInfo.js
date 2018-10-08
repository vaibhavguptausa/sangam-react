import React from 'react';
import { Button } from 'react-bootstrap';

export default class AddressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {} };
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

    render() {
        return (
            <div>
                <div className="col-md-12 form-group windowWidth">
                    <div className="toggle btn btn-default off" data-toggle="toggle" disabled="disabled">
                        {/* <input value={this.state.} onChange={this.handleChange} checked="" data-onstyle="success" id="chkPermanentSameAsPresent" type="checkbox" disabled="" /> */}
                        <div className="toggle-group">
                            {/* <label className="btn btn-success toggle-on">Yes</label>
            <label className="btn btn-default active toggle-off">No</label> */}
                            <span className="toggle-handle btn btn-default"></span>
                        </div>
                        <label className="calibriFont14 padding-top-5" >Present Address is same as Permanent Address</label>
                    </div>
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

                    <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                    <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                    <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
                </div>
            </div>
        );
    }
}