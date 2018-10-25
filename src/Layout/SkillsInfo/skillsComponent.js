import React from 'react';
import SkillsComponentComponent from './skillsComponentComponent';
import { Button } from 'react-bootstrap';
import './skillsComponentStyle.css';

export default class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, menuopen: false, classhandler: [], isEditable: this.props.editable, counter: 0, userinfo: [] };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.editable !== state.isEditable) {
            return {
                isEditable: props.editable
            };
        }
        return null;
    }

    handleUserInfo = (data) => {
        let userinfo = [];
        for (let i = 0; i < this.state.userinfo.length; i++) {
            if (this.state.userinfo[i].id === data.id) {
                userinfo.push(data);
            }
            else {
                userinfo.push(this.state.userinfo[i]);
            }
        }
        this.setState({ userinfo: userinfo });
    }

    handleClick = () => {
        this.setState({ menuopen: !this.state.menuopen });
    }


    handleRemoveField = (data) => {
        let userinfo = [];
        for (let i = 0; i < this.state.userinfo.length; i++) {
            if (this.state.userinfo[i].id === data.id) { }
            else {
                userinfo.push(this.state.userinfo[i]);
            }
        }
        this.setState({ userinfo: userinfo });
    }

    handleComponentofComponentAdd = () => {
        var user = {};
        user.txtskilldrpdown = '';
        user.txtproficiencydrpdown = '';
        user.empSkillNumberofYears = '';
        user.id = this.state.counter;
        let userinfo = [];
        for (let i = 0; i < this.state.userinfo.length; i++) {
            userinfo.push(this.state.userinfo[i]);
        }
        userinfo.push(user);
        this.setState({ userinfo: userinfo, counter: this.state.counter + 1 });
    }

    getClassCount = () => {
        let some = []
        for (let i = 0; i < this.state.userinfo.length; i++) {
            some.push(<SkillsComponentComponent user={this.state.userinfo[i]} handleUserInfo={this.handleUserInfo} editable={this.state.isEditable} handleRemoveField={this.handleRemoveField} />)
        }
        return some;
    }
    render() {
        console.log(`userInfo`, this.state.userinfo);

        return (
            <div className="col-xs-11 col-sm-11"  id='newComponent' >
                <div className="panel panel-primary" >
                    <div className="panel-heading clickable height-0" id="skills10" onClick={this.handleClick}>
                        <h4 className="panel-title">
                            {this.props.title}
                        </h4>
                    </div>
                    {this.state.menuopen ?
                        <div >
                            <Button onClick={this.handleComponentofComponentAdd}>Add field</Button>
                            {this.getClassCount()}
                        </div> : <div></div>}
                </div>
            </div>
        );
    }
}