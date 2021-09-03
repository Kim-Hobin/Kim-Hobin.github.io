import React, {Component} from 'react';
import styles from '../styles.module.scss';

class Profile extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<div><span>{data[i].title}</span><p>{data[i].desc}</p></div>);
            i = i + 1;
        }
        return (
            <header>
                <h2>Profile</h2>
                <div> 
                    <div className={styles.left}>
                    <img></img>
                    </div>
                    <div className={styles.right}>
                        {lists}
                    </div>
                </div>
            </header>
        )
    }
  }

  export default Profile;