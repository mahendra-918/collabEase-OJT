import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Sidebar({ setUser }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear user data
      setUser(null);
      // Navigate to login page
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const sections = [
    {
      title: "Main",
      items: [
        { path: '/dashboard', icon: 'fas fa-home', label: 'Dashboard' },
        { path: '/projects', icon: 'fas fa-project-diagram', label: 'Projects' },
        { path: '/team', icon: 'fas fa-users', label: 'Team' },
      ]
    },
    {
      title: "Management",
      items: [
        { path: '/settings', icon: 'fas fa-cog', label: 'Settings' },
        { path: '/profile', icon: 'fas fa-user', label: 'Profile', onClick: () => navigate('/profile') },
        { path: '#', icon: 'fas fa-sign-out-alt', label: 'Logout', onClick: handleLogout }
      ]
    }
  ];

  return (
    <aside className="sidebar fixed">
      <div className="sidebar-header">
        <h2>CollabEase</h2>
      </div>
      <nav className="sidebar-nav">
        {sections.map((section, index) => (
          <div key={index} className="sidebar-section">
            <div className="sidebar-section-label">{section.title}</div>
            {section.items.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item${location.pathname === item.path ? ' active' : ''}`}
                onClick={item.onClick}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar; 