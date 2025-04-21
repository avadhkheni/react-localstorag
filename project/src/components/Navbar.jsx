import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h2>User CRUD App</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/add">Add User</Link>
    </div>
  </div>
);

export default Navbar;