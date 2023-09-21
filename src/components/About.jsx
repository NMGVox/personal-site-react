const About = () => {
    return (
        <section className="about-section">
        <h2 className="section-header">
            About Me
        </h2>
        <div className="about-wrapper">
            <article className="about-element">
                <h3 className="about-element-header">
                    Who am I?
                </h3>
                <p>I am a versatile developer, comfortable with blah blah</p>
            </article>
            <span className="divider"></span>
            <article className="about-element">
                <h3 className="about-element-header">
                    Education
                </h3>
                <div className="edu-wrap">
                    <div className="edu-info-wrap">
                        <h1 className="education-header">
                            New Jersey Institute of Technology
                        </h1>
                        <img className="edu-logo" src="./images/njit logo_0.png" alt="Logo" />
                    </div>
                    <p>Major - Computer Science</p>
                    <p>GPA: 3.84</p>
                </div>

                <div className="edu-wrap">
                    <div className="edu-info-wrap">
                        <h1 className="education-header">
                            Hudson County Community College
                        </h1>
                        <img className="edu-logo" src="./images/hccc_logo.png" alt="Logo" />
                    </div>
                    <p>Major - Computer Technology</p>
                    <p>GPA: 3.8</p>
                </div>
            </article>
            <span className="divider"></span>
            <article className="about-element">
                <h3 className="about-element-header">
                    Hobbies
                </h3>
                <p>When I'm not programming, I'm indulging in one of the many hobbies below:</p>
                <ul className="hobby-list">
                    <li>Making 3D animations</li>
                    <li>Listening to music</li>
                    <li>All things football</li>
                    <li>Badminton</li>
                    <li>Gaming</li>
                    <li>Photography</li>
                </ul>
            </article>
        </div>
    </section>
    )
};

export default About;