import React from 'react';
import { SkillsComponent } from './skillsComponent';
import Select from 'react-select';

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
export class SkillsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: [],
            classhandler: []
        }
    }
    handleOptionSelect = (data) => {
        debugger
        let classhandler = [];
        console.log(`data`, data.length);
        for (let i = 0; i < data.length; i++) {
            classhandler.push(<SkillsComponent title={data[i].value} />)
        }
        this.setState({ classhandler })
    }
    render() {
        return (

            <div className="row" style={{ padding: `${10}px` }}>

                <div className="col-sm-12  col-md-8 padding-top-10" id="filterName">
                    <label className="cold-md-4" style={{ float: 'left', padding: 10 + 'px' }}>Filter Skills</label>
                    <div className="col-sm-12 col-md-6">
                        <Select
                            onChange={this.handleOptionSelect}
                            options={options}
                            isMulti={true}
                        />
                        {/* <MultiSelect onClick={this.handleOptionSelect} /> */}
                    </div>

                </div>

                <div className="col-sm-12 col-md-2  padding-top-10" id="filterName">
                    <label>Primary Skill</label>
                    <input placeholder="training" disabled={true} />
                </div>
                <div>
                    {this.state.classhandler}
                </div>

            </div>

        )
    }
}
