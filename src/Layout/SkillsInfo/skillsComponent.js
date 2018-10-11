import React from 'react';
import { SkillsComponentComponent } from './skillsComponentComponent';
export default class SkillsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, menuopen: false, classhandler: 0, isEditable: this.props.editable };
        console.log(`2nd stage`, this.state.isEditable)
    }
    static getDerivedStateFromProps(props, state) {

        if (props.editable !== state.isEditable) {
            return {
                isEditable: props.editable

            };
        }
        return null;
    }
    handleClick = () => {
        this.setState({ menuopen: !this.state.menuopen });
    }

    // componentWillReceiveProps(nextProps) {
    //     this.getClassCount(nextProps)
    // }
    handleComponentofComponentAdd = () => {
        let classhandler = this.state.classhandler;

        // Object.assign(classhandler, this.state.classhandler);
        var passingprop = this.props.editable;

        classhandler++;//.push(<SkillsComponentComponent editableComponent={this.props.editable}/>)
        this.setState({ classhandler });

    }
    getClassCount = (nextProps) => {
        let some=[]
        for (let i = 0; i < this.state.classhandler; i++) {
            some.push(<SkillsComponentComponent editable={this.props.editable} title={this.props.title}/>)
        }
        return some
    }
    render() {

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