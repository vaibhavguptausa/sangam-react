import React from 'react';

export default class ContactContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, value: '', user: {} };
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
        const name = e.target.name;
        console.log(name);
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleCancel = () => {
        this.setState({ user: Object.assign({}, this.state.tempObj) });
    }

    render() {
        return (
            <div>
                <div>
                    <div>Contact Details:</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputName">Name:</label>
                            <input name="Name" value={this.state.user.Name} onChange={this.handleChange} type="text" className="form-control" id="inputName" placeholder="Name" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputAlternateEmail">Alternate Email:</label>
                            <input name="AlternateEmail" value={this.state.user.AlternateEmail} onChange={this.handleChange} type="text" className="form-control" id="inputAlternateEmail" placeholder="Alternate Email" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCompanyEmail">Company Email:</label>
                            <input name="CompanyEmail" value={this.state.user.CompanyEmail} onChange={this.handleChange} type="text" className="form-control" id="inputCompanyEmail" placeholder="Company Email" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputMobileNumber">Mobile Number:</label>
                            <input name="MobileNumber" value={this.state.user.MobileNumber} onChange={this.handleChange} type="text" className="form-control" id="inputMobileNumber" placeholder="Mobile Number" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputRelationship">Relationship:</label>
                            <input name="Relationship" value={this.state.user.Relationship} onChange={this.handleChange} type="text" className="form-control" id="inputRelationship" placeholder="Relationship" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputHomePhone">Home Phone:</label>
                            <input name="HomePhone" value={this.state.user.HomePhone} onChange={this.handleChange} type="text" className="form-control" id="inputHomePhone" placeholder="Home Phone" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputWorkPhone">Work Phone:</label>
                            <input name="WorkPhone" value={this.state.user.WorkPhone} onChange={this.handleChange} type="text" className="form-control" id="inputWorkPhone" placeholder="Work Phone" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail">Email:</label>
                            <input name="Email" value={this.state.user.Email} onChange={this.handleChange} type="text" className="form-control" id="inputEmail" placeholder="Email" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputFBLink">FB Link:</label>
                            <input name="FBLink" value={this.state.user.FBLink} onChange={this.handleChange} type="text" className="form-control" id="inputFBLink" placeholder="FB Link" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputTwitterLink">Twitter Link:</label>
                            <input name="TwitterLink" value={this.state.user.TwitterLink} onChange={this.handleChange} type="text" className="form-control" id="inputTwitterLink" placeholder="Twitter Link" disabled={this.state.edit} />
                        </div>
                    </div>
                </div>

                <div>
                    <div>Emergency Contact Details:</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputName">Name:</label>
                            <input name="Name" value={this.state.user.Name} onChange={this.handleChange} type="text" className="form-control" id="inputName" placeholder="Name" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputMobileNumber">Mobile Number:</label>
                            <input name="MobileNumber" value={this.state.user.MobileNumber} onChange={this.handleChange} type="text" className="form-control" id="inputMobileNumber" placeholder="Mobile Number" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputRelationship">Relationship:</label>
                            <input name="Relationship" value={this.state.user.Relationship} onChange={this.handleChange} type="text" className="form-control" id="inputRelationship" placeholder="Relationship" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputHomePhone">Home Phone:</label>
                            <input name="HomePhone" value={this.state.user.HomePhone} onChange={this.handleChange} type="text" className="form-control" id="inputHomePhone" placeholder="Home Phone" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputWorkPhone">Work Phone:</label>
                            <input name="WorkPhone" value={this.state.user.WorkPhone} onChange={this.handleChange} type="text" className="form-control" id="inputWorkPhone" placeholder="Work Phone" disabled={this.state.edit} />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail">Email:</label>
                            <input name="Email" value={this.state.user.Email} onChange={this.handleChange} type="text" className="form-control" id="inputEmail" placeholder="Email" disabled={this.state.edit} />
                        </div>
                    </div>

                    <button type="edit" className="btn btn-success pull-right margin-left-right-10 margin-bottom-20" id="btnEditPersonalDetails" onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }}><i className="fa fa-edit"></i>EDIT</button>
                    <button type="save" className="btn btn-primary pull-right margin-left-right-10 font-bold display-none margin-bottom-20" id="btnSavePersonalDetails" onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-save"></i>SAVE</button>
                    <button type="cancel" className="btn btn-success pull-right margin-left-right-10 display-none margin-bottom-20" data-target="#myModal" data-toggle="modal" id="btnPersonalDetailsCancel" onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-ban"></i>CANCEL</button>

                </div >
            </div>
        );
    }
} 