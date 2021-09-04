import styles from '../../styles.module.scss';
import React, {Component} from 'react';

class Content extends Component {
    render(){
        const content = this.props.content;
        const tags = content.map((tag) => (
            <span>{tag.content}</span>
        ))
        return (
            <div>{tags}</div>
        )
    }
}

export default Content;