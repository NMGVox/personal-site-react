import Portrait from '../img/niko.jpg';

const Greeting = () => {
    return(
        <section className="intro-container">
        <div className="introContentWrap">
            <div className="portrait">
                <img src={Portrait} alt="Portrait"/>
            </div>
            <div className="introTextContainer">
                <h1 className="greeting">
                    ~~Hello!~~
                </h1>
                <h2>
                    My name is NMGVox! Welcome to my personal website!
                </h2>
            </div>
        </div>
    </section>
    )
}

export default Greeting;