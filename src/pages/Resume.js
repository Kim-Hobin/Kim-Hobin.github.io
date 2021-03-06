import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import Intro from '../components/Intro/Intro';
import Main from '../components/Main/Wrapper';
import Skill from '../components/Skill/Wrapper';
import Footer from '../components/Footer/Footer';
import GoToTop from '../components/Scroll/GoToTop';
import FadeIn from '../components/Scroll/FadeIn';
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
                <GoToTop></GoToTop>
                <Profile data={this.state.profiles}></Profile>
                <Intro data={this.state.intro}></Intro>
                <FadeIn></FadeIn>
                <Skill data={this.state.skills}></Skill>
                <Main data={this.state.experience}></Main>
                <Main data={this.state.projects}></Main>
                <Main data={this.state.reserchs}></Main>
                <Main data={this.state.educations}></Main>
                <Main data={this.state.awards}></Main>
                <Main data={this.state.certificates}></Main>
                <Footer></Footer>
            </div>
        );
    }
}


export default Resume;