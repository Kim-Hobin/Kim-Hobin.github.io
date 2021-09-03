import React, {Component} from 'react';
import styles from '../../styles.module.scss';
import Left from './Left';
import Right from './Right';

class Part extends Component {
    render() { 
      var data = this.props.data;
      const tags = data.map((tag) => (
        <div>
            <Left title={tag.left_title} subtitle={tag.left_subtitle}></Left>
            <Right title={tag.right_title} subtitle={tag.right_title} content={tag.right}></Right>
        </div>
      ))
      return (
        <section className={styles.Part}>
          <h2>Projects</h2>
          {tags}
        </section>
      )
    }
  }

  export default Part;