import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../utils/utils.jsx'
import './SignUpPage.scss'

function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [regName, setRegName] = useState(location.state.name);
  const [regEmail, setRegEmail] = useState(location.state.email);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [hasRegistered, setHasRegistered] = useState(null);


  const registerAccount = (e) => {
    e.preventDefault();

    const usernameValue = e.target.username.value;
    const passwordValue = e.target.password.value;

    if(!usernameValue || !passwordValue) {
      alert('All fields must be filled in');

      const usernameInput = e.target.querySelectorAll('input')[2];
      const passwordInput = e.target.querySelectorAll('input')[3];

      usernameInput.classList.add('input-error');
      passwordInput.classList.add('input-error');
    } else {
      setUsername(usernameValue);
      setPassword(passwordValue);
      setHasRegistered(true);
    }
  }

  const inputHandler = (e) => {
    const errorClass = e.target.className;
    if(errorClass.includes('input-error')) {
      e.target.classList.remove('input-error')
    }
  }

  useEffect(() => {
    const signUpUser = async () => {
      if(hasRegistered) {
        await axios
          .post(`${url}/authentication/sign-up`, {
            name: regName,
            email: regEmail,
            username: username,
            password: password
          })
          .then(() => {
            navigate(`/user-page/${username}`, { state:{name: regName }})
          })
      }
    }
    signUpUser();
  },[hasRegistered])

  return (
    <section>
      <form className='sign-up__form' onSubmit={registerAccount}>
        <h1 className='sign-up__form__title'>Register For An Account</h1>
        <input
          type='text'
          name='fullName'
          className='sign-up__form__input'
          defaultValue={regName}
        />
        <input
          type='text'
          name='emailAddress'
          className='sign-up__form__input'
          defaultValue={regEmail}
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          className='sign-up__form__input'
          onKeyDown={inputHandler}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='sign-up__form__input'
          onKeyDown={inputHandler}
        />
        <button type='submit' className='sign-up__form__button'>Sign Up</button>
      </form>
    </section>
  )
}

export default SignUpPage;