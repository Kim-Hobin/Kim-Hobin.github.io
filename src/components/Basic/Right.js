import React, { Component } from 'react';
import styles from '../../styles.module.scss';

class Right extends Component {
    render() {
        var content = this.props.content;
        const tags = content.map((tag) => (
            <li>{tag}</li>
        ))
        return (
            <span className={styles.width_right}>
                <h5>{this.props.title}</h5>
                <p>{this.props.subtitle}</p>
                {tags}
            </span>
        );
    }
}

export default Right;