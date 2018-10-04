import React from 'react'
export class SkillsInfo extends React.Component {
    render() {
        return (
            <div>
                <div class="row" style={{padding:10+'px'}}>

                    <div class="col-sm-12  col-md-2 padding-top-10" id="filterName">
                        <label>Filter Skills</label>
                        <div class="col-sm-12 col-md-2">
                        <select class="mdb-select md-form colorful-select dropdown-primary " data-style="btn-default" name="primarySkill" disabled="">
                            <option value=".Net">.Net</option>
                            <option value="Admin">Admin</option>
                            <option value="Android">Android</option>
                            <option value="BA">BA</option>
                            <option value="BD">BD</option>
                            <option value="BI">BI</option>
                            <option value="Big Data">Big Data</option>
                            <option value="Coldfusion">Coldfusion</option>
                            <option value="Data QA">Data QA</option>
                            <option value="Data-Science">Data-Science</option>
                            <option value="Datastage">Datastage</option>
                            <option value="DBA">DBA</option>
                            <option value="Devops">Devops</option>
                            <option value="Embedded Systems">Embedded Systems</option>
                            <option value="Finance and Accounts">Finance and Accounts</option>
                            <option value="Google GO language">Google GO language</option>
                            <option value="HR">HR</option>
                            <option value="Incident Management">Incident Management</option>
                            <option value="Informatica">Informatica</option>
                            <option value="IOS">IOS</option>
                            <option value="Java">Java</option>
                            <option value="Learning and Development">Learning and Development</option>
                            <option value="Linux">Linux</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mobile">Mobile</option>
                            <option value="No SQL">No SQL</option>
                            <option value="Node JS">Node JS</option>
                            <option value="PHP">PHP</option>
                            <option value="PMO">PMO</option>
                            <option value="Programming">Programming</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Python">Python</option>
                            <option value="QA">QA</option>
                            <option value="React Native">React Native</option>
                            <option value="Robotic Process Automation">Robotic Process Automation</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Ruby on Rails">Ruby on Rails</option>
                            <option value="Sales">Sales</option>
                            <option value="Sales Force">Sales Force</option>
                            <option value="Salesforce">Salesforce</option>
                            <option value="SNA">SNA</option>
                            <option value="TA">TA</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Training">Training</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Xamarin">Xamarin</option>
                        </select>
                    </div>

                    </div>
                    <div class="col-sm-12 col-md-2">
                        <multiselect-dropdown class="padding-left-10 ng-untouched ng-valid ng-dirty" _nghost-jjy-6="">
                            <div _ngcontent-jjy-6="" class="btn-group">
                                <button _ngcontent-jjy-6="" class="dropdown-toggle btn btn-default" type="button"><span _ngcontent-jjy-6="" class="caret"></span></button>

                            </div>
                        </multiselect-dropdown>
                    </div>
                    <div class="col-sm-12 col-md-2  padding-top-10" id="filterName">
                        <label>Primary Skill</label>
                    </div>
                   
                </div>

            </div>
        )
    }
}