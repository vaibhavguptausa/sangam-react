import React, { Component } from 'react';

export class ProfessionalInfo extends Component{
    render(){
        return(
            <div className="row padding-top-50" id="professionalDetails">
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Date of Joining:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth">
                    <div className="inlineFlex">
                        
                        <label className="input-group-addon btn actionIcon display-none" id="DateOfJoinCalendarIcon">
                            <span className="glyphicon glyphicon-calendar"></span>
                        </label>
                        <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" >05/07/2018</label>
                    </div>

                </div>
            </div>
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Total Previous Experience:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth">
                    
                    

                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" ></label>
                </div>
            </div>
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Location:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" >Uppal</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Designation:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" >Intern</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Department:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" >Technology</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" >Grade:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" >G0</label>
                </div>
            </div>
            
            

        </div>
        )
    }
}