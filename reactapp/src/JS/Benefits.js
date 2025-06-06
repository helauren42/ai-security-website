import { useEffect } from 'react'
import "../CSS/Benefits.css"

export const Benefits = ({ screenWidth }) => {
  useEffect(() => {
    const cards = document.getElementsByClassName("card")
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
    <section className='page-section benefits-advantages-wrapper'>
      <section className="benefits-advantages-section">
        <h1 className="benefits-advantages-title">Leverage your current security system to its full potential</h1>
        <div className="cards-container">
          <div className="card">
            <h2>Save time and resources</h2>
            <p>Spend less time scrubbing through videos and be more focused on critical tasks</p>
          </div>
          <div className="card">
            <h2>Increased proactivity</h2>
            <p>Spot threats early and prevent escalation.</p>
          </div>
          <div className="card">
            <h2>Boost Operational Awareness</h2>
            <p>Receive detailed information on what is happening, in real time.</p>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <h2>Accurate diagnosis</h2>
            <p>Standard intelligent video security systems using pre-defined parameters fail to identify more complex behaviours and create false positives </p>
          </div>
          <div className="card">
            <h2>Save Time</h2>
            <p>Spend less time scrubbing through videos and be more focused on critical tasks</p>
          </div>
          <div className="card">
            <h2>Simplify Post-Event Analysis</h2>
            <p>Quickly retrieve the footage you are looking for</p>
          </div>
        </div>
      </section >
    </section >
  )
}
