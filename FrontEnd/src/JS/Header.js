import { useEffect } from 'react'
import '../CSS/Header.css'
import { ReactComponent as SendEmailSvg } from "../ICONS/send.svg"

export const Header = () => {
  return (
    <div className='page-section' id="header">
      <div id="header-ghost"></div>
      <div id="main-text-cont">
        <p className="main-text">Your digital security operations center</p>
      </div>
      <div className="classic-paragraph" id="second-text-cont">
        <p className="second-text">Real time awareness and insight, when and where it matters most.<br />An optimal video security system.</p>
      </div>
      <div className='classic-btn std-hover-active' id="service-btn-ctn">
        <p id="service-btn">Request demo</p>
        <SendEmailSvg id="send-email-svg" />
      </div>
    </div >
  )
}
