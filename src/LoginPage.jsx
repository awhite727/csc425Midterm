import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const goToLoginPage = () => {
    if (username==="username" && password==="password") {
      navigate('/landing'); // Navigate to the Login page
    }
  };

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>
        <form onSubmit={goToLoginPage}> {/* login bar */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />        
          <button type="submit">Take Qualifier Quiz</button>
          </form>
      </div>
    );
  };
  
  export default LoginPage;
  