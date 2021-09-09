import styles from '../../styles.module.scss';
import React, { Component } from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <section className={styles.Intro}>
                <h2>{data.subject}</h2>
                <div className={styles.border_top}></div>
                <div className={styles.border_bot}></div>
                <p>{data.content}</p>
            </section>
        )
    }
}

export default Content;