import React from 'react';
import { Button } from 'react-bootstrap';

export default class AddressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, toggle: true };
    }

    handleAddressClick = () => {
        let add = document.getElementById('currentAddress');
        if (add.style.display === 'none')
            add.style.display = 'block';
        else
            add.style.display = 'none'
    }
    handlePermanentAddressClick = () => {
        let add = document.getElementById('PermanentcurrentAddress');
        if (add.style.display === 'none')
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
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        return (
            <div>
                <div className="col-md-12 form-group windowWidth" style={{ marginTop: '1%' }}>
                    <label className="bs-switch">
                        <input type="checkbox" onClick={this.handleToggleChange} disabled={this.state.edit} />
                        <span className="slider round"></span>
                    </label>
                    <label className="calibriFont14 padding-top-5" for="_lblPermanentAddressCountry">Present Address is same as Permanent Address</label>
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
                                    <input value={this.state.user.currentAddressLine1}  className="form-control addressEditableField requiredAddressField" id="currentAddressLine1" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Address Line2:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth">
                                    <input value={this.state.user.currentAddressLine2}  className="form-control addressEditableField" id="currentAddressLine2" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Street:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.currentAddressStreet}  className="form-control addressEditableField requiredAddressField" id="currentAddressStreet" maxLength="100" type="select" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth select">
                                    <label className="calibriFont14 padding-top-5">Country:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" >
                                    <select value={this.state.user.currentAddressCountry} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField' id='currentAddressCountry' disabled={this.state.edit}>
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
                                    <select value={this.state.user.currentAddressState} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField' id='currentAddressState' disabled={this.state.edit}>
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
                                        <input value={this.state.user.txtcurrentCity} onChange={this.handleChange} id="txtcurrentCity" type="text" className='form-control addressEditableField requiredAddressField' tabIndex="-1" disabled={this.state.edit} autoComplete="off" spellCheck="false" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Pincode:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.currentAddressZipCode} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField" id="currentAddressZipCode" min="0" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {this.state.toggle ? <div className="col-sm-11" id="PermanentAddressDetails">
                    <div className="panel panel-primary">
                        <div className="panel-heading clickable height-0 panel-blue-color panel-collapsed" id="PermanentcurAddressDiv" onClick={this.handlePermanentAddressClick}>
                            <h3 className="panel-title">Permanent Address</h3>
                        </div>

                        <div className="row padding-top-20" id="PermanentcurrentAddress">
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Address Line1:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.PermanentcurrentAddressLine1} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField" id="PermanentcurrentAddressLine1" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Address Line2:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth">
                                    <input value={this.state.user.PermanentcurrentAddressLine2} onChange={this.handleChange} className="form-control addressEditableField" id="PermanentcurrentAddressLine2" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Street:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.PermanentcurrentAddressStreet} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField" id="PermanentcurrentAddressStreet" maxLength="100" type="select" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth select">
                                    <label className="calibriFont14 padding-top-5">Country:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" >
                                    <select value={this.state.user.PermanentcurrentAddressCountry} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField' id='PermanentcurrentAddressCountry' disabled={this.state.edit}>
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
                                    <select value={this.state.user.PermanentcurrentAddressState} onChange={this.handleChange} className='form-control addressEditableField requiredAddressField' id='PermanentcurrentAddressState' disabled={this.state.edit}>
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
                                        <input value={this.state.user.PermanenttxtcurrentCity} onChange={this.handleChange} id="PermanenttxtcurrentCity" type="text" className='form-control addressEditableField requiredAddressField' tabIndex="-1" disabled={this.state.edit} autoComplete="off" spellCheck="false" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5">Pincode:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input value={this.state.user.PermanentcurrentAddressZipCode} onChange={this.handleChange} className="form-control addressEditableField requiredAddressField" id="PermanentcurrentAddressZipCode" min="0" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div> : <div></div>}
                <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
            </div>
        );
    }
}