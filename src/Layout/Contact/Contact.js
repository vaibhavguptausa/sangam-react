import React from 'react';
import { Button } from 'react-bootstrap';
import {ContactDetails ,EmergencyContactDetails } from './Contact.json';
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
    createContactDetails=()=>{
        let children=[];
        for(var i=1;i<=Object.keys(ContactDetails).length;i++)
        {
           
            children.push( <div className="col-md-6 form-group windowWidth">
            <div className="col-md-6 form-group contactInfolabelWidth">
                <label className="calibriFont14 padding-top-5" >{ContactDetails[`Field${i}`]}</label>
            </div>
            <div className="col-md-6 form-group contactInfotextboxWidth">
                <input onChange={this.handleChange} value={this.state.user[ContactDetails[`Field${i}`]]} className="form-control contactEditableField requiredContactField " id={ContactDetails[`Field${i}`]} maxLength="50" title="" type="email" tabIndex="-1" disabled={this.state.edit} />
            </div>
        </div>)
        }
        return children ;
    }
    createEmergencyContactDetails=()=>{
        let children=[];
      
        for(var i=1;i<=Object.keys(EmergencyContactDetails).length;i++)
        {
            let data= ContactDetails[`Field${i}`];
            children.push(<div className="col-md-6 form-group windowWidth">
            <div className="col-md-6 form-group contactInfolabelWidth">
                <label className="calibriFont14 padding-top-5" >{data}</label>
            </div>
            <div className="col-md-6 form-group contactInfotextboxWidth">
                <input onChange={this.handleChange} value={this.state.user[`Emergency${data}`]} className="form-control contactEditableField requiredContactField " id={`Emergency${data}`} maxLength="25" type="text" tabIndex="-1" disabled={this.state.edit} />
            </div>
        </div>)
        }
        return children;
    }
    render() {
        return (
            <div>
                <div id="contactDetails">
                    <div className="row container-fluid">
                        <div className="col-md-12 form-group">
                            <h3 className="contactDetailHeading"><label>Contact Details:</label></h3>
                        </div>
                        {this.createContactDetails()}
                        
                    </div>

                    <div className="row container-fluid" id="emergencyContactDetails">
                        <div className="col-md-12 form-group">
                            <h3 className="emergencyContactDetailsHeading"><label>Emergency Contact Details:</label></h3>
                        </div>

                          {this.createEmergencyContactDetails()}

                    </div>

                    <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                    <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                    <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
                </div>
            </div>
        )
    }
}