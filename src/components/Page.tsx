import React, { Component } from 'react';
import ProjectsSection from './ProjectsSection';
import Skills from './Skills'
import '../scss/skill.scss';
import { Collection } from '../types'
import { RouteComponentProps } from 'react-router-dom';

interface propsTest {
  skillSize: string,
  filters: any[],
  projects: any[],
  skills: any[]
}

export default class WebDev extends Component<propsTest & RouteComponentProps> {
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
