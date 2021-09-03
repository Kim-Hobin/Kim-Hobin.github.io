import styles from '../../styles.module.scss';
import React, {Component} from 'react';

class Left extends Component {
  render() {
    return (
        <span className={styles.width_left}>
            <h3>{this.props.title}</h3>
            <p>{this.props.subtitle}</p>
        </span>
    );
  }
}

export default Left;