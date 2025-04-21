import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <h2>User CRUD App</h2>
      <div>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>Add User</Link>
      </div>
    </div>
  );
};

export default Navbar;