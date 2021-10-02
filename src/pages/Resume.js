import React, { Component } from 'react';
import Profile from '../components/Profile';
import Intro from '../components/Intro/Wrapper';
import Basic from '../components/Basic/Wrapper';
import Project from '../components/Project/Wrapper';
import Skill from '../components/Skill/Wrapper';
import Footer from '../components/Footer';
import { resume } from '../resume';
import styles from '../styles.module.scss';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = resume;
  }
  render() {
    return (
      <div className={styles.resume}>
        <Profile data={this.state.profiles}></Profile>
        <Intro data={this.state.intro}></Intro>
        <Skill data={this.state.skills}></Skill>
        <Project data={this.state.projects}></Project>
        <Basic data={this.state.reserchs}></Basic>
        <Basic data={this.state.educations}></Basic>
        <Basic data={this.state.awards}></Basic>
        <Basic data={this.state.certificates}></Basic>
        <Footer></Footer>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
export default Resume;