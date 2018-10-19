import React from 'react';
import { Button } from 'react-bootstrap';

export default class Identification extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, identityClick: false, salaryClick: false };
    }

    handleEdit = () => {
        this.setState({ edit: false });
        this.setState({ tempObj: this.state.user });
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
        this.setState({ user: Object.assign({}, this.state.tempObj), edit: true });
    }

    handleIdentityClick = () => {
        this.setState({ identityClick: !this.state.identityClick });
    }

    handleSalaryClick = () => {
        this.setState({ salaryClick: !this.state.salaryClick });
    }

    render() {
        return (
            <div>
                <div className="col-sm-11 margin-top-20">
                    <div className="panel panel-primary">
                        <div className="panel-heading panel-blue-color clickable height-0" id="identityInfoDiv" onClick={this.handleIdentityClick}>
                            <h3 className="panel-title">Identity Information</h3>
                            <span className="pull-right "><i className="glyphicon glyphicon-minus"></i></span>
                        </div>
                        {this.state.identityClick ?
                            <div className="row padding-top-20" id="identityInformation">
                                <div className="col-md-12">

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">UID Number:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtUIDNumber} onChange={this.handleChange} className="form-control identityEditableField " id="txtUIDNumber" maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">PAN Card Number:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtPanCardNumber} onChange={this.handleChange} className="form-control identityEditableField " id="txtPanCardNumber" maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Passport Number:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtPassportNumber} onChange={this.handleChange} className="form-control identityEditableField " id="txtPassportNumber" maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Passport Expiration:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <div className="inlineFlex">
                                                <input value={this.state.user.PassportDate} onChange={this.handleChange} className="form-control identityEditableField " id="PassportDate" type="date" disabled={this.state.edit} tabIndex="-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Driving License Number:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtLicenceNumber} onChange={this.handleChange} className="form-control identityEditableField " id="txtLicenceNumber" maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Driving License Expiration:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <div className="inlineFlex">
                                                <input value={this.state.user.LicenseDate} onChange={this.handleChange} className="form-control identityEditableField " id="LicenseDate" type="date" disabled={this.state.edit} tabIndex="-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5" >Voter Id:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtVoterId} onChange={this.handleChange} className="form-control identityEditableField " id="txtVoterId" maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Comments/Notes:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtCommentsNotes} onChange={this.handleChange} className="form-control identityEditableField " id="txtCommentsNotes" maxLength="500" type="text" tabIndex="-1" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                </div>
                            </div> : <div></div>}
                    </div>
                </div>

                <div className="col-sm-11 margin-top-20">
                    <div className="panel panel-primary" onClick={this.handleSalaryClick}>
                        <div className="panel-heading panel-blue-color clickable height-0" id="accountInfoDiv">
                            <h3 className="panel-title" >Salary Account Details</h3>
                            <span className="pull-right "><i className="glyphicon glyphicon-minus"></i></span>
                        </div>
                        {this.state.salaryClick ?
                            <div className="row padding-top-20" id="accountInformation">
                                <div className="col-md-12">

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Bank Name:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth " data-hint="Bank name is required">
                                            <input value={this.state.user._txtBankName} onChange={this.handleChange} className="form-control identityEditableField requiredAccountField " id="_txtBankName" maxLength="200" type="text" required="required" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Account Number:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth has-error hint--top hint--rounded hint--bounce hint--always" data-hint="Account Number is required">
                                            <input value={this.state.user._txtAccountNumber} onChange={this.handleChange} className="form-control identityEditableField requiredAccountField " id="_txtAccountNumber" maxLength="200" type="text" required="required" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">IFSC Code:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth has-error hint--top hint--rounded hint--bounce hint--always" data-hint="IFSC Code is required">
                                            <input value={this.state.user._txtIfscCode} onChange={this.handleChange} className="form-control identityEditableField requiredAccountField " id="_txtIfscCode" maxLength="200" type="text" required="required" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5">Bank Branch:</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtBankBranch} onChange={this.handleChange} className="form-control identityEditableField " id="txtBankBranch" maxLength="200" type="text" disabled={this.state.edit} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group windowWidth">
                                        <div className="col-md-4 form-group labelWidth">
                                            <label className="calibriFont14 padding-top-5" >Bank Address</label>
                                        </div>
                                        <div className="col-md-6 form-group textboxWidth">
                                            <input value={this.state.user.txtBankAddress} onChange={this.handleChange} className="form-control identityEditableField " id="txtBankAddress" type="text" disabled={this.state.edit} />
                                        </div>
                                    </div>
                                </div>
                            </div> : <div></div>}
                    </div>
                </div>

                <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
            </div>
        )
    }
}