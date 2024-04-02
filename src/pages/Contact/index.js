import images from '~/assets/images';
import Poster from '~/Component/Poster';
import SignIn from '~/Component/SignIn';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div>
            <Poster half posterName="contact" img={images.contactBack} />
            <ContactForm />
            <SignIn />
        </div>
    );
}

export default Contact;
