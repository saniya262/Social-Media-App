import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Import the logo from the images folder

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
    if (storedUserData) {
      if (storedUserData.email === email && storedUserData.password === password) {
        navigate('/home'); // Redirect to home page if login is successful
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } else {
      setError('Not registered. Please sign up first.');
    }
  };

  return (
    <div className="container " >
      <div className="row w-75 mx-auto  " style={{marginTop:"160px"}}>
        {/* First column: Logo, App Name, and Description */}
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          {/* Use the imported logo */}
          <img src={logo} alt="Loopster Logo" className="mb-4" style={{ width: '150px' }} />
        
          <p className="text-center">
            Welcome to Loopster! Please log in to access your personalized dashboard, connect with others, and manage your account efficiently.
          </p>
        </div>

        {/* Second column: Login Form */}
        <div className="col-6">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="w-75 mx-auto">
            {error && <div className="alert alert-danger">{error}</div>}
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
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <div className="text-center mt-3">
            <p>New user? <Link to="/register">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
