import React, { Component } from 'react';
import ProjectComp from './Project';
import { Transition } from 'react-spring'
import Modal from './Modal';
import { Project } from '../types'

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

    let obj = this.setSize();

    obj.filter = ''
    obj.showModal = false;
    obj.title = '';

    this.state = obj;
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.setState(this.setSize())
  }

  toggleModal = (title: string) => {
    this.setState({
      showModal: true,
      title: title
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  setSize = () => {
    var incX;
    var incY;
    var columns;
    var gap;
    const ratioKeeper = 1.763;

    if (window.innerWidth > 3000) {
      document.getElementsByTagName('html')[0].style.fontSize = '20px'
      incX = window.innerWidth / 5;
      incY = incX / ratioKeeper;
      columns = 3
      gap = 60;
    }

    else if (window.innerWidth <= 3000 && window.innerWidth > 2500) {
      document.getElementsByTagName('html')[0].style.fontSize = '16px'
      incX = window.innerWidth / 5;
      incY = incX / ratioKeeper;
      columns = 3
      gap = 50;
    }

    else if (window.innerWidth <= 2500 && window.innerWidth > 1100) {
      document.getElementsByTagName('html')[0].style.fontSize = '12px'
      incX = window.innerWidth / 5;
      incY = incX / ratioKeeper;
      columns = 3
      gap = 40;
    }

    else if (window.innerWidth <= 1100 && window.innerWidth > 950) {
      incX = window.innerWidth / 3;
      incY = incX / ratioKeeper;
      columns = 2;
      gap = 25;
    }

    else if (window.innerWidth <= 950 && window.innerWidth > 700) {
      incX = window.innerWidth / 2.3;
      incY = incX / ratioKeeper;
      columns = 2;
      gap = 20
    }

    else if (window.innerWidth <= 700 && window.innerWidth > 500) {
      incX = window.innerWidth / 1.1;
      incY = incX / ratioKeeper;
      columns = 1;
      gap = 10
    }
    else {
      incX = window.innerWidth / 1.1;
      incY = incX / ratioKeeper;
      columns = 1;
      gap = 5
    }
    const obj: any = { incX, incY, columns, gap, x: gap, y: 0 }
    return obj
  }


  render() {
    let { filter, x, y, incX, incY, columns, gap, showModal, title } = this.state;

    let projectsArray: Project[] = [...this.props.projects];

    if (this.state.filter) {
      projectsArray = projectsArray
        .filter((project: Project) => project.type.includes(filter))
    }

    const newProjectsArray: { x: number, y: number, project: Project }[] = projectsArray.map(project => {
      const item: { project: Project, x: number, y: number } = { project, x, y }
      if (x >= incX * (columns - 1)) {
        x = gap;
        y += incY + gap;
      } else {
        x += incX + gap;
      }
      return item
    })

    const indexOfProject = this.props.projects.findIndex((item) => item.title === title)


    return (
      <div id="projects">

        <Transition
          items={showModal}
          from={{ opacity: 0, scale: 0 }}
          enter={{ opacity: 1, scale: 1 }}
          leave={{ opacity: 0, scale: 0 }}>
          {(show: boolean) =>
            show && (({ opacity, scale }) => <div id='modal-overlay' style={{ opacity }} onClick={this.hideModal}>
              <Modal project={this.props.projects[indexOfProject]} scale={{ scale }} />
            </div>)
          }
        </Transition>
        <h1>Projects</h1>
        <main style={{ height: Math.ceil(newProjectsArray.length / columns) * (incY + gap) }}>
          <aside id="aside">
            <h2>Categories</h2>
            <ul>
              <li className={filter === '' ? 'highlight' : ''} onClick={() => this.setState({ filter: '' })}>All</li>
              {this.props.filters.map(text => (<li className={filter === text ? 'highlight' : ''} onClick={() => this.setState({ filter: text })} key={text}>{text}</li>))}
            </ul>
          </aside>
          <section>
            <Transition
              items={newProjectsArray} keys={item => item.project.title}
              from={{ opacity: 0, }}
              enter={{ opacity: 1, }}
              leave={{ opacity: 0, top: '10rem', transform: 'translate3d(40rem, 40rem, 0)' }}>
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
