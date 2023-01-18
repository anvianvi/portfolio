import './contacts.css';
import { useForm, ValidationError } from '@formspree/react';

function MailMeForm() {
  const [state, handleSubmit] = useForm('xyyazjlo');
  if (state.succeeded) {
    return <div className='ths-mesage'>Your message has been successfully sent. I will respond as soon as possible. Thank you and best regards.</div>;
  }
  return (
    <form onSubmit={handleSubmit} className='mail-me-form'>
      <label htmlFor='email' className='mail-me-lable'>
        Email
      </label>
      <input
        id='email'
        type='email'
        name='email'
        required='' placeholder='Enter Your Email'
        className='mail-me-form-input'
      />
      <ValidationError
        prefix='Email'
        field='email'
        errors={state.errors}
      />
      <label htmlFor='message' className='mail-me-lable'>
        Message
      </label>
      <textarea
        id='message'
        name='message'
        required='' cols='55' rows='10'
        placeholder='Enter Your Message'
        className='mail-me-form-input'
      />
      <ValidationError
        prefix='Message'
        field='message'
        errors={state.errors}
      />
      <button type='submit' disabled={state.submitting} className='btn mail-me-btn'>
        Submit
      </button>
    </form>
  );
}

export default MailMeForm;
