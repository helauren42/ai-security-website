import { useState, useEffect } from 'react';
import '../CSS/Navbar.css'

const ClassicMenu = () => {
  return (
    <ul className='nav-menu' id="nav-menu-classic">
      <li className="std-hover-active">Platform</li>
      <li className="std-hover-active">Faq</li>
      <li className="std-hover-active">Careers</li>
    </ul>
  )
}

const TabletMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    console.log("openMenu: ", openMenu)
    const elem = document.getElementById("dropdown-menu")
    if (openMenu)
      elem.style.display = "block"
    else
      elem.style.display = "none"
  }, [openMenu])
  return (
    <div id="dropdown">
      <button className='nav-menu' id="nav-menu-tablet" onClick={() => setOpenMenu(!openMenu)}> Menu
      </button >
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
  );
};

export const Navbar = ({ screenWidth, tabletDisplay }) => {
  return (
    <section id="navbar">
      <div id="nav-title-cont">
        <h1 className='std-hover-active' id="nav-title" >{screenWidth < 450 ? "N" : "Novatus"}</h1 >
      </div>
      <div id="nav-menu-cont">
        {tabletDisplay ? <TabletMenu /> : <ClassicMenu />}
      </div>
      <div id="nav-btn-cont">
        <button className='classic-btn std-hover-active' id="navbar-demo">{screenWidth < 450 ? "Demo" : "Request demo"}</button>
      </div>
    </section>
  )
}
