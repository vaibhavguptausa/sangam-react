import React from 'react';
import { MultiSelect } from './MultiSelect/MultiSelect';
import {SkillsComponent} from './skillsComponent' ;
export class SkillsInfo extends React.Component {
    constructor(props)
    {
        super(props);
        
    }
    handleOptionSelect=(data)=>{
        let classhandler= [];
        console.log(`data`, data.length);
        for(let i=0;i<data.length;i++)
        {
            classhandler.push(<SkillsComponent title={data[i].value}  />)
        }
        return classhandler ;
    }
    render(){
        return (
            
                <div className="row" style={{ padding: 10 + 'px' }}>

                    <div className="col-sm-12  col-md-8 padding-top-10" id="filterName">
                        <label className="cold-md-4" style={{ float: 'left', padding: 10 + 'px' }}>Filter Skills</label>
                        <div className="col-sm-12 col-md-6">
                            <MultiSelect  onClick={this.handleOptionSelect} />
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-2  padding-top-10" id="filterName">
                        <label>Primary Skill</label>
                        <input placeholder="training" disabled={true}/>
                    </div>
                    { <div>
                        {this.handleOptionSelect} 
                </div> }

            </div>
            
        )
    }
    }
