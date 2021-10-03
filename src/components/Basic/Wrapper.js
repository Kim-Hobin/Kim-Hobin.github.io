import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import Left from './Left';
import Right from './Right';

class Basic extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <div className={styles.Wrapper}>
                <Left title={tag.left_title} subtitle={tag.left_subtitle} add={tag.left_add}></Left>
                <Right title={tag.right_title} subtitle={tag.right_subtitle} content={tag.right}></Right>
            </div>
        ))
        return (
            <section className={styles.Basic}>
                <h2>{data.subject}</h2>
                <div className={styles.border_top}></div>
                <div className={styles.border_bot}></div>
                {tags}
            </section>
        )
    }
}

export default Basic;