import NJITLogo from '../img/NJIT_logo.png';
import HCCCLogo from '../img/hccc_logo.png';
import HobbyList from './HobbyList';

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
                <p>I am a passionate and adaptable software developer with a strong appetite for learning and growth. 
                    My open-mindedness and motivation drive me to continually explore new horizons in the world of technology. 
                    I thrive on constructive criticism as it fuels my commitment to delivering exceptional work.
                    <br />
                    I'm a graduate of the New Jersey Institute of Technology's 
                    computer science program. I have been coding acadmeically and
                    independently for close to a decade.
                    </p>
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
                        <img className="edu-logo" src={NJITLogo} alt="Logo" />
                    </div>
                    <p>Major - Computer Science</p>
                    <p>GPA: 3.84</p>
                </div>

                <div className="edu-wrap">
                    <div className="edu-info-wrap">
                        <h1 className="education-header">
                            Hudson County Community College
                        </h1>
                        <img className="edu-logo" src={HCCCLogo} alt="Logo" />
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
                <HobbyList />
            </article>
        </div>
    </section>
    )
};

export default About;