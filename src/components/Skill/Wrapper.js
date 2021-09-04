import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import Content from './Content';

class Skill extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <div className={styles.Category}>
                <h5>{tag.title}</h5>
                <Content content={tag.kind}></Content>
            </div>
        ))
        return (
            <section className={styles.Skill}>
                <h2>{data.subject}</h2>
                <div className={styles.border_top}></div>
                <div className={styles.border_bot}></div>
                {tags}
            </section>
        )
    }
}

export default Skill;