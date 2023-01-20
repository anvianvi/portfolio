import './contacts.css';
import MailMeForm from './mail-me-form';

function Contacts() {

  return (
    <section className='contacts' id='contacts'>
      <div className='content-wrapper'>
        <h2 className='h2'>Contact Me</h2>
        <div className='contacts-text'>You can easily get in touch with me by completing the form below and submitting it. I will respond to your message as soon as as possible.</div>
        <div className='mail-me-wrapper'>
          <MailMeForm />
        </div>
      </div>

    </section >
  );
}

export default Contacts;   
