import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../utils/utils.jsx'

import './SignInModal.scss'

function SignInModal() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [hasConfirmedLog, setHasComfirmedLog] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = (e) => {
    const errorClass = e.target.className;
    if(errorClass.includes('input-error')) {
      e.target.classList.remove('input-error')
    }
  }

  const signInUser = (e) => {
    e.preventDefault();

    const usernameInput = e.target.username.value;
    const passwordInput = e.target.password.value;

    if(!usernameInput || !passwordInput) {
      alert('All fields must be filled in');

      const nameInput = e.target.querySelectorAll('input')[0];
      const emailInput = e.target.querySelectorAll('input')[1];

      nameInput.classList.add('input-error');
      emailInput.classList.add('input-error');
    } else {
      setUsername(usernameInput)
      setPassword(passwordInput)
      setHasLoggedIn(true)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      if(hasLoggedIn) {
        try {
          await axios
          .post(`${url}/authentication/sign-in`, {
            username: username,
            password: password
          })
          .then((res) => {
            sessionStorage.setItem("JWTtoken", res.data.token);
            setHasComfirmedLog(true);
            setIsLoginError(false);

            var popup = document.getElementById("sign-in-modal");
            popup.style.display = "none";
            setHasLoggedIn(false)
            navigate(`/user-page/${username}`);
          })
        } catch (err) {
          setIsLoginError(true);
          setErrorMessage(err.res.data.error.message);
        }
      } 
    }
    fetchUser()
  },[hasLoggedIn])

  return (
    <div id='sign-in-modal' className='modal'>
      <div className='sign-in'>
        <form className='sign-in__form' onSubmit={signInUser}>
          <h1 className='sign-in__form__title'>Sign In</h1>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='sign-in__form__input'
            onKeyDown={inputHandler}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='sign-in__form__input'
            onKeyDown={inputHandler}
          />
          <button type='submit' className='sign-in__form__button'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignInModal;