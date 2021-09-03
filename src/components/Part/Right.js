import styles from '../../styles.module.scss';
import React, {Component} from 'react';

class Right extends Component {
  render() {
    var content = this.props.content;
    const hashs = content.map((hash) => (
      <li>{hash.content}</li>
    ))

    return (
        <span className={styles.width_right}>
            <h5>{this.props.title}</h5>
            <p>{this.props.subtitle}</p>
            {hashs}
        </span>
    );
  }
}

export default Right;