import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Basic extends Component {
    render() {
        return (
            <section className={styles.basic}>
                <h2>Education</h2>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>동서대학교 졸업</p>
                        <p>컴퓨터공학과 / 소프트웨어 전공 / AI공학 부전공 / 학점 : 4.17</p>
                    </span>
                </div>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>동서대학교 졸업</p>
                        <p>컴퓨터공학과 / 소프트웨어 전공 / AI공학 부전공 / 학점 : 4.17</p>
                    </span>
                </div>
            </section>
      )
    }
  }

  export default Basic;