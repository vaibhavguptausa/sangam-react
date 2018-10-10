import React from 'react' ;

export class SkillsComponentComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={user: [], DisplayStatus: true, };
    }
    handleRemoveField=()=>{
        this.setState({DisplayStatus: false});
    }
    render(){
    
        if(!this.state.DisplayStatus)
        {
            return(
                <div></div>
            )
        }
        else{
        return(
            <div id="ComponentOfComponent" >
            <div className="col-xs-11 col-sm-11  padding-top-bottom-20"  id="Hide">
                  
                        <div>
                            <table align="center" cellSpacing="0">
                                <thead>
                                    <tr id="skillHeader">
                                        <th className="text-center form-group col-sm-3 padding-left-right-40">
                                            <label className="text-center calibriFont14 padding-top-5" for="_lblSkill">Skill</label>
                                        </th>
                                        <th className="text-center form-group col-sm-3  padding-left-right-40">
                                            <label className="calibriFont14 padding-top-5" for="_lblExpertLevel">Expert Level</label>
                                        </th>
                                        <th className="text-center form-group col-sm-3  padding-left-right-40">
                                            <label className="calibriFont14 padding-top-5" for="_lblNumOfYears">Number Of Years</label>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td data-label="Skill" disabled="" id="skilldrpdown6849">
                                            <div className="col-sm-12" disabled="" id="skilldrpdown6849">
                                                <select >
                                                    <option>{this.props.title}</option>
                                                </select>

                                            </div>
                                        </td>
                                        <td data-label="Expert Level" disabled="" id="proficiencydrpdown">
                                            <div className="proficiencyEditableField col-sm-12" disabled="">
                                            <select value={this.state.user.proficiencydrpdown} onChange={this.handleChange}>
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                                <option>Proficient</option>
                                                <option>Expert</option>
                                            </select>
                                            </div>
                                        </td>
                                        <td data-label="Number of Years" id="numofyears">
                                            <div>
                                                <input className="form-control proficiencyEditableField proficiencyRequiredField col-sm-8 " min="0" disabled={!this.props.editableComponent} tabindex="-1" type="number" id="empSkillNumberofYears6849" />
                                            </div>
                                        </td>



                                    </tr>


                                </tbody>
                            </table>
                            
                        </div>

                    </div>
                   
                    <button onClick={this.handleRemoveField}>Remove field</button>
                    </div>
        ) 
    }
    }
}
