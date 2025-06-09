import '../CSS/CallToAction.css'
import { ReactComponent as SendEmailSvg } from "../ICONS/send.svg"

export const CallToAction = () => {
  return (
    <section className="page-section" id="call-to-action">
      <div className="short-divider">
        <p id="cta-title">Schedule a free call now to find how you will benefit from Novatus</p>
        <div className='classic-btn std-hover-active' id="cta-demo">
          <p id="cta-btn">Request demo</p>
          <SendEmailSvg id="send-email-svg" />
        </div>
      </div>
    </section>
  )
}
