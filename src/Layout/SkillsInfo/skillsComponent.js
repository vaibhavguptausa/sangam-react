import React from 'react';

export class SkillsComponent extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return(
        <div class="col-xs-11 col-sm-11 " style={{display: 'block'}} id='NewComponent'>
           <div class="panel panel-primary">
                <div class="panel-heading clickable height-0" style="padding-top:8px;" id="Skills10">
                    <h3 class="panel-title" style="float:left">
                        {this.props.title}
                            </h3>

                    <span class="pull-right" style="margin-top:-3px" id="click10"><i class="glyphicon glyphicon-minus" style="font-size:0.8em;"></i></span>
                </div>
                <div class="col-xs-11 col-sm-11  padding-top-bottom-20" style="display: block;" id="EmployeeSkills10">
                   <div>
                        <table align="center" cellspacing="0">
                            <thead>
                                <tr id="skillHeader">
                                    <th class="text-center form-group col-sm-3 padding-left-right-40">
                                        <label class="text-center calibriFont14 padding-top-5" for="_lblSkill">Skill</label>
                                    </th>
                                    <th class="text-center form-group col-sm-3  padding-left-right-40">
                                        <label class="calibriFont14 padding-top-5" for="_lblExpertLevel">Expert Level</label>
                                    </th>
                                    <th class="text-center form-group col-sm-3  padding-left-right-40">
                                        <label class="calibriFont14 padding-top-5" for="_lblNumOfYears">Number Of Years</label>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                               <tr>
                                    <td data-label="Skill" disabled="" id="skilldrpdown6849">
                                        <div class="col-sm-12" disabled="" id="skilldrpdown6849">
                                           
                                                </div>
                                            </td>
                                            <td data-label="Expert Level" disabled="" id="proficiencydrpdown">
                                                <div class="proficiencyEditableField col-sm-12" disabled="">
                                                  
                                                        </div>
                                            </td>
                                                    <td data-label="Number of Years" id="numofyears">
                                                        <div>
                                                            <input class="form-control proficiencyEditableField proficiencyRequiredField col-sm-8 ng-untouched ng-pristine ng-valid" min="0" readonly="" tabindex="-1" type="number" id="empSkillNumberofYears6849" />
                                                </div>
                                            </td>

                                                       
                                           
                                        </tr>


                                    </tbody>
                                </table>
                                        </div>
                                       
                        </div>
                    </div>
                </div>
        )
                            }
                        
}