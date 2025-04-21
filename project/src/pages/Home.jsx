import { useState } from 'react';
import UserList from '../components/UserList';

const Home = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return <UserList users={users} onDelete={handleDelete} />;
};

export default Home;