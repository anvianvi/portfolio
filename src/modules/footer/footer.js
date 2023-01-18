import './footer.css';
import { SOCIALMEDIA } from './social-list';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container content-wrapper'>
        <div className='footer-centre'>
          © Copyright
          <script>document.write(new Date().getFullYear())</script>. Made by
          <a href='https://anvianvi.github.io/portfolio/' className='copyright-link'> Pavel Viarbitski</a>
        </div>

        <div className='footer-social'>
          {SOCIALMEDIA.map((media) => (
            <a href={media.link} target='_blank' rel='noreferrer' className='foter-social-link' key={media.id}>
              <img src={media.img} alt='social media icon' className='footer-social-link-img' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;   
