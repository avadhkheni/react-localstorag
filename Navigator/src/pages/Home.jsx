import { useState, useEffect } from 'react';
import UserList from '../components/UserList';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return <UserList users={users} onDelete={handleDelete} />;
};

export default Home;