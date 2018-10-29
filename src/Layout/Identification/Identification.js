import React from 'react';
import { Button } from 'react-bootstrap';
import {IdentityInformation,SalaryAccountDetails} from './Identification.json';
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
    createIdentityInformation=()=>{
        let children=[];
        for(var i=1;i<=Object.keys(IdentityInformation).length;i++)
        {
            let data=IdentityInformation[`Field${i}`];
            if(data==="Passport Expiration" || data==="Driving License Expiration")
            children.push( <div className="col-md-6 form-group windowWidth">
            <div className="col-md-4 form-group labelWidth">
                <label className="calibriFont14 padding-top-5">{data}</label>
            </div>
            <div className="col-md-6 form-group textboxWidth">
                <div className="inlineFlex">
                    <input value={this.state.user[data]} onChange={this.handleChange} className="form-control identityEditableField " id={data} type="date" disabled={this.state.edit} tabIndex="-1" />
                </div>
            </div>
        </div>)
        else
        {
            children.push(<div className="col-md-6 form-group windowWidth">
            <div className="col-md-4 form-group labelWidth">
                <label className="calibriFont14 padding-top-5">{data}</label>
            </div>
            <div className="col-md-6 form-group textboxWidth">
                <input value={this.state.user[data]} onChange={this.handleChange} className="form-control identityEditableField " id={data} maxLength="20" type="text" tabIndex="-1" disabled={this.state.edit} />
            </div>
        </div>)
        }
        }
        return children;
    }
    createSalaryAccountDetails=()=>{
        let children=[];
        for(var i=1;i<=Object.keys(SalaryAccountDetails).length;i++)
        {
            let data=SalaryAccountDetails[`Field${i}`];
            children.push(<div className="col-md-6 form-group windowWidth">
            <div className="col-md-4 form-group labelWidth">
                <label className="calibriFont14 padding-top-5">{data}</label>
            </div>
            <div className="col-md-6 form-group textboxWidth " >
                <input value={this.state.user[data]} onChange={this.handleChange} className="form-control identityEditableField requiredAccountField " id={data} maxLength="200" type="text" required="required" disabled={this.state.edit} />
            </div>
        </div>)
        }
        return children;
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

                                    {this.createIdentityInformation()}

                                </div>
                            </div> : <div></div>}
                    </div>
                </div>

                <div className="col-sm-11 margin-top-20">
                    <div className="panel panel-primary" >
                        <div className="panel-heading panel-blue-color clickable height-0" id="accountInfoDiv" onClick={this.handleSalaryClick}>
                            <h3 className="panel-title" >Salary Account Details</h3>
                            <span className="pull-right "><i className="glyphicon glyphicon-minus"></i></span>
                        </div>
                        {this.state.salaryClick ?
                            <div className="row padding-top-20" id="accountInformation">
                                <div className="col-md-12">
                                    {this.createSalaryAccountDetails()}
                                   
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