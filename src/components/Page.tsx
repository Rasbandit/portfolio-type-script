import React, { Component } from 'react';
import ProjectsSection from './ProjectsSection';
import Skills from './Skills'
import '../scss/skill.scss';

export default class WebDev extends Component {
  render() {
    const { skills, projects, filters, skillSize } = this.props
    return (
      <div id="skill">
        <Skills skills={skills} fontSize={skillSize} />
        <ProjectsSection projects={projects} filters={filters} />
      </div >
    )
  }
}
