import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/data';


function Navbar() {

    const {activeMenu, setActiveMenu, screenSize, setScreenSize} = useState();

    const handleCloseNavBar = () => {
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }
        // Resize function for size modification detection
        useEffect(() => {
          const handleResize = () => setScreenSize(window.innerWidth);
  
          window.addEventListener('resize', handleResize)
  
          handleResize();
  
          return() => window.removeEventListener('resize', handleResize);
        }, [setScreenSize]);

        // Hide Menu when screenSize is <= 900 function
      useEffect(() => {
        if(screenSize <= 900) { 
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      },[screenSize]);

    //   NAV BUTTON
      const NavButton = ({color}) => (
        <TooltipComponent>
            <button onClick={handleCloseNavBar}>
                
            </button>
        </TooltipComponent>
      );



  return (
    <div>
        {/* LINKS */}
        <NavButton>
            {links.map((link) => (
                <div key={link.name}>
                    <NavLink to={link.linkto} 
                    key={link.name}
                    onClick={()=>{}}
                    >
                    {link.icon}
                    <span className='capitalize'>
                        {link.name}
                    </span>
                    </NavLink>
                </div>
            ))}
        </NavButton>
    </div>

  )
}

export default Navbar