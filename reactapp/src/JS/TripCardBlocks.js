import { useEffect } from 'react'
import '../CSS/TripCardBlocks.css'
import blackBagFigthingImg from '../IMAGES/black-bag-fighting.png'

export const Capabilities = ({ screenWidth }) => {
  useEffect(() => {
    const cards = document.getElementsByClassName("capabilities")
    let maxHeight = 0
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.height = 'auto'
      const height = cards[i].clientHeight
      if (maxHeight < height)
        maxHeight = height
    }
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.height = `${maxHeight * 1.12}px`
    }
  }, [screenWidth])
  return (
    <section className='page-section tc-wrapper'>
      <section className="trip-card-section">
        <h1 className="trip-card-title">Level up your security with intelligent surveillance and threat detection</h1>
        <div className="cards-cont">
          <div className="classic-trip-card capabilities">
            <div className="tc-text">
              <h2>Context Aware Threat Detection</h2>
              <p>Identify suspicious behavior patterns like loitering, group formation, and face-covering before an incident unfolds.
              </p>
            </div>
            <div className="tc-image">
            </div>
          </div>
          <div className="classic-trip-card capabilities">
            <div className="tc-text">
              <h2>Real Time Alerts and Incident Logging</h2>
              <p>Trigger smart notifications when critical thresholds are crossed. Events are logged with contextual metadata for instant review and response.
              </p>
            </div>
            <div className="tc-image">
              <img />
            </div>
          </div>
          <div className="classic-trip-card capabilities">
            <div className="tc-text">
              <h2>Searchable Surveillance with AI Summaries</h2>
              <p>Find key footage using natural language. Instantly retrieve clips that match queries like “Somebody with a black bag fighting”
              </p>
            </div>
            <div className="tc-image">
              <img />
            </div>
          </div>
        </div>
      </section >
    </section>
  )
}
