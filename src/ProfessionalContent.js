import React from 'react';
import './professionalcontent.css';

export default class ProfessionalContent extends React.Component {
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
            <div className="form">
                <div className="col-sm-11" id="professionalInformationDetails">
                    <div className="panel panel-primary">
                        <div className="panel-heading clickable height-0 panel-blue-color panel-collapsed" id="curAddressDiv" style={{ paddingTop: 8 + 'px' }} onClick={this.handleAddressClick}>
                            <h3 className="panel-title">Professional Information</h3>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputDateOfJoining">Date of Joining:</label>
                                <input name="DateOfJoining" value={this.state.user.DateOfJoining} onChange={this.handleChange} type="text" className="form-control" id="inputDateOfJoining" placeholder="Date of Joining" disabled={this.state.edit} />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputTotalPreviousExperience">Total Previous Experience:</label>
                                <input name="TotalPreviousExperience" value={this.state.user.TotalPreviousExperience} onChange={this.handleChange} type="text" className="form-control" id="inputTotalPreviousExperience" placeholder="Total Previous Experience" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputLocation">Location:</label>
                                <input name="Location" value={this.state.user.Location} onChange={this.handleChange} type="text" className="form-control" id="inputLocation" placeholder="Location" disabled={this.state.edit} />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputDesignation">Designation:</label>
                                <input name="Designation" value={this.state.user.Designation} onChange={this.handleChange} type="text" className="form-control" id="inputDesignation" placeholder="Designation" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputDepartment">Department:</label>
                                <input name="Department" value={this.state.user.Department} onChange={this.handleChange} type="text" className="form-control" id="inputDepartment" placeholder="Department" disabled={this.state.edit} />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputGrade">Grade:</label>
                                <input name="Grade" value={this.state.user.Grade} onChange={this.handleChange} type="text" className="form-control" id="inputGrade" placeholder="Grade" disabled={this.state.edit} />
                            </div>
                        </div>
                    </div>
                </div>

                <button type="edit" className="btn btn-success pull-right margin-left-right-10 margin-bottom-20" id="btnEditPersonalDetails" onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }}><i className="fa fa-edit"></i>EDIT</button>
                <button type="save" className="btn btn-primary pull-right margin-left-right-10 font-bold display-none margin-bottom-20" id="btnSavePersonalDetails" onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-save"></i>SAVE</button>
                <button type="cancel" className="btn btn-success pull-right margin-left-right-10 display-none margin-bottom-20" data-target="#myModal" data-toggle="modal" id="btnPersonalDetailsCancel" onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-ban"></i>CANCEL</button>

            </div >

        );
    }
}