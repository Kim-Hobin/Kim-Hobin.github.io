import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import skill from './skill.module.scss';
import Content from './Content';

class Skill extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <div className={skill.Category}>
                <h5>{tag.title}</h5>
                <Content content={tag.content}></Content>
            </div>
        ))
        return (
            <section className={skill.Skill}>
                <h2>{data.subject}</h2>
                <div className={styles.border_top}></div>
                <div className={styles.border_bot}></div>
                <div className={skill.flex}>
                    {tags}
                </div>
            </section>
        )
    }
}

export default Skill;