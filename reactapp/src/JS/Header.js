import '../CSS/Header.css'

export const Header = () => {
  return (
    <section className="section-container">
      <header>
        <div id="header-ghost"></div>
        <div id="main-text-cont">
          <p className="main-text">Your digital security operations center</p>
          <p className="main-text">Powered by AI</p>
        </div>
        <div id="second-text-cont">
          <p className="second-text">Search for footage like you search on google</p>
          <p className="second-text">Simply describe what you need and retrieve it</p>
        </div>
        <div id="header-btn-cont">
          <button className='classic-btn std-hover-active' id="service-btn">Our Services</button>
          <button className='classic-btn std-hover-active' id="plans-btn">See Plans</button>
        </div>
        <div id="header-bottom-line"></div>
      </header>
    </section >
  )
}
