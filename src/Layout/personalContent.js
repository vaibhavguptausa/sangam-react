import React, { Component } from 'react';
import './personalContentStyle.css';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


export class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: true, value: '', old: '', user: {} };
  }

  handleEdit = () => {
    this.setState({ edit: false });
    this.setState({ tempObj: this.state.user })
  }

  handleSave = () => {
    this.setState({ edit: true });
    console.log(this.state, 'state');
  }

  handleChange = (e) => {
    const name = e.target.name;
    console.log(name);

    // this.setState({ old: this.state.value })
    this.setState({ user: Object.assign({}, this.state.user, { [name]: e.target.value }) });
  }

  handleCancel = () => {

    this.setState({ user: Object.assign({}, this.state.tempObj) })
  }

  render() {

    return (

      <Form>
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>
            
            First Name</ControlLabel>{' '}
          <FormControl name='FirstName' value={this.state.user.FirstName} onChange={this.handleChange} type="input" className='editable' placeholder="Jane Doe" disabled={this.state.edit} />
        </FormGroup>
        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>Middle Name</ControlLabel>{' '}
          <FormControl name='MiddleName' value={this.state.user.MiddleName} onChange={this.handleChange} type="input" className='editable' placeholder="jane.doe@example.com" disabled={this.state.edit} />
        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>Last Name</ControlLabel>{' '}
          <FormControl name='LastName' value={this.state.user.LastName} onChange={this.handleChange} type="input" className='editable' placeholder="jane.doe@example.com" disabled={this.state.edit} />
        </FormGroup>{' '}
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>Legal Name</ControlLabel>{' '}
          <FormControl name='LegalName' value={this.state.user.LegalName} onChange={this.handleChange} type="input" className='editable' placeholder="Jane Doe" disabled={this.state.edit} />
        </FormGroup>{' '}
        <br /><br /><br />
        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>Display Name</ControlLabel>{' '}
          <FormControl name='DisplayName' value={this.state.user.DisplayName} onChange={this.handleChange} type="input" className='editable' placeholder="jane.doe@example.com" disabled={this.state.edit} />
        </FormGroup>{' '}
        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>Gender</ControlLabel>{' '}
          <FormControl name='Gender' value={this.state.user.Gender} onChange={this.handleChange} type="input" className='editable' placeholder="jane.doe@example.com" disabled={this.state.edit} />
        </FormGroup>{' '}


        <FormGroup className="col-md-6" controlId="formInlineEmail" style={{marginBottom: 0+'px'}}>
          <ControlLabel>DOB</ControlLabel>{' '}
          {/* <FormControl className='input-group date' name='DOB' disabled={this.state.edit} type=' '></FormControl> */}
        {/* <PickDate className="col-md-6 form-control" name='DOB' disabled={this.state.edit} /> */}
        <FormControl name='DOB' value={this.state.user.DOB} onChange={this.handleChange} type="date" className='editable' disabled={this.state.edit} />

        </FormGroup>{' '}

        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>Blood Group</ControlLabel>{' '}
          <FormControl name='BloodGroup' value={this.state.user.BloodGroup} onChange={this.handleChange} componentClass="select" placeholder="select" disabled={this.state.edit} >
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


        <br /><br /><br />
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>Religion</ControlLabel>{' '}
          <FormControl name='Religion' value={this.state.user.Religion} onChange={this.handleChange} componentClass="select" className='editable' placeholder="" disabled={this.state.edit} >

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
          <ControlLabel>Nationality</ControlLabel>{' '}
          <FormControl name='Nationality' value={this.state.user.Nationality} onChange={this.handleChange} componentClass="select" className='editable' placeholder="" disabled={this.state.edit} >

            <option value="">Select</option>
            <option value="INDIAN">Indian</option>
            <option value="AMERICAN">American</option>
            <option value="SWISS">Swiss</option>
            <option value="PORTUGUESE">Portuguese</option>
            <option value="MEXICAN">Mexican</option>
            <option value="AFGHAN">Afghan</option>


          </FormControl >

        </FormGroup>{' '}
        <br /><br /><br />
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>Weight</ControlLabel>{' '}
          <FormControl name='Weight' value={this.state.user.Weight} onChange={this.handleChange} type="input" className='editable' placeholder="Jane Doe" disabled={this.state.edit} />
        </FormGroup>{' '}
        <FormGroup className="col-md-6" controlId="formInlineEmail">
          <ControlLabel>Height(in cm)</ControlLabel>{' '}
          <FormControl name='Height' value={this.state.user.Height} onChange={this.handleChange} type="input" className='editable' placeholder="jane.doe@example.com" disabled={this.state.edit} />
        </FormGroup>{' '}
        <br /><br /><br />
        <FormGroup className="col-md-6" controlId="formInlineName">
          <ControlLabel>Employee Number</ControlLabel>{' '}
          <FormControl name='EmployeeNumber' value={this.state.user.EmployeeNumber} onChange={this.handleChange} type="input" className='editable' placeholder="Jane Doe" disabled={this.state.edit} />

        </FormGroup>{' '}
        <br /><br />
        <Button onClick={this.handleEdit} style={this.state.edit ? {} : { 'display': 'none' }} >Edit</Button>
        <Button onClick={this.handleSave} style={this.state.edit ? { 'display': 'none' } : {}}>Save</Button>
        <Button onClick={this.handleCancel} style={this.state.edit ? { 'display': 'none' } : {}}>Cancel</Button>
      </Form>
    )
  };
}
