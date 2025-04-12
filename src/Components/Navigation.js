import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {

  const navigate = useNavigate();
  const location  =useLocation();
  const token = sessionStorage.getItem('token');

  const isScrollable = location.pathname === '/quotes';

  const [scrollup,setScrollup]=useState(true);
  const [lastScrollY,setLastScrollY]=useState(window.scrollY);

  const handlescroll = () => {

    if(window.scrollY < lastScrollY){
      setScrollup(true);
    }else if(window.scrollY > lastScrollY) {
      setScrollup(false);
    }

    setLastScrollY(window.scrollY);

  }

  useEffect(()=>{
    
    if(isScrollable){
      window.addEventListener('scroll',handlescroll);
    }

    return ()=> window.removeEventListener('scroll',handlescroll);
    // eslint-disable-next-line
  }, [lastScrollY,location.pathname] )

  useEffect(()=>{setScrollup(true)},[location.pathname]);
  
  return (
        <nav className={`nav-bar ${isScrollable && !scrollup ?'hide':''}`}>
        
          <div className="nav-title">Quotes Create App</div>

          {token && (
            
            <button className="logout-btn"
                    onClick={() => {
                              sessionStorage.clear();
                              navigate('/');
            }}>
            Logout
            </button>

          )}

        </nav>
  )
}

export default Navigation;