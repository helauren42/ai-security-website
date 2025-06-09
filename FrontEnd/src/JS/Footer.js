import '../CSS/Footer.css'
import { ReactComponent as LinkedInIcon } from '../ICONS/icons8-linkedin-black.svg'
import { ReactComponent as YoutubeIcon } from '../ICONS/icons8-youtube-black.svg'
import { ReactComponent as InstagramIcon } from '../ICONS/icons8-instagram-black.svg'

export const Footer = () => {
  return (
    <footer className='page-section' id='footer-section'>
      <div id="footer-main">
        <div id="company-socials">
          <div id="company">
            <h1 id="title">Novatus</h1>
          </div>
          <div id="social-media">
            <div id="social-media-subcont">
              <div id="social-links">
                <div className="social-media-img-cont"><LinkedInIcon className="social-media-img" /></div>
                <div className="social-media-img-cont"><YoutubeIcon className="social-media-img" /></div>
                <div className="social-media-img-cont"><InstagramIcon className="social-media-img" /></div>
              </div>
            </div>
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
      </div>
      <div id="footer-bottom">
        <h4>©Novatus 2025</h4>
      </div>
    </footer >
  )
}
