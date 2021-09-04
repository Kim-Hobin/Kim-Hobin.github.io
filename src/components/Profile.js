import React, { Component } from 'react';
import styles from '../styles.module.scss';

class Profile extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <div><span>{tag.title}</span><p>{tag.desc}</p></div>
        ))

        return (
            <header>
                <div>
                    <img src='profile.jpg'></img>
                    <h1>{data.name}</h1>
                    <h3>{data.intro}</h3>
                    <a>T1</a>
                    <a>T2</a>
                    <a>T3</a>
                    <a>T4</a>
                </div>
            </header >
        )
    }
}

export default Profile;