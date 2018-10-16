import React from 'react';
import { SkillsComponentComponent } from './skillsComponentComponent';
export default class SkillsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, menuopen: false, classhandler: [], isEditable: this.props.editable, counter: 0, userinfo: [] };

        // console.log(`2nd stage`, this.state.isEditable)
    }
    static getDerivedStateFromProps(props, state) {

        if (props.editable !== state.isEditable) {
            return {
                isEditable: props.editable

            };
        }
        return null;
    }
    handleUserInfo=(data)=>{
        let userinfo=[];
       // Object.assign(userinfo, this.state.userinfo);
        for(let i=0;i<this.state.userinfo.length;i++)
        {
           if(this.state.userinfo[i].id===data.id)
           {
            userinfo.push(data);   
           }
           else{
            userinfo.push(this.state.userinfo[i]);
           }
        }
        this.setState({userinfo: userinfo});
    }
    handleClick = () => {
        this.setState({ menuopen: !this.state.menuopen });
    }

   
    handleRemoveField=(data)=>{
        let userinfo=[];
       // this.setState({counter: this.setState.counter-1});
        for(let i=0;i<this.state.userinfo.length;i++)
            {
                if(this.state.userinfo[i].id===data.id)
                {
                    
                }
                else{
                    userinfo.push(this.state.userinfo[i]);
                }
            }
            this.setState({userinfo: userinfo});

    }
    handleComponentofComponentAdd = () => {
       
        var user={};
        user.txtskilldrpdown='';
        user.txtproficiencydrpdown='';
        user.empSkillNumberofYears='';
        user.id=this.state.counter;
       let userinfo=[];
       for(let i=0;i<this.state.userinfo.length;i++)
       {
           userinfo.push(this.state.userinfo[i]);
       }
       userinfo.push(user);
       this.setState({userinfo: userinfo, counter: this.state.counter +1});
        
    }
    getClassCount = () => {
        let some = []
        
        for(let i=0;i<this.state.userinfo.length;i++)
        {
            some.push(<SkillsComponentComponent user={this.state.userinfo[i]} handleUserInfo={this.handleUserInfo} editable={this.state.isEditable}  handleRemoveField={this.handleRemoveField}/>)
        }
        
        return some
    }
    render() {
        //console.log(`childisEditable`, this.state.isEditable)
        console.log(`userInfo`, this.state.userinfo);
        const style1 = {

            'display': 'none'
        }
        const style2 = {
            'display': 'block'
        }
        return (
            <div className="col-xs-11 col-sm-11 " style={{ display: 'grid', width: `${100}vh` }} id='NewComponent' >
                <div className="panel panel-primary" >
                    <div className="panel-heading clickable height-0" style={{ paddingTop: '8px', display: 'flex', height: `${40}px` }} id="Skills10" onClick={this.handleClick}>
                        <h4 className="panel-title" style={{ float: 'left' }}>
                            {this.props.title}
                        </h4>


                    </div>
                    <div style={this.state.menuopen ? style1 : style2}>

                        <button onClick={this.handleComponentofComponentAdd}>Add field</button>
                        {this.getClassCount()}
                    </div>
                </div>

            </div>
        );
    }
}