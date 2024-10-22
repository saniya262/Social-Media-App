import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; // Import the logo from the images folder

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to local storage
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="container">
      <div className="row w-75 mx-auto" style={{ marginTop: "160px" }}>
        {/* First column: Logo and Description */}
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <img src={logo} alt="Loopster Logo" className="mb-4" style={{ width: '150px' }} />
          <h2 className="text-center mb-3">Join Loopster Today!</h2>
          <p className="text-center mb-4">
            Create an account to unlock a world of opportunities! Connect with friends and manage your activities efficiently. Enjoy exclusive features and secure your personal information with Loopster.
          </p>
        </div>

        {/* Second column: Registration Form */}
        <div className="col-6">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="w-75 mx-auto mt-5">
            <div className="mb-3 mt-3">
              <input 
                type="text" 
                className="form-control" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                className="form-control" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password" 
                required 
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
            <p className="mt-2 text-center">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
