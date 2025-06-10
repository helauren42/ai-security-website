import { useEffect } from 'react'
import "../CSS/Benefits.css"

const DesktopBenefits = () => {
  return (
    <section className="benefits-advantages-desktop-section">
      <h1 className="section-title benefits-advantages-title">Leverage your current security system to its full potential</h1>
      <div className="cards-container">
        <div className="card">
          <h2 className='minitrip-title'>Accurate diagnosis</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Standard intelligent video securities fail to identify complex behaviours and create false positives</p>
          </div>
        </div>
        <div className="card">
          <h2 className='minitrip-title'>Save time and resources</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Spend less time scrubbing through videos and be more focused on critical tasks</p>
          </div>
        </div>
        <div className="card">
          <h2 className='minitrip-title'>Proactivity and oversight</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Spot threats early and prevent escalation. Receive detailed information on what is happening, in real time.</p>
          </div>
        </div>
      </div>
    </section >
  )
}
const TabletBenefits = () => {
  return (
    <section className="benefits-advantages-tablet-section">
      <div id="benefits-advantages-title-wrapper">
        <h1 className="section-title benefits-advantages-title">Leverage your current security system to its full potential</h1>
      </div>
      <div className="cards-container-tablet">
        <div className="card-tablet">
          <h2 className='minitrip-title'>Save time and resources</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Spend less time scrubbing through videos and be more focused on critical tasks</p>
          </div>
        </div>
        <div className="card-tablet">
          <h2 className='minitrip-title'>Accurate diagnosis</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Standard intelligent video securities fail to identify complex behaviours and create false positives </p>
          </div>
        </div>
        <div className="card-tablet">
          <h2 className='minitrip-title'>Proactivity and oversight</h2>
          <div className="card-p-cont">
            <p className='minitrip-p'>Spot threats early and prevent escalation. Receive detailed information on what is happening, in real time.</p>
          </div>
        </div>
        {/* <div className="card"> */}
        {/*   <h2>Simplify Post-Event Analysis</h2> */}
        {/*   <p>Quickly retrieve the footage you are looking for</p> */}
        {/* </div> */}
      </div>
    </section >
  )
}
export const Benefits = ({ screenWidth, mobileDisplay, tabletDisplay }) => {
  useEffect(() => {
    console.log("pre: ", "< 768")
    const cards = document.getElementsByClassName("card")
    let maxHeight = 0
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.height = 'auto'
      const height = cards[i].getBoundingClientRect().height
      if (maxHeight < height)
        maxHeight = height
    }
    console.log("mobileDisplay: ", mobileDisplay)
    if (mobileDisplay == undefined || mobileDisplay == true)
      return
    console.log("post: ", "> 768")
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.height = `${maxHeight * 1.12}px`
    }
  }, [screenWidth])
  return (
    <section className='page-section benefits-advantages-wrapper'>
      {screenWidth < 1024 ? <TabletBenefits /> : <DesktopBenefits />}
    </section >
  )
}
