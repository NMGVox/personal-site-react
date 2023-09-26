import GHLogo from '../img/github.svg';
import FBLogo from '../img/facebook.svg';
import EmailLogo from '../img/email.svg';
import PhoneLogo from '../img/phone.svg';
import LNLogo from '../img/linkedin.svg';
import LinksLogo from '../img/link.svg';

const ContactMe = () => {
    return (
        <section className="about-section" id="contact">
            <h2 className="section-header">
                Contact Me!
            </h2>
            <div className="contact-wrapper">
                <h2>Interested in connecting with me? Have an question or an oppurtunity? Want to say hi? Send me a message!</h2>
                <div className="form-wrapper" id="contact-form">
                    <div className="form-row">
                        <img className="contact-type" src={EmailLogo} alt="Email Address" />
                        <p className="contact-text">nijeemgreene@gmail.com</p>
                    </div>
                    <div className="form-row">
                        <img className="contact-type" src={PhoneLogo} alt="Telphone Number" />
                        <p className="contact-text">Available on request!</p>
                    </div>
                    <div className="form-row">
                        <img className="contact-type" src={LinksLogo} alt="Links" />
                        <div className="icon-contact-conainer">
                            <a href="https://www.linkedin.com/in/nijee-greene-375723206/">
                                <img className="contact-link" src={LNLogo} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/NMGVox">
                                <img className="contact-link" src={GHLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/nijee-greene-375723206/">
                                <img className="contact-link" src={FBLogo} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactMe;