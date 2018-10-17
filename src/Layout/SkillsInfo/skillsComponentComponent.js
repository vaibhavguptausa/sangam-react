import React from 'react';
import { Button } from 'react-bootstrap';
export default class SkillsComponentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: this.props.user, DisplayStatus: true, isEditable: this.props.editable, saveField: false };
    }
    handleRemoveField = () => {
        // this.setState({DisplayStatus: false});
        this.props.handleRemoveField(this.state.user);
    }
    // componentWillReceiveProps({ editable }) {
    //     this.setState({ ...this.state.isEditable, editable })
    // }
    //   static getDerivedStateFromProps(props, state) {

    //     if (props.editable !== state.isEditable) {
    //         return {
    //             isEditable: props.editable

    //         };
    //     }
    //     return null;
    // }
    handleSave = () => {
        this.setState({ saveField: true });
        this.props.handleUserInfo(this.state.user);
        console.log(`user`, this.state.user)
    }
    // handleUserInfo = () => {
    //     console.log(`singleuser`, this.state.user)
    //     if (this.state.saveField) {
           
    //     }
    // }
    handleChange = (e) => {
        const name = e.target.id;
        this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });

    }
    render() {
        //console.log(`childofchildiseditable`, this.props.editable)
        if (!this.state.DisplayStatus) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <div id="ComponentOfComponent" >
                    <div className="col-xs-11 col-sm-11  padding-top-bottom-20" id="Hide">

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
                                        <td data-label="Skill" id="skilldrpdown">
                                            <div className="col-sm-12" id="skilldrpdown" >
                                                <select id="txtskilldrpdown" onChange={this.handleChange} disabled={this.state.isEditable} value={this.state.user.txtskilldrpdown} className='form-control' >
                                                    <option value='option1'>option 1</option>
                                                    <option value='option2'>option 2</option>
                                                    <option value='option3'>option 3</option>
                                                    <option value='option4'>option 4</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td data-label="Expert Level" id="proficiencydrpdown">
                                            <div className="proficiencyEditableField col-sm-12" >
                                                <select className='form-control addressEditableField requiredAddressField ' disabled={this.state.isEditable} id='txtproficiencydrpdown' onChange={this.handleChange} value={this.state.user.txtproficiencydrpdown}>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value='Intermediate'>Intermediate</option>
                                                    <option value='Advanced'>Advanced</option>
                                                    <option value='Proficient'>Proficient</option>
                                                    <option value='Expert'>Expert</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td data-label="Number of Years" id="numofyears">
                                            <div>
                                                <input className="form-control" min="0" type="number" disabled={this.state.isEditable} value={this.state.user.empSkillNumberofYears} onChange={this.handleChange} id="empSkillNumberofYears" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <Button onClick={this.handleRemoveField} id={this.state.counter}>Remove field</Button>
                    <Button onClick={this.handleSave} >Save Field</Button>
                    {/* {this.handleUserInfo()} */}
                </div>

            )
        }
    }
}
