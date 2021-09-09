<<<<<<< HEAD
import React, { Component } from 'react';
import Profile from './components/Profile';
import Intro from './components/Intro/Wrapper';
import Basic from './components/Basic/Wrapper';
import Project from './components/Project/Wrapper';
import Skill from './components/Skill/Wrapper';
import Footer from './components/Footer';
import Modal from './components/Modal'
import { resume } from './resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = resume;
  }
  render() {
    return (
      <div className="App">
        <Profile data={this.state.profiles}></Profile>
        <Intro data={this.state.intro}></Intro>
        <Skill data={this.state.skills}></Skill>
        <Project data={this.state.projects}></Project>
        <Basic data={this.state.educations}></Basic>
        <Basic data={this.state.reserchs}></Basic>
        <Basic data={this.state.awards}></Basic>
        <Basic data={this.state.certificates}></Basic>
        <Footer></Footer>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}

export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> a29bf41298dd5ec442e45189d477d69b2c744df5
