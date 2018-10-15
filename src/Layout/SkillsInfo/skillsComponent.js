import React from 'react';
import SkillsComponentComponent from './skillsComponentComponent';

export default class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true, user: {}, menuopen: false, classhandler: [], isEditable: this.props.editable, counter: 0 };
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

    handleClick = () => {
        this.setState({ menuopen: !this.state.menuopen });
    }

    // componentWillReceiveProps(nextProps) {
    //     this.getClassCount(nextProps)
    // }
    handleComponentofComponentremove = (ID) => {
        let classhandler1 = [];
        console.log(`ID`, 'ch' + ID);
        for (let i = 0; i < this.state.classhandler.length; i++) {

            if (this.state.classhandler[i].props.id === (ID)) {
                console.log(`match`, this.state.classhandler[i].props.id)
                continue;
            }
            classhandler1.push(Object.assign({}, this.state.classhandler[i]));
        }
        this.setState({ classhandler: classhandler1 });
    }

    handleComponentofComponentAdd = () => {
        let classhandler = [];
        Object.assign(classhandler, this.state.classhandler);
        //  var passingprop = this.props.editable;
        classhandler.push(<SkillsComponentComponent editable={this.props.editable} compIndex={this.state.counter} id={'ch' + this.state.counter} handleRemoveField={this.handleComponentofComponentremove} />)
        this.setState({ counter: (this.state.counter + 1) })
        this.setState({ classhandler });
        console.log(`classhandler`, this.state.classhandler)
    }

    getClassCount = (nextProps) => {
        let some = []
        // for (let i = 0; i < this.state.classhandler; i++) {
        //     some.push(<SkillsComponentComponent editable={this.props.editable}/>)
        // }
        Object.assign(some, this.state.classhandler);
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