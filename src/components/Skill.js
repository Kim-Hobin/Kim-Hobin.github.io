import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Skill extends Component {
    render() {
        return (
            <section className={styles.Skill}>
                <h2>Skills</h2>
                <div>
                    <span>
                        <div>
                            <h5>Front-and</h5>
                            <span>html</span>
                            <span>css</span>
                            <span>JavaScrpit</span>
                        </div>
                    </span>
                    <span>
                        <div>
                            <h5>Back-and</h5>
                            <span>html</span>
                            <span>css</span>
                            <span>JavaScrpit</span>
                            
                        </div>
                    </span>
                    <span>
                        <div>
                            <h5>Database</h5>
                            <span>MySQL</span>
                            <span>MongoDB</span>
                        </div>
                    </span>
                </div>
            </section>
        )
    }
  }

  export default Skill;