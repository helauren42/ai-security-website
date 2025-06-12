import { useEffect } from 'react'
import '../CSS/Capabilities.css'
import { ReactComponent as AugmentedReality } from '../IMAGES/undraw_augmented-reality_3ie0.svg'
import { ReactComponent as CloudSync } from '../IMAGES/undraw_cloud-sync_h1ig.svg'
import { ReactComponent as DocumentSearch } from '../IMAGES/undraw_document-search_2o7x.svg'

export const Capabilities = () => {
  return (
    <section className='tc-wrapper'>
      <h1 className="section-title trip-card-title">Level up your security with intelligent surveillance and threat detection</h1>
      <section className="trip-card-section">
        <div className="cards-cont">
          <div className="classic-trip-card simple-glass">
            <div className="capabilities">
              <h2>Context Aware Threat Detection</h2>
              <p>Identify suspicious behavior patterns like loitering, group formation, and face-covering before an incident unfolds.
              </p>
            </div>
            <div className="img-cont">
              <AugmentedReality className='capability-img' />
            </div>
          </div>
          <div className="classic-trip-card simple-glass-invert">
            <div className="capabilities">
              <h2>Real Time Alerts and Incident Logging</h2>
              <p>Trigger smart notifications when critical thresholds are crossed. Events are logged with contextual metadata for instant review and response.
              </p>
            </div>
            <div className="img-cont">
              <CloudSync className='capability-img' />
            </div>
          </div>
          <div className="classic-trip-card simple-glass">
            <div className="capabilities">
              <h2>Searchable Surveillance with AI Summaries</h2>
              <p>Find key footage using natural language. Instantly retrieve clips that match queries like “Somebody with a black bag fighting.”
              </p>
            </div>
            <div className="img-cont">
              <DocumentSearch className='capability-img' />
            </div>
          </div>
        </div>
      </section >
    </section>
  )
}
