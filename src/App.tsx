import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { preload } from './logic/logic'


import webDevObject from './projectObjects/webDev';
import adobeObject from './projectObjects/adobe';
import educationObject from './projectObjects/education';

import Home from './components/Home';
import Nav from './components/Nav';
import Page from './components/Page';
import About from './components/About';

import splashImg from './assets/work/splash.jpg';
import splash from './assets/videos/background.webm';

import './scss/App.scss'


class App extends Component<{}, { showNav: boolean }> {
  constructor(props: object) {
    super(props);

    this.setREM()

    this.state = {
      showNav: false
    }
  }

  toggleNav = (showNav = !this.state.showNav) => {
    this.setState({ showNav })
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setREM);
    preload(webDevObject, adobeObject, educationObject)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setREM);
  }

  setREM() {
    if (window.innerWidth > 3000) {
      document.getElementsByTagName('html')[0].style.fontSize = '16px'
    }
    else if (window.innerWidth <= 3000 && window.innerWidth > 2500) {
      document.getElementsByTagName('html')[0].style.fontSize = '13px'
    }
    else if (window.innerWidth <= 2500 && window.innerWidth > 1900) {
      document.getElementsByTagName('html')[0].style.fontSize = '10px'
    }
    else {
      document.getElementsByTagName('html')[0].style.fontSize = '9px'
    }
  }

  render() {
    return (
      <Router>
        <>
          <div className="splash">
            <video src={splash} autoPlay={true} loop controls={true}></video>
          </div >
          <Route
            render={({ location }) => (
              <>
                <Nav toggleNav={this.toggleNav} showNav={this.state.showNav} />
                <div id="page-container" style={{ right: this.state.showNav ? '25rem' : 0 }}>

                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={850}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/webdev" render={(props) => <Page {...props} {...webDevObject} />} />
                        <Route exact path="/adobe" render={(props) => <Page {...props} {...adobeObject} />} />
                        <Route exact path="/teaching" render={(props) => <Page {...props} {...educationObject} />} />
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </>
            )}
          />
        </>
      </Router>
    );
  }
}


export default App;