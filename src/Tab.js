import React from 'react';
import './tabs.css';
import PersonalContent from './PersonalContent';
import AddressContent from './AddressContent';
import ProfessionalContent from './ProfessionalContent';
import SkillsContent from './SkillsContent.js';
import CertificationContent from './CertificationContent.js';
import AcademicContent from './AcademicContent.js';
import ExperienceContent from './ExperienceContent.js';
import ContactContent from './ContactContent.js';
import IdentificationContent from './IdentificationContent.js';

export default class Tab extends React.Component {
  render() {   
    return(
      <div className="tabs">
        <div><h2>EMPLOYEE DETAILS</h2></div>
            
        <div id="exTab2" className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="personal-tab" data-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">Personal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true">Address</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="true">Professional</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="certification-tab" data-toggle="tab" href="#certification" role="tab" aria-controls="certification" aria-selected="true">Certification</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="academic-tab" data-toggle="tab" href="#academic" role="tab" aria-controls="academic" aria-selected="true">Academic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="experience-tab" data-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="true">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="identification-tab" data-toggle="tab" href="#identification" role="tab" aria-controls="identification" aria-selected="true">Identification</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane" id="personal" role="tabpanel" aria-labelledby="personal-tab"><PersonalContent /></div>
            <div className="tab-pane" id="address" role="tabpanel" aria-labelledby="address-tab"><AddressContent /></div>
            <div className="tab-pane" id="professional" role="tabpanel" aria-labelledby="professional-tab"><ProfessionalContent /></div>
            <div className="tab-pane" id="skills" role="tabpanel" aria-labelledby="skills-tab"><SkillsContent /></div>
            <div className="tab-pane" id="certification" role="tabpanel" aria-labelledby="certification-tab"><CertificationContent /></div>
            <div className="tab-pane" id="academic" role="tabpanel" aria-labelledby="academic-tab"><AcademicContent/></div>
            <div className="tab-pane" id="experience" role="tabpanel" aria-labelledby="experience-tab"><ExperienceContent/></div>
            <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab"><ContactContent /></div>
            <div className="tab-pane" id="identification" role="tabpanel" aria-labelledby="identification-tab"><IdentificationContent /></div>
          </div>
      </div>
      </div>
    );
  }
}