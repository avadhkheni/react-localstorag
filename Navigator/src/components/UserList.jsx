import { Link } from 'react-router-dom';

const UserList = ({ users, onDelete }) => (
  <div className="container">
    <h3>User List</h3>
    {users.length === 0 ? (
      <p>No users added yet.</p>
    ) : (
      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={`/edit/${index}`} className="link-btn">Edit</Link>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default UserList;
