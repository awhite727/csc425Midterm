import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate('/');
  };
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <form id='contact-form' onSubmit={sendEmail}> {/* registration information */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />        
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />        
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />        
          <button type="submit">Take Qualifier Quiz</button>
          </form>      
          </div>
    );
  };
  
  export default WelcomePage;
  
  