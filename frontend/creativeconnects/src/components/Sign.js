import InputField from '../components/InputField'
import Botton from '../components/Botton'
import '../styles/Signin.css'
import { useNavigate } from 'react-router-dom';


const Signin = () => {

    const navigate = useNavigate();
  
    const handleRegisterClick = () => {
      // Navigate to the Registration page when the button is clicked
      navigate('/register');
    };

  return (
    <div className='sign'>
      <div className="floating-circle"></div>
      <div className="container">
        <div className='col1'>
          <h1>WELCOME TO CREATIVE CONNECT!</h1>
              <p>Connect with top talent, find exciting projects,
                or swap skills with other professionals.
                Join us to build partnerships and turn ideas into reality.</p>
                <Botton type="button" onClick={handleRegisterClick}>
            Register Now
          </Botton>        </div>
          <div className='col2'>
            <h1>Sign in to your account</h1>
            <InputField type='email' placeholder='Email or Username'>Enter your Email</InputField>
            <InputField type='password' placeholder='Password'>Enter your Password</InputField>
            <div className='submit'></div>
            <Botton className="signin-button" type='submit'>Sign in</Botton>
            <p>By joining, you agree to the Creative Connect Terms of Service and to occasionally receive emails from us. 
              Please read our Privacy Policy to learn how we use your personal data.</p>
          </div>
      
      </div>
    </div>
  )
}

export default Signin
