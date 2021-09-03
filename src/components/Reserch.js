import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Reserch extends Component {
    render() {
      return (
        <section className={styles.Part}>
          <h2>Reserch</h2>
          <div>
            <span className={styles.width_left}>
              <h3>광학음악시스템</h3>
              <p>2012.12.12 ~ 2012.13.13</p>
            </span>
            <span className={styles.width_right}>
              <h5>한국지능시스템학회</h5>
              <p>asdadasd</p>
              <li>asdasdad</li>
              <li>asdasdad</li>
              <li>asdasdad</li>
            </span>
          </div>
        </section>
      )
    }
  }

  export default Reserch;