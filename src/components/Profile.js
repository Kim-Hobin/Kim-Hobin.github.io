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
                    <div className={styles.contact}>
                        <a className={styles.SpinButton}>
                            <i class="fab fa-github"></i>
                        </a>
                        <a className={styles.SpinButton}>
                            <i class="fab fa-github"></i>
                        </a>
                        <a className={styles.SpinButton}>
                            <i class="fab fa-github"></i>
                        </a>
                        <a className={styles.SpinButton}>
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </header >
        )
    }
}

export default Profile;