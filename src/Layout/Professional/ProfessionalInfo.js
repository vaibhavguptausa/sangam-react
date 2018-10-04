import React, { Component } from 'react';

export class ProfessionalInfo extends Component{
    render(){
        return(
            <div className="row padding-top-50" id="professionalDetails">
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblDateOfJoining">Date of Joining:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth">
                    <div className="inlineFlex">
                        
                        <label className="input-group-addon btn actionIcon display-none" for="dateOfJoiningDate" id="DateOfJoinCalendarIcon">
                            <span className="glyphicon glyphicon-calendar"></span>
                        </label>
                        <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblDateOfJoiningValue">05/07/2018</label>
                    </div>

                </div>
            </div>
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblTotalExperience">Total Previous Experience:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth">
                    
                    

                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblTotalExperienceValue"></label>
                </div>
            </div>
            
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblLocation">Location:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblTotalExperienceValue">Uppal</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblDesignation">Designation:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblDesignationValue">Intern</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblDepartment">Department:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblDepartmentValue">Technology</label>
                </div>
            </div>
            <div className="col-md-6 form-group windowWidth">
                <div className="col-md-4 form-group labelWidth">
                    <label className="calibriFont14 padding-top-5" for="_lblGrade">Grade:</label>
                </div>
                <div className="col-md-6 form-group textboxWidth proftypeAheadEditableField" disabled="">
                    
                    <label className="calibriFont14 padding-top-5 form-control font-weight-400  readonly" for="_lblGradeValue">G0</label>
                </div>
            </div>
            
            

        </div>
        )
    }
}