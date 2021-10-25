import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import footer from './footer.module.scss';
import { useState, useEffect } from 'react'

function Footer() {
    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 100) {
            // 100 이상이면 버튼이 보이게
            setBtnStatus(true);
        } else {
            // 100 이하면 버튼이 사라지게
            setBtnStatus(false);
        }
    }

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })

    return (
        <div className={footer.wrap}>
            <button

                className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
                onClick={handleTop}  // 버튼 클릭시 함수 호출
            >TOP</button>
            <div class="inner">
                <h1>Fixed Scroll Top</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas ratione libero earum alias, officia temporibus magni possimus atque rem distinctio autem unde eaque. Minus quaerat odio mollitia asperiores neque?
            </div>
        </div >
    );
}

// class Footer extends Component {
//     constructor(props) {
//         super(props);
//         const [ScrollY, setScrollY] = useState(0);

//     }

//     render() {
//         return (
//             <footer className={footer.Footer}>
//                 <div>
//                     <img id={this.test} src='footer/stamp.png'></img>
//                 </div>
//             </footer >
//         )
//     }
// }



export default Footer;