import React from 'react';
import './personalcontent.css';

export default class Content extends React.Component {
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
                <form ref="form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputFirstName">First Name:</label>
                            <input name="FirstName" value={this.state.user.FirstName} onChange={this.handleChange} type="text" className="form-control" id="inputFirstName" placeholder="First Name" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputLastName">Middle Name:</label>
                            <input name="MiddleName" value={this.state.user.MiddleName} onChange={this.handleChange} type="text" className="form-control" id="inputMiddleName" placeholder="Middle Name" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputLastName">Last Name:</label>
                            <input name="LastName" value={this.state.user.LastName} onChange={this.handleChange} type="text" className="form-control" id="inputLastName" placeholder="Last Name" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputLegalName">Legal Name:</label>
                            <input name="LegalName" value={this.state.user.LegalName} onChange={this.handleChange} type="text" className="form-control" id="inputLegalName" placeholder="Legal Name" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputDisplayName">Display Name:</label>
                            <input name="DisplayName" value={this.state.user.DisplayName} onChange={this.handleChange} type="text" className="form-control" id="inputDisplayName" placeholder="Display Name" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputGender">Gender:</label>
                            <input name="Gender" value={this.state.user.Gender} onChange={this.handleChange} type="text" className="form-control" id="inputGender" placeholder="Gender" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputDateOfBirth">Date of Birth:</label>
                            <input name="DateOfBirth" value={this.state.user.DateOfBirth} onChange={this.handleChange} type="text" className="form-control" id="inputDateOfBirth" placeholder="DOB" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputMaritalStatus">Marital Status</label>
                            <select name="MaritalStatus" id="inputMaritalStatus" className="form-control" value={this.state.user.MaritalStatus} onChange={this.handleChange} disabled={this.state.edit}>
                                <option value="">Select...</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputBloodGroup">Blood Group:</label>
                            <select name="BloodGroup" id="dropdownBloodGroup" className="form-control dropdownStyle ng-pristine ng-touched" value={this.state.user.BloodGroup} onChange={this.handleChange} disabled={this.state.edit}>
                                <option value="">Select...</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputReligion">Religion:</label>
                            <select name="Religion" id="dropdownReligion" className="form-control dropdownStyle ng-pristine ng-touched" value={this.state.user.Religion} onChange={this.handleChange} disabled={this.state.edit}>
                                <option value="">Select...</option>
                                <option value="HINDUISM">Hinduism</option>
                                <option value="ISLAM">Islam</option>
                                <option value="CHRISTIANITY">Christianity</option>
                                <option value="JAINISM">Jainism</option>
                                <option value="BUDDHISM">Buddhism</option>
                                <option value="SIKHISM">Sikhism</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputNationality">Nationality:</label>
                            <select name="Nationality" id="dropdownNationality" className="form-control dropdownStyle ng-pristine ng-touched" value={this.state.user.Nationality} onChange={this.handleChange} disabled={this.state.edit}>
                                <option value="">Select...</option>
                                <option value="INDIAN">Indian</option>
                                <option value="AMERICAN">American</option>
                                <option value="PORTUGUESE">Portuguese</option>
                                <option value="SWISS">Swiss</option>
                                <option value="MEXICAN">Mexican</option>
                                <option value="AFGHAN">Afghan</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputHeight">Height(in cm):</label>
                            <input name="Height" value={this.state.user.Height} onChange={this.handleChange} type="text" className="form-control" id="inputHeight" placeholder="Height" disabled={this.state.edit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputWeight">Weight(in kg):</label>
                            <input name="Weight" value={this.state.user.Weight} onChange={this.handleChange} type="text" className="form-control" id="inputWeight" placeholder="Weight" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmployeeType">Employee Type:</label>
                            <input name="EmployeeType" value={this.state.user.EmployeeType} onChange={this.handleChange} type="text" className="form-control" id="inputEmployeeType" placeholder="Employee Type" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmployeeID">Employee ID:</label>
                            <input name="EmployeeID" value={this.state.user.EmployeeID} onChange={this.handleChange} type="text" className="form-control" id="inputEmployeeID" placeholder="Employee ID" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <button type="edit" className="btn btn-primary" onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }}>EDIT</button>
                    <button type="save" className="btn btn-primary" onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>SAVE</button>
                    <button type="cancel" className="btn btn-primary" onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>CANCEL</button>
                </form>
            </div >
        );
    }
} 