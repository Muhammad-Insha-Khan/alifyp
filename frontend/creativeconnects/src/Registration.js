import React, {useState} from 'react'

function Registration(){ 
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [showData, setShowData] = useState(false);

// Handler to toggle the visibility of entered data
const handleShowData = () => {
  setShowData(true);
};

return (
  <div>
    <h2>Seller Registration</h2>
    {/* Input fields for name and password */}
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    {/* Show button to display entered values */}
    <button onClick={handleShowData}>Show</button>

    {/* Display entered values if showData is true */}
    {showData && (
      <div>
        <h3>Entered Data:</h3>
        <p>Name: {name}</p>
        <p>Password: {password}</p>
      </div>
    )}
  </div>
);
};

export default Registration