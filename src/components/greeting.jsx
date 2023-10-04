import Portrait from '../img/niko.jpg';
import Nebula from '../img/purple_nebula_bg.png';
import ArrowDown from '../img/arrow_down.svg'
import { useState } from 'react';

const Greeting = () => {
    const [showScroll, setShowScroll] = useState(true);

    function showHideScroll() {
        const pos = window.scrollY;
        if (pos > 30) {
            setShowScroll(false);
            return;
        }
        setShowScroll(true);
        return;
    }

    function debounce(callback, wait) {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    }

    window.addEventListener("scroll", debounce(showHideScroll, 500));
    
    function scrollDown() {
        window.scrollTo({
            top: window.innerHeight + 1,
            left: 0,
            behavior: "smooth",
        });
    }

    return(
        <section className="intro-container">
            <div className="background-contain">
                <img className='greeting-bg' src={Nebula} alt="Scrolling Background" />
                <img className='greeting-bg' src={Nebula} alt="Scrolling Background" />
                <img className='greeting-bg' src={Nebula} alt="Scrolling Background" />
            </div>
        <div className="introContentWrap">
            <div className="portrait">
                <img src={Portrait} alt="Portrait"/>
            </div>
            <div className="introTextContainer">
                <h1 className="greeting">
                    Hello!
                </h1>
                <h2>
                    My name is Nijee Greene! Welcome to my personal portfolio site!
                </h2>
            </div>
        </div>
        {showScroll &&
            <button onPointerDown={scrollDown} className="scrollDown">
                <img src={ArrowDown} /> Scroll Down <img src={ArrowDown} />
            </button>
        }
    </section>
    )
}

export default Greeting;