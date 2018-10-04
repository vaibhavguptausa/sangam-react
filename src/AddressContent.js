import React from 'react';

export default class AddressContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {} };
    }

    handleAddressClick = () => {
        let add = document.getElementById('currentAddress');

        if (add.style.display == 'none'){
            add.style.display = 'block';
        }
        else {
            add.style.display = 'none'
        }
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
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
    }

    handleCancel = () => {
        this.setState({ user: Object.assign({}, this.state.tempObj) })
    }

    render() {
        return (
            <div>
                <div className="col-md-12 form-group windowWidth" style={{ marginTop: '1%' + "!important", float: 'left' }}>
                    
                    <div className="toggle btn btn-default off" data-toggle="toggle" style={{ width: 57 + 'px', height: 34 + 'px' }} disabled="disabled">
                        <div className="toggle-group">
                            <span className="toggle-handle btn btn-default"></span>
                        </div>

                        <label className="calibriFont14 padding-top-5" >Present Address is same as Permanent Address</label>
                    </div>

                </div>

                <div className="col-xs-4 form-group">
                    <button className="btn btn-primary font-bold default-cursor" id="btnAddPermanentAddr" >
                        <i className="fa fa-plus"></i> 
                        <span>Add Permanent Address</span>
                    </button>
                </div>

                <div className="col-sm-11" id="presentAddressDetails">
                    <div className="panel panel-primary">
                        <div className="panel-heading clickable height-0 panel-blue-color panel-collapsed" id="curAddressDiv" style={{ paddingTop: 8 + 'px' }} onClick={this.handleAddressClick}>
                            <h3 className="panel-title">Present Address</h3>
                        </div>
                        
                        <div className="row padding-top-20" id="currentAddress" style={{ display: 'none' }}>
                            
                            <div className="col-md-6 form-group windowWidth">
                                
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5" >Address Line1:</label>
                                    <input className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressLine1" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />
                                {/* </div>
                                <div className="col-md-6 form-group textboxWidth" title=""> */}
                                </div>
                            </div>
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5" >Address Line2:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth">
                                    <input className="form-control addressEditableField ng-untouched ng-pristine" id="currentAddressLine2" maxLength="100" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />

                                </div>
                            </div>
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5" >Street:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressStreet" maxLength="100" type="select" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} >

                                    </input>

                                </div>
                            </div>
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth select">
                                    <label className="calibriFont14 padding-top-5" >Country:</label>
                                    {/* <input type="select" className="form-control twitter-typeahead underLineTextBox typeAheadStyle tt-input" placeholder="Select a country" id="countrySearch2" autocomplete="off" spellcheck="false"  style={{position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent'}} /> */}

                                </div>
                                <div className="col-md-6 form-group textboxWidth t" >
                                    <select className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' id='currentAddressCountry' disabled={this.state.edit}>
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
                                    <label className="calibriFont14 padding-top-5" >State:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrState" disabled="disabled">
                                    <div>
                                        <select className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' id='currentAddressState' disabled={this.state.edit}>
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
                            </div>
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5" >City:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth typeAheadEditableField" id="curAddrCity" disabled="disabled">
                                    <div>
                                        <input type="text" className='form-control addressEditableField requiredAddressField ng-untouched ng-pristine' tabIndex="-1" disabled={this.state.edit} autocomplete="off" spellcheck="false" />

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 form-group windowWidth">
                                <div className="col-md-4 form-group labelWidth">
                                    <label className="calibriFont14 padding-top-5" >Pincode:</label>
                                </div>
                                <div className="col-md-6 form-group textboxWidth" title="">
                                    <input className="form-control addressEditableField requiredAddressField ng-untouched ng-pristine" id="currentAddressZipCode" min="0" type="text" tabIndex="-1" disabled={this.state.edit} onChange={this.handleChange} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</button>
                    <button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</button>
                    <button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</button>
                </div>
            </div>
        );
    }
}