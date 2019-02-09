import React, { Component } from 'react';
import WebDevProject from './Project';
import { Transition } from 'react-spring'
import Modal from './Modal';

export default class ProjectsSection extends Component {
  constructor() {
    super();

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

  toggleModal = (title) => {
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

    if (window.innerWidth > 1100) {
      incX = window.innerWidth / 5;
      incY = incX / ratioKeeper;
      columns = 3
      gap = 35;
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
    else if (window.innerWidth <= 500) {
      incX = window.innerWidth / 1.1;
      incY = incX / ratioKeeper;
      columns = 1;
      gap = 5
    }
    return { incX, incY, columns, gap, x: gap, y: 0 }
  }


  render() {
    let { filter, x, y, incX, incY, columns, gap, showModal, title } = this.state;

    let projectsArray = [...this.props.projects];

    if (this.state.filter) {
      projectsArray = projectsArray
        .filter(project => project.type === filter)
    }

    projectsArray = projectsArray.map(project => {
      project.x = x;
      project.y = y;
      if (x >= incX * (columns - 1)) {
        x = gap;
        y += incY + gap;
      } else {
        x += incX + gap;
      }
      return project
    })

    const indexOfProject = this.props.projects.findIndex((item) => item.title === title)


    return (
      <div id="projects">

        <Transition
          items={showModal}
          from={{ opacity: 0, scale: 0 }}
          enter={{ opacity: 1, scale: 1 }}
          leave={{ opacity: 0, scale: 0 }}>
          {show =>
            show && (({ opacity, scale }) => <div id='modal-overlay' style={{ opacity }} onClick={this.hideModal}><Modal project={this.props.projects[indexOfProject]} scale={{ scale }} /></div>)
          }
        </Transition>
        <h1>Projects</h1>
        <main style={{ height: Math.ceil(projectsArray.length / columns) * (incY + gap) }}>
          <aside id="aside">
            <h2>Categories</h2>
            <ul>
              <li className={filter === '' ? 'highlight' : ''} onClick={() => this.setState({ filter: '' })}>All</li>
              {this.props.filters.map(text => (<li className={filter === text ? 'highlight' : ''} onClick={() => this.setState({ filter: text })} key={text}>{text}</li>))}
            </ul>
          </aside>
          <section>
            <Transition
              items={projectsArray} keys={item => item.title}
              from={{ opacity: 0, }}
              enter={{ opacity: 1, }}
              leave={{ opacity: 0, top: 100, transform: 'translate3d(400px, 400px, 0)' }}>
              {
                item => props => {
                  return (<WebDevProject {...item} style={props} width={incX} height={incY} selectProject={this.toggleModal} />)
                }
              }
            </Transition>
          </section>
        </main>
      </div>
    )
  }
}
