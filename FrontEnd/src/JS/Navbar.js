import { useState, useEffect } from 'react';
import '../CSS/Navbar.css'
import { ReactComponent as SendEmailSvg } from "../ICONS/send.svg"

const ClassicMenu = ({ setOpenMenu }) => {
  useEffect(() => {
    const elem = document.getElementById("dropdown-menu-cont")
    elem.style.display = "none"
    setOpenMenu(false)
  })
  return (
    <ul className='nav-menu' id="nav-menu-classic">
      <li className="std-hover-active">Platform</li>
      <li className="std-hover-active">Faq</li>
      <li className="std-hover-active">Careers</li>
    </ul>
  )
}

const TabletMenu = ({ openMenu, setOpenMenu }) => {
  useEffect(() => {
    console.log("openMenu: ", openMenu)
    const elem = document.getElementById("dropdown-menu-cont")
    if (openMenu)
      elem.style.display = "block"
    else
      elem.style.display = "none"
  }, [openMenu])
  return (
    <div id="dropdown">
      <button className='std-hover-active nav-menu' id="nav-menu-tablet" onClick={() => setOpenMenu(!openMenu)}> Menu
      </button >
    </div>
  );
};

export const Navbar = ({ screenWidth, tabletDisplay }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <section id="navbar-cont">
      <div id="navbar">
        <div id="nav-title-cont">
          <h1 className='std-hover-active' id="nav-title" >{screenWidth < 490 ? "N" : "Novatus"}</h1 >
        </div>
        <div id="nav-menu-cont">
          {screenWidth < 920 ? <TabletMenu openMenu={openMenu} setOpenMenu={setOpenMenu} /> : <ClassicMenu setOpenMenu={setOpenMenu} />}
        </div>
        <div id="nav-btn-cont">
          <button className='classic-btn std-hover-active' id="navbar-demo">{screenWidth < 600 ? "Demo" : "Request demo"}</button>
        </div>
        <div id="dropdown-menu-cont">
          <div id="dropdown-menu" >
            <button className="std-hover-active dropdown-btn" onClick={() => {
              setOpenMenu(false)
            }}>Platform</button>
            <button className="std-hover-active dropdown-btn" onClick={() => {
              setOpenMenu(false)
            }}>Faq</button>
            <button className="std-hover-active dropdown-btn" onClick={() => {
              setOpenMenu(false)
            }}>Careers</button>
          </div >
        </div>
      </div>
    </section>
  )
}
