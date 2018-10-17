import React from 'react';
import { Button } from 'react-bootstrap';

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

    render() {
        return (
            <div>
                <div id="contactDetails">
                    <div className="row container-fluid">
                        <div className="col-md-12 form-group">
                            <h3 className="contactDetailHeading">Contact Details:</h3>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" for="_lblPersonalEmail">Personal Email:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.personalEmail} className="form-control contactEditableField requiredContactField " id="personalEmail" maxLength="50" title="" type="email" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblAlternateEmail">Alternate Email:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.contactAlternateEmail} className="form-control contactEditableField " id="contactAlternateEmail" maxLength="50" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblCompanyEmail">Company Email:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.companyEmail} className="form-control clientAdminContactEditableField requiredContactField ng-untouched ng-pristine" id="companyEmail" disabled={this.state.edit} type="email" tabIndex="-1" />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblMobileNumber">Mobile Number:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.contactMobileNumber} className="form-control contactEditableField requiredContactField " id="contactMobileNumber" title="" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblAlternateMobileNumber">Alternate Number:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.alternateMobileNumber} className="form-control contactEditableField " id="alternateMobileNumber" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblHomePhone">Home Phone:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.homePhone} className="form-control contactEditableField " id="homePhone" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblWorkPhone">Work Phone:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.workPhone} className="form-control contactEditableField " id="workPhone" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblLinkedInLink">Linked In Link:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.linkedInLink} className="form-control contactEditableField " id="linkedInLink" maxLength="50" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFBLink">FB Link:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.FBLink} className="form-control contactEditableField " maxLength="50" id="FBLink" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblTwitterLink">Twitter Link:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.twitterLink} className="form-control contactEditableField " maxLength="50" id="twitterLink" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>
                    </div>

                    <div className="row container-fluid" id="emergencyContactDetails">
                        <div className="col-md-12 form-group">
                            <h3 className="emergencyContactDetailsHeading">Emergency Contact Details:</h3>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblContactName">Name:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyContactName} className="form-control contactEditableField requiredContactField " id="emergencyContactName" maxLength="25" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFirstName">Mobile Number:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyNumber} className="form-control contactEditableField requiredContactField " id="emergencyNumber" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFirstName">Relationship:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyHomePhone} className="form-control contactEditableField " id="emergencyHomePhone" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFirstName">Home Phone:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyHomePhone} className="form-control contactEditableField " id="emergencyHomePhone" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFirstName">Work Phone:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyWorkPhone} className="form-control contactEditableField " id="emergencyWorkPhone" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                        <div className="col-md-6 form-group windowWidth">
                            <div className="col-md-6 form-group contactInfolabelWidth">
                                <label className="calibriFont14 padding-top-5" id="_lblFirstName">Email:</label>
                            </div>
                            <div className="col-md-6 form-group contactInfotextboxWidth">
                                <input onChange={this.handleChange} value={this.state.user.emergencyContactEmail} className="form-control contactEditableField " id="emergencyContactEmail" maxLength="50" type="text" tabIndex="-1" disabled={this.state.edit} />
                            </div>
                        </div>

                    </div>

                    <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
                    <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
                    <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
                </div>
            </div>
        )
    }
}