import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

const AddUser = () => {
  const navigate = useNavigate();

  const handleSubmit = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/');
  };

  return <UserForm onSubmit={handleSubmit} />;
};

export default AddUser;