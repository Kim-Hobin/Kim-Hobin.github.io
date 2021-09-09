import React, { Component } from 'react';
import styles from '../styles.module.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        };
    }
    changeImage = (index) => {
        this.setState({
            index: index
        })
    }

    render() {
        const image = this.props.images[this.state.index]; // Gallary Image
        const cnt = this.props.images.length; // 이미지 개수        
        const images = this.props.images.map((image, index) => { // 썸네일 이미지
            if (index === this.state.index) { // 썸네일 이미지 : Gallary
                var ClassName = styles.CurrentImage;
            }
            return (
                <button className={ClassName} onClick={() => this.changeImage(index)}>
                    <img className={styles.ImageView} src={image}></img>
                </button>
            )
        })
        return (
            <div className={styles.Modal} onClick={this.props.close}>
                <section onClick={(e) => e.stopPropagation()}> {/*모달 영역 클릭시 닫히지않도록 설정*/}
                    <header>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.subtitle}</p>
                    </header>
                    <div>
                        <div className={styles.Arrow}>
                            <i class="fas fa-arrow-alt-circle-left" onClick={() => this.changeImage(((this.state.index - 1) + cnt) % cnt)}></i>
                        </div>
                        <div className={styles.Gallary}>
                            <img src={image}></img>
                        </div>
                        <div className={styles.Arrow}>
                            <i class="fas fa-arrow-alt-circle-right" onClick={() => this.changeImage(((this.state.index + 1) + cnt) % cnt)}></i>
                        </div>
                    </div>
                    <footer>
                        {images}
                    </footer>
                </section >
            </div >
        )
    }
}

export default Modal;