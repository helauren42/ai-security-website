import '../CSS/CallToAction.css'
import { ReactComponent as SendEmailSvg } from "../ICONS/send.svg"

export const CallToAction = ({ screenWidth }) => {
  return (
    <section className="page-section" id="call-to-action">
      <div className="short-divider">
        <p className="minitrip-p" id="cta-title">Schedule a free call now to find how you will benefit from Novatus</p>
        <div className='classic-btn' id="cta-demo">
          <p id="cta-btn">Request demo</p>
          <SendEmailSvg id="send-email-svg" />
        </div>
      </div>
    </section>
  )
}
