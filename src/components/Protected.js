import React from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container">
      <h2>Protected Page</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{new Date(user.dob).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Protected;
