import '../CSS/Brief.css'
export const Brief = () => {
  return (
    <section id="section-brief">
      <div id="brief-cont">
        <h1 id="brief-title" > The Novatus Solution</h1 >
        <p className='classic-paragraph' id="brief-paragraph">Novatus transforms passive surveillance into real time video intelligence.<br />
          The Novatus AI software analyses and interprets the video data.<br /> Detecting early threats, understanding context, and delivering instant actionable insight.<br />
        </p>
        <div id="how-it-works">
          <h2 id="how-it-works-title">Plug the solution into any existing video surveillance system and have Novatus, interpret, act and search</h2>
          <div id="mini-trip-cards-section">
            <div className='mini-trip-card'>
              <h3>Interpret</h3>
              <p>AI detects context, behavior, and anomalies</p>
            </div>
            <div className='mini-trip-card'>
              <h3>Act</h3>
              <p>Alerts and summaries are generated instantly</p>
            </div>
            <div className='mini-trip-card'>
              <h3>Search</h3>
              <p>Retrieve footage using natural language or filters</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
