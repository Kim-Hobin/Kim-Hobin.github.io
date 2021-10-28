import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import fadeIn from './fadeIn.module.scss';
import { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

function FadeIn() {
    const [WinY, setWinY] = useState(0);
    const [InnerHeight, setInnerHeight] = useState(0);
    const fadeRef = useRef(null);
    const elem = ReactDOM.findDOMNode(fadeRef.current);
    if (elem) var top = elem.getBoundingClientRect().y;

    useEffect(() => {
        const onScroll = () => {
            setWinY(window.scrollY);
            setInnerHeight(window.innerHeight);
            if (elem) {
                elem.style.transition = 'transform 1s, opacity 1s';
                if (top > InnerHeight) {
                    elem.style.opacity = "0";
                    elem.style.transform = 'translateY(70px)';
                } else {
                    elem.style.opacity = "1";
                    elem.style.transform = 'translateY(0px)';
                }
            }
        };
        console.log(WinY, InnerHeight, top);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })

    return (
        <div>
            <div>
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
            </div>
            <div>
                <p>
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                    We are dancing. We are extra dancing. Try hard to achieve succeed. We will not try to go. Try hard succeed. Indeed so. Some women cry. This generator should succeed. This generator should be used and succeed. We will not go. Try hard to achieve everything you can succeed. We are extra cool everyday dancing. We are extra cool everyday dancing. Try hard to achieve everything you can succeed. This generator should be used and succeed. Try hard to achieve everything succeed. This generator should be used and succeed. We will not try to bow and go. We are dancing.
                </p>
            </div>
        </div>
    );
    // const [scrollTop, setScrollTop] = useState();
    // const [scrolling, setScrolling] = useState();

    // useEffect(() => {
    //     const onScroll = (e) => {
    //         setScrollTop(e.target.documentElement.scrollTop);
    //         setScrolling(e.target.documentElement.scrollTop > scrollTop);
    //     };
    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [scrollTop]);

    // useEffect(() => {
    //     console.log(scrollTop);
    // }, [scrollTop]);

    // return (
    //     <div>
    //     </div>
    // );
}



export default FadeIn;