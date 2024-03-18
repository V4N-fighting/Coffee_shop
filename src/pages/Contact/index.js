import images from '~/assets/images';
import Poster from '~/Component/Poster';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div>
            <Poster half posterName="contact" img={images.contactBack} />
            <ContactForm />
        </div>
    );
}

export default Contact;
