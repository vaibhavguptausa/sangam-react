import React from 'react';
import { MultiSelect } from './MultiSelect';

export default class SkillsContent extends React.Component {
    constructor(props)
    {
        super(props);
    }

    handleOptionSelect=(event)=>{}

    render() {
        return (
            <div>
                <div className="row" style={{ padding: 10 + 'px' }}>

                    <div className="col-sm-12  col-md-8 padding-top-10" id="filterName">
                        <label className="cold-md-4" style={{ float: 'left', padding: 10 + 'px' }}>Filter Skills</label>
                        <div className="col-sm-12 col-md-6">
                            <MultiSelect />
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-2  padding-top-10" id="filterName">
                        <label>Primary Skill</label>
                        <input placeholder="training" disabled={true}/>
                    </div>

                </div>

            </div>
        )
    }
}