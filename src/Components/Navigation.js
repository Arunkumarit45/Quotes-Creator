import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navigation() {

  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  return (
        <nav className='nav-bar'>
        
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