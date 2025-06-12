import { useState, useEffect } from 'react';
import '../CSS/Navbar.css'

const ClassicMenu = ({ setOpenMenu }) => {
  return (
    <ul className='nav-menu' id="nav-menu-classic">
      <li className="std-hover-active">Platform</li>
      <li className="std-hover-active">Faq</li>
      <li className="std-hover-active">Careers</li>
    </ul>
  )
}

const TabletMenu = ({ openMenu, setOpenMenu }) => {
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
      <div id="navbar" className='neutral-glass'>
        <div id="nav-title-cont">
          <h1 className='std-hover-active' id="nav-title" >{screenWidth < 490 ? "N" : "Novatus"}</h1 >
        </div>
        <div id="nav-menu-cont">
          {screenWidth < 920 ? <TabletMenu openMenu={openMenu} setOpenMenu={setOpenMenu} /> : <ClassicMenu setOpenMenu={setOpenMenu} />}
        </div>
        <div id="nav-btn-cont">
          <button className='classic-btn std-hover-active' id="navbar-demo">{screenWidth < 600 ? "Demo" : "Request demo"}</button>
        </div>
      </div>
      {openMenu && (<div id="dropdown-menu-cont">
        <button className=" dropdown-btn" onClick={() => {
          setOpenMenu(false)
        }}><p>Platform</p></button>
        <button className=" dropdown-btn" onClick={() => {
          setOpenMenu(false)
        }}><p>Faq</p></button>
        <button className=" dropdown-btn" onClick={() => {
          setOpenMenu(false)
        }}><p>Careers</p></button>
      </div >
      )
      }
    </section>
  )
}
