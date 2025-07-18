import '../CSS/Brief.css'
export const Brief = () => {
  return (
    <section className='page-section' id="section-brief">
      <div id="brief-cont">
        <h1 className="section-title" id="brief-title" > The Novatus Solution</h1 >
        <p className='classic-paragraph' id="brief-paragraph">Novatus transforms passive surveillance into real time video intelligence.
          The Novatus AI software analyses and interprets the video data. Detecting early threats, understanding context, and delivering instant actionable insight. Plug the solution into any existing video surveillance systen and let Novatus do the rest.<br />
        </p>
        <div id="how-it-works">
          <h2 className='section-title'>Novatus will interpret, act and search</h2>
          <div id="mini-trip-cards-section">
            <div className='mini-trip-card simple-glass'>
              <h3 className='minitrip-title' >Interpret</h3>
              <p className='minitrip-p' >AI detects context, behavior, and anomalies</p>
            </div>
            <div className='mini-trip-card simple-glass'>
              <h3 className='minitrip-title' >Act</h3>
              <p className='minitrip-p' >Alerts and summaries are generated instantly</p>
            </div>
            <div className='mini-trip-card simple-glass'>
              <h3 className='minitrip-title' >Search</h3>
              <p className='minitrip-p' >Retrieve footage using natural language or filters</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
