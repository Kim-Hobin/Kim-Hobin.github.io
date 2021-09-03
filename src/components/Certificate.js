import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Certificate extends Component {
    render() {
        return (
            <section className={styles.basic}>
                <h2>Certificate</h2>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>정보처리기사</p>
                        <p>한국뭐시기</p>
                    </span>
                </div>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>컴퓨터활용능력 1급</p>
                        <p>한국뭐시기</p>
                    </span>
                </div>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>리눅스 1급</p>
                        <p>한국뭐시기</p>
                    </span>
                </div>              
            </section>
      )
    }
  }

  export default Certificate;