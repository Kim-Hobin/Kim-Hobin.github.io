import styles from '../../styles.module.scss';
import React, { Component } from 'react';
import Modal from '../Modal';

class Right extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: null,
      modalOn: false
    }
  }
  // 모달의 상태 변경(index)
  test = (index) => {
    this.setState({
      imgIndex: index,
      modalOn: !this.state.modalOn
    });
  }
  render() {
    var content = this.props.content; // 내용
    const tags = content.map((tag) => (
      <li>{tag}</li>
    ))
    const images = this.props.images.map((image, index) => ( // projects-contents-images
      <img className={styles.ImageView} src={image} onClick={() => this.test(index)}></img> // () => : 인자전달, 바로 실행x
    ))

    return (
      <div className={styles.width_right}>
        <div>
          <h5>{this.props.title}</h5>
          <p>{this.props.subtitle}</p>
          {tags}
        </div>
        <div>
          {images}
        </div>
        {/* 이미지 클릭시 test()실행과 모달로 이미지의 src, index, 프로젝트 제목 전달*/}
        {this.state.modalOn && (<Modal index={this.state.imgIndex} close={() => this.test(null)} images={this.props.images} title={this.props.title} subtitle={this.props.subtitle}></Modal>)}
      </div>
    );
  }
}

export default Right;