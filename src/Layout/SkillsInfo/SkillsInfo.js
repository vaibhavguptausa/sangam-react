import React from 'react';
import Select from 'react-select';
import SkillsComponent from './skillsComponent';
import { Button } from 'react-bootstrap';
import './SkillsInfoStyle.css';

const options = [

    { value: '.net', label: '.net' },
    { value: 'Android', label: 'Android' },
    { value: 'BD', label: 'BD' },
    { value: 'BA', label: 'BA' },
    { value: 'DBS', label: 'DBS' },
    { value: 'Database', label: 'Database' },
    { value: 'Big Data', label: 'Big Data' },
    { value: 'HR', label: 'HR' },
    { value: 'Incident Management', label: 'Incident Management' },
    { value: 'Mobile', label: 'Mobile' },
    { value: 'PHP', label: 'PHP' }

];



export default class SkillsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: [],
            classhandler: [],
            isEditable: false
        };
    }

    handleOptionSelect = (data) => {
        let classhandler = [];
        console.log(`data`, data);
        for (let i = 0; i < data.length; i++) {
            classhandler.push(data[i].value)
        }
        this.setState({ classhandler });
    }

    handleEdit = () => {
        this.setState({ isEditable: !this.state.isEditable });
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-8 padding-top-10" id="filterName">
                    <label className="col-md-4">Filter Skills</label>
                    <div className="col-sm-12 col-md-6">
                        <Select
                            onChange={this.handleOptionSelect}
                            options={options}
                            isMulti={true}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: 'hotpink',
                                    primary: 'blue',
                                },
                            })}
                        />
                    </div>
                </div>

                <div className="col-sm-12 col-md-2 padding-top-10" id="filterName">
                    <label>Primary Skill</label>
                    <input placeholder="Training" disabled={true} />
                </div>

                <div>
                    {this.state.classhandler.map((ch) => (
                        <SkillsComponent title={ch} editable={this.state.isEditable} />
                    ))}
                </div>

                {!this.state.isEditable ? <Button onClick={this.handleEdit}>Edit</Button> :
                    <Button onClick={this.handleEdit}>Save</Button>}
            </div>
        );
    }
}
