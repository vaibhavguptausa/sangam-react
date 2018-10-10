import React from 'react';
import {SkillsComponentComponent} from './skillsComponentComponent';
export default class SkillsComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, menuopen: false,  classhandler: [], isEditable: this.props.editable };
        console.log(`2nd stage`,this.state.isEditable )
    }
    static getDerivedStateFromProps(props, state) {
        
        if (props.editable !== state.isEditable) {
          return {
            isEditable: props.editable
           
          };
        }
        return null;
      }
    handleClick=()=>{
       this.setState({menuopen: !this.state.menuopen});
    }
    
    
    handleComponentofComponentAdd=()=>{
        let classhandler=[];
        Object.assign(classhandler, this.state.classhandler);
        var passingprop= this.props.editable ;
       
        classhandler.push(<SkillsComponentComponent editableComponent={this.props.editable}/>)
        this.setState({classhandler: classhandler});
       
    }  
    render() {
     
        const style1={
        
            'display': 'none' 
    }
    const style2={
        'display': 'block'
    }
        return (
            <div className="col-xs-11 col-sm-11 " style={{ display: 'grid', width: `${100}vh` }} id='NewComponent' >
                <div className="panel panel-primary" >
                    <div className="panel-heading clickable height-0" style={{ paddingTop: '8px',display:'flex', height:`${40}px` }} id="Skills10" onClick={this.handleClick}>
                        <h4 className="panel-title" style={{ float: 'left' }}>
                            {this.props.title}
                        </h4>

                      
                    </div>
                   <div style={this.state.menuopen?style1: style2 }>
                       
                       <button onClick={this.handleComponentofComponentAdd}>Add field</button>
                       {this.state.classhandler}
                   </div>
                </div>
               
            </div>
        );
    }
}