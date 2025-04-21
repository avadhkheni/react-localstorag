import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users[parseInt(id)];

  const handleSubmit = (updatedUser) => {
    users[parseInt(id)] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/');
  };

  return <UserForm initialData={user} onSubmit={handleSubmit} />;
};

export default EditUser;