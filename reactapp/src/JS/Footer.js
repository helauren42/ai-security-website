import '../CSS/Footer.css'
import linkedInIcon from '../ICONS/icons8-linkedin.svg'
import YoutubeIcon from '../ICONS/icons8-youtube.svg'
import InstagramIcon from '../ICONS/icons8-instagram.svg'
export const Footer = () => {
  return (
    <section className='page-section' id='footer-section'>
      <footer>
        <div id="company-socials">
          <div id="company">
            <h1 id="title">Novatus</h1>
            <h4>©Novatus 2025</h4>
          </div>
        </div>
        <ul id="links">
          <li className="std-hover-active footer-links">Contact us</li>
          <li className="std-hover-active footer-links">About us</li>
          <li className="std-hover-active footer-links">Privacy policy</li>
          <li className="std-hover-active footer-links">Terms of service</li>
        </ul>
        <div id="social-media">
          <h1 id="follow-us">Follow us</h1>
          <div id="social-links">
            <img src={linkedInIcon} title='LinkedIn'></img>
            <img src={YoutubeIcon} title='Youtube'></img>
            <img src={InstagramIcon} title='Instagram'></img>
          </div>
        </div>
      </footer>
    </section>
  )
}
