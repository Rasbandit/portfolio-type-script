import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import webDevObject from './projectObjects/webDev';
import adobeObject from './projectObjects/adobe';
import educationObject from './projectObjects/education';

import Home from './components/Home';
import Nav from './components/Nav';
import Page from './components/Page';
import About from './components/About';

import splashImg from './assets/work/splash.jpg';
import splash from './assets/videos/background.m4v';

import { setSize } from './logic/logic'

import './scss/App.scss'


class App extends Component<{}, { showNav: boolean }> {
  constructor(props: object) {
    super(props);

    setSize()

    this.state = {
      showNav: false
    }
  }

  toggleNav = (showNav = !this.state.showNav) => {
    this.setState({ showNav })
  }

  componentDidMount = () => {
    window.addEventListener('resize', setSize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', setSize)
  }

  render() {
    return (
      <Router>
        <>
          <div className="splash">
            <video src={splash} poster={splashImg} autoPlay loop></video>
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
                        <Route exact path="/education" render={(props) => <Page {...props} {...educationObject} />} />
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