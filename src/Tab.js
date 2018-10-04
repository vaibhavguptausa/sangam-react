import React from 'react';
import './tabs.css';
import PersonalContent from './PersonalContent';
import AddressContent from './AddressContent';
import ProfessionalContent from './ProfessionalContent';

export default class Tab extends React.Component {
  render() {   
    return(
      <div className="tabs">
        <div className="container"><h2>EMPLOYEE DETAILS</h2></div>
            
        <div id="exTab2" className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="personal-tab" data-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="false">Personal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true">Address</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="skills" aria-selected="false">Professional</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="false">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#certification" role="tab" aria-controls="skills" aria-selected="false">Certification</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#academic" role="tab" aria-controls="skills" aria-selected="false">Academic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#experience" role="tab" aria-controls="skills" aria-selected="false">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="skills" aria-selected="false">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#identification" role="tab" aria-controls="skills" aria-selected="false">Identification</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane" id="personal" role="tabpanel" aria-labelledby="personal-tab"><PersonalContent /></div>
            <div className="tab-pane" id="address" role="tabpanel" aria-labelledby="address-tab"><AddressContent /></div>
            <div className="tab-pane" id="professional" role="tabpanel" aria-labelledby="professional-tab"><ProfessionalContent /></div>
            <div className="tab-pane" id="skills" role="tabpanel" aria-labelledby="skills-tab">...</div>
            <div className="tab-pane" id="certification" role="tabpanel" aria-labelledby="certification-tab">...</div>
            <div className="tab-pane" id="academic" role="tabpanel" aria-labelledby="academic-tab">...</div>
            <div className="tab-pane" id="experience" role="tabpanel" aria-labelledby="experience-tab">...</div>
            <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            <div className="tab-pane" id="identification" role="tabpanel" aria-labelledby="identification-tab">...</div>
          </div>
      </div>
      </div>
    );
  }
}