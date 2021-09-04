import styles from '../../styles.module.scss';
import React, { Component } from 'react';

class Right extends Component {
  render() {
    var content = this.props.content;
    console.log(content);
    const tags = content.map((tag) => (
      <li>{tag}</li>
    ))

    return (
      <div className={styles.width_right}>
        <h5>{this.props.title}</h5>
        <p>{this.props.subtitle}</p>
        {tags}
      </div>
    );
  }
}

export default Right;