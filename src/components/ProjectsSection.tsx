import React, { Component } from 'react';
import ProjectComp from './Project';
import { Transition } from 'react-spring'
import Modal from './Modal';
import { Project } from '../types'

import { setSize } from '../logic/logic'

interface projectProps {
  projects: Project[],
  filters: string[]
}

interface StateObj {
  incX: number,
  incY: number,
  columns: number,
  gap: number,
  x: number,
  y: number,
  filter: string,
  showModal: boolean,
  title: string
}

export default class ProjectsSection extends Component<projectProps, StateObj> {
  constructor(props: projectProps) {
    super(props);

    let obj = setSize();

    obj.filter = ''
    obj.showModal = false;
    obj.title = '';

    this.state = obj;
  }

  public componentDidMount = () => {
    setTimeout(this.resize, 0)
    window.addEventListener('resize', this.resize)
  }

  public componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize)
  }

  private resize = () => {
    this.setState(setSize())
  }

  public toggleModal = (title: string) => {
    this.setState({
      showModal: true,
      title: title
    })
  }

  public hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  public render() {
    let { filter, x, y, incX, incY, columns, gap, showModal, title } = this.state;
    const { projects } = this.props


    let projectsArray: Project[] = [...projects];

    if (filter) {
      projectsArray = projectsArray
        .filter((project: Project) => project.type.includes(filter))
    }

    const newProjectsArray: { x: number, y: number, project: Project }[] = projectsArray.map(project => {
      const item: { project: Project, x: number, y: number } = { project, x, y }
      if (x >= incX * (columns - 1)) {
        x = gap;
        if (gap) {
          y += incY + gap;
        } else {
          y += incY + 15
        }
      } else {
        x += incX + gap;
      }
      return item
    })

    const indexOfProject: number = projects.findIndex((item) => item.title === title)


    return (
      <div id="projects">

        <Transition
          items={showModal}
          from={{ opacity: 0, scale: 0 }}
          enter={{ opacity: 1, scale: 1 }}
          leave={{ opacity: 0, scale: 0 }}>
          {(show: boolean) =>
            show && (({ opacity, scale }) => <div id='modal-overlay' style={{ opacity }} onClick={this.hideModal}>
              <Modal project={projects[indexOfProject]} scale={{ scale }} hideModal={this.hideModal} />
            </div>)
          }
        </Transition>
        <h1>Projects</h1>
        <main style={{ height: Math.ceil(newProjectsArray.length / columns) * (incY + gap) }}>
          <aside id="aside">
            <ul>
              <li onClick={() => this.setState({ filter: '' })}>
                <span className={!filter ? 'highlight' : ''}>All</span>
              </li>
              {this.props.filters.map(text => (
                <li

                  onClick={() => this.setState({ filter: text })}
                  key={text}><span className={filter === text ? 'highlight' : ''}>{text}</span></li>
              ))}
            </ul>
          </aside>
          <section id="projects-showcase" >
            <Transition
              items={newProjectsArray} keys={item => item.project.title}
              from={{ opacity: 0, }}
              enter={{ opacity: 1, }}
              leave={{ opacity: 0, top: '10rem', transform: 'translate3d(25rem, 10rem, 0)' }}>
              {
                item => props => {
                  return <ProjectComp
                    project={item.project}
                    x={item.x}
                    y={item.y}
                    style={props}
                    width={incX}
                    height={incY}
                    selectProject={this.toggleModal}
                  />
                }
              }
            </Transition>
          </section>
        </main>
        <div className="spacer" />
      </div>
    )
  }
}
