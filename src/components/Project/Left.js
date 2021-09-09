import styles from '../../styles.module.scss';
import React, { Component } from 'react';

class Left extends Component {
  render() {
    return (
      <div className={styles.width_left}>
        <h5>{this.props.subtitle}</h5>
        <p>{this.props.add}</p>
      </div>
    );
  }
}

export default Left;