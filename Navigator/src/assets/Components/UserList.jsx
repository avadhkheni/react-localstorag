import { Link } from 'react-router-dom';

const UserList = ({ users, onDelete }) => (
  <div className="container">
    <h3>User List</h3>
    {users.length === 0 ? <p>No users added yet.</p> : users.map((user, index) => (
      <div key={index} className="user-card">
        <div>
          <strong>{user.name}</strong><br />
          <small>{user.email}</small>
        </div>
        <div>
          <Link to={`/edit/${index}`} className="link-btn">Edit</Link>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default UserList;
