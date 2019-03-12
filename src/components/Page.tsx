import React, { Component, WheelEvent } from 'react';
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

  public componentDidMount() {
    window.addEventListener('wheel', this.scroll)
    // const skillDiv = document.getElementById('skill')
    // if (skillDiv) {
    //   skillDiv.addEventListener('wheel', this.prevent)
    // }
  }

  public componentWillUnmount() {
    window.removeEventListener('wheel', this.scroll)
  }

  private scroll(event: MouseWheelEvent) {
    const skill = document.getElementById('skill')
    if (skill) {
      if (event.deltaY < 0) {
        skill.scroll(0, skill.scrollTop + event.deltaY)
      } else {
        skill.scroll(0, skill.scrollTop + event.deltaY)
      }
    }
  }

  render() {
    const { skills, projects, filters, skillSize } = this.props
    return (
      <div id="skill" onWheel={(event: WheelEvent) => event.stopPropagation()}>
        <Skills skills={skills} fontSize={skillSize} />
        <ProjectsSection projects={projects} filters={filters} />
      </div >
    )
  }
}
