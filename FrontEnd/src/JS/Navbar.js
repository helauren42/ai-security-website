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

export const Navbar = ({ tabletDisplay }) => {
  return (
    <nav >
      <section id="navbar">
        <h1 className='std-hover-active' id="nav-title" > Novatus</h1 >
        {tabletDisplay ? <TabletMenu /> : <ClassicMenu />}
        <button className='classic-btn std-hover-active' id="service-btn">Request demo</button>
      </section>
    </nav >
  )
}
