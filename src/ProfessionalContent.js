import React from 'react';

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
            <div>
                <form ref="form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputDateOfJoining">Date of Joining:</label>
                            <input name="DateOfJoining" value={this.state.user.DateOfJoining} onChange={this.handleChange} type="text" className="form-control" id="inputDateOfJoining" placeholder="Date of Joining" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputTotalPreviousExperience">Total Previous Experience:</label>
                            <input name="TotalPreviousExperience" value={this.state.user.TotalPreviousExperience} onChange={this.handleChange} type="text" className="form-control" id="inputTotalPreviousExperience" placeholder="Total Previous Experience" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputLocation">Location:</label>
                            <input name="Location" value={this.state.user.Location} onChange={this.handleChange} type="text" className="form-control" id="inputLocation" placeholder="Location" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputDesignation">Designation:</label>
                            <input name="Designation" value={this.state.user.Designation} onChange={this.handleChange} type="text" className="form-control" id="inputDesignation" placeholder="Designation" disabled={this.state.edit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputDepartment">Department:</label>
                            <input name="Department" value={this.state.user.Department} onChange={this.handleChange} type="text" className="form-control" id="inputDepartment" placeholder="Department" disabled={this.state.edit}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputGrade">Grade:</label>
                            <input name="Grade" value={this.state.user.Grade} onChange={this.handleChange} type="text" className="form-control" id="inputGrade" placeholder="Grade" disabled={this.state.edit}/>
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