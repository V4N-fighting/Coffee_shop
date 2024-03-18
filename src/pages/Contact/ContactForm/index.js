import images from '~/assets/images';
import Button from '~/Component/Button';
import './ContactForm.scss';

function ContactForm() {
    return (
        <div className="contact-form">
            <div className="wrapper">
                <div className="contain">
                    <div className="contact-img" style={{ backgroundImage: `url(${images.contact})` }}></div>
                    <div className="contact-content">
                        <h3 className="title">Say Hello</h3>
                        <p className="descr">
                            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="contact-inputs">
                            <div className="contact-inputs-info">
                                <div className="contact-inputs-item">
                                    <label className="lable">Name</label>
                                    <input placeholder="Name" />
                                </div>
                                <div className="contact-inputs-item">
                                    <label className="lable">Email</label>
                                    <input placeholder="Email" />
                                </div>
                            </div>
                            <div className="contact-inputs-message">
                                <label className="lable">Message</label>
                                <textarea className="message" rows="4" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="button-box">
                            <Button primary icon style={{ textTransform: 'capitalize' }}>
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
