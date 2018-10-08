import React from 'react';
import { MultiSelect } from './MultiSelect';
import './skillscontent.css';

export default class SkillsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, value: '', user: {} };
    }

    handleOptionSelect = (event) => { }

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
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleCancel = () => {
        this.setState({ user: Object.assign({}, this.state.tempObj) })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12  col-md-8" id="filterName">
                        <label className="cold-md-4">Filter Skills</label>
                        <div className="col-sm-12 col-md-6">
                            <MultiSelect />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-2" id="filterName">
                        <label>Primary Skill</label>
                        <input placeholder="Training" disabled={true} />
                    </div>
                </div>

                <button type="edit" className="btn btn-success pull-right margin-left-right-10 margin-bottom-20" id="btnEditPersonalDetails" onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }}><i className="fa fa-edit"></i>EDIT</button>
                <button type="save" className="btn btn-primary pull-right margin-left-right-10 font-bold display-none margin-bottom-20" id="btnSavePersonalDetails" onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-save"></i>SAVE</button>
                <button type="cancel" className="btn btn-success pull-right margin-left-right-10 display-none margin-bottom-20" data-target="#myModal" data-toggle="modal" id="btnPersonalDetailsCancel" onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}><i className="fa fa-ban"></i>CANCEL</button>

            </div>
        );
    }
}