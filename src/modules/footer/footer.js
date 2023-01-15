import './footer.css';
import { SOCIALMEDIA } from './social-list';

function Footer() {
  return (
    <footer className='footer'>

      <div class="footer-centre">
        © Copyright
        <script>document.write(new Date().getFullYear())</script>. Made by
        <a href="https://anvianvi.github.io/portfolio/">Pavel Viarbitski</a>
      </div>

      <div className='footer-social'>

        {SOCIALMEDIA.map((media) => (
          <a href={media.link} target="_blank" rel="noreferrer" className='foter-link-svg'>
            <img src={media.img} alt="social media icon"/>
          </a>
        ))}

      </div>

    </footer>
  );
}

export default Footer;   
