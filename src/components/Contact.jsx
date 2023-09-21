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
                    <img className="contact-type" src="./images/email.svg" alt="Email Address" />
                    <p className="contact-text">nijeemgreene@gmail.com</p>
                </div>
                <div className="form-row">
                    <img className="contact-type" src="./images/phone.svg" alt="Telphone Number" />
                    <p className="contact-text">Available on request!</p>
                </div>
                <div className="form-row">
                    <img className="contact-type" src="./images/link.svg" alt="Other links" />
                    <div className="icon-contact-conainer">
                        <a href="https://www.linkedin.com/in/nijee-greene-375723206/">
                            <img className="contact-link" src="./images/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/NMGVox">
                            <img className="contact-link" src="./images/github.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/nijee-greene-375723206/">
                            <img className="contact-link" src="./images/facebook.svg" alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default ContactMe;