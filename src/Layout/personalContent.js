import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './personalContentStyle.css';
import {label} from './personalContent.json';
export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: true, value: '', old: '', user: {} };
  }

  handleEdit = () => {
    this.setState({ edit: false });
    this.setState({ tempObj: this.state.user });
  }

  handleSave = () => {
    this.setState({ edit: true });
    console.log(this.state, 'state');
  }

  handleChange = (e) => {
    const name = e.target.name;
    console.log(name);
    this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
  }

  handleCancel = () => {
    this.setState({ user: Object.assign({}, this.state.tempObj) });
  }

  render() {
    //var labels = JSON.parse()
    return (
      <Form>
        {
          
        }
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field1}</ControlLabel>{' '}
          <FormControl name={label.field1} value={this.state.user[label.field1]} onChange={this.handleChange} type="input" className='editable' placeholder="First Name" disabled={this.state.edit} />
        </FormGroup>

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field2}</ControlLabel>{' '}
          <FormControl name={label.field2} value={this.state.user[label.field2]} onChange={this.handleChange} type="input" className='editable' placeholder="Middle Name" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field3}</ControlLabel>{' '}
          <FormControl name={label.field3} value={this.state.user[label.field3]} onChange={this.handleChange} type="input" className='editable' placeholder="Last Name" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field4}</ControlLabel>{' '}
          <FormControl name={label.field4} value={this.state.user[label.field4]} onChange={this.handleChange} type="input" className='editable' placeholder="Legal Name" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field5}</ControlLabel>{' '}
          <FormControl name={label.field5} value={this.state.user[label.field5]} onChange={this.handleChange} type="input" className='editable' placeholder="Display Name" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field6}</ControlLabel>{' '}
          <FormControl name={label.field6} value={this.state.user[label.field6]} onChange={this.handleChange} type="input" className='editable' placeholder="Gender" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>{label.field7}</ControlLabel>{' '}
          <FormControl name={label.field7} value={this.state.user[label.field7]} onChange={this.handleChange} type="date" className='editable' disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field8}</ControlLabel>{' '}
          <FormControl name={label.field8} value={this.state.user[label.field8]} onChange={this.handleChange} componentClass="select" disabled={this.state.edit} >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
          </FormControl >
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field9}</ControlLabel>{' '}
          <FormControl name={label.field9} value={this.state.user[label.field9]} onChange={this.handleChange} componentClass="select" disabled={this.state.edit} >
            <option value="">Select</option>
            <option value="HINDUISM">Hinduism</option>
            <option value="ISLAM">Islam</option>
            <option value="SIKHISM">Sikhism</option>
            <option value="BUDDHISM">Buddhism</option>
            <option value="JAINISM">Jainism</option>
            <option value="CHRISTIANITY">Christianity</option>
          </FormControl >
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>{label.field10}</ControlLabel>{' '}
          <FormControl name={label.field10} value={this.state.user[label.field10]} onChange={this.handleChange} componentClass="select" className='editable' disabled={this.state.edit} >
            <option value="">Select</option>
            <option value="INDIAN">Indian</option>
            <option value="AMERICAN">American</option>
            <option value="SWISS">Swiss</option>
            <option value="PORTUGUESE">Portuguese</option>
            <option value="MEXICAN">Mexican</option>
            <option value="AFGHAN">Afghan</option>
          </FormControl >
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field11}</ControlLabel>{' '}
          <FormControl name={label.field11} value={this.state.user[label.field11]} onChange={this.handleChange} type="input" className='editable' placeholder="Weight" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>{label.field12}</ControlLabel>{' '}
          <FormControl name={label.field12} value={this.state.user[label.field12]} onChange={this.handleChange} type="input" className='editable' placeholder="Height" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>{label.field13}</ControlLabel>{' '}
          <FormControl name={label.field13} value={this.state.user[label.field13]} onChange={this.handleChange} type="input" className='editable' placeholder="Employee ID" disabled={this.state.edit} />
        </FormGroup>{' '}

        <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
        <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
        <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
      </Form>
    );
  }
}
