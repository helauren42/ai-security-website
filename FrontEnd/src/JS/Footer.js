import '../CSS/Footer.css'
import { ReactComponent as LinkedInIcon } from '../ICONS/icons8-linkedin-black.svg'
import { ReactComponent as YoutubeIcon } from '../ICONS/icons8-youtube-black.svg'
import { ReactComponent as InstagramIcon } from '../ICONS/icons8-instagram-black.svg'
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
        <div id="links-cont">
          <ul id="links">
            <li className="std-hover-active footer-links">Contact us</li>
            <li className="std-hover-active footer-links">About us</li>
            <li className="std-hover-active footer-links">Privacy policy</li>
            <li className="std-hover-active footer-links">Terms of service</li>
          </ul>
        </div>
        <div id="social-media">
          <div id="social-media-subcont">
            <h1 id="follow-us">Follow us</h1>
            <div id="social-links">
              <div className="social-media-img-cont"><LinkedInIcon className="social-media-img" /></div>
              <div className="social-media-img-cont"><YoutubeIcon className="social-media-img" /></div>
              <div className="social-media-img-cont"><InstagramIcon className="social-media-img" /></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
