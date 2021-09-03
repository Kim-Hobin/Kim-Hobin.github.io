import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Award extends Component {
    render() {
        return (
            <section className={styles.basic}>
                <h2>Awards</h2>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>코드챌린지 최우수상</p>
                        <p>ㅁㄴㅇㅁㄴㅇㅁㅇ</p>
                    </span>
                </div>
                <div>
                    <span className={styles.width_left}><h3>14.12 ~ 17. 17</h3></span>
                    <span className={styles.width_right}>
                        <p>백준 1등</p>
                        <p>쳐빠개죠?</p>
                    </span>
                </div>
            </section>
      )
    }
  }

  export default Award;