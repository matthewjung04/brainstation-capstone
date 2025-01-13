import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../utils/utils'
import SignInModal from '../SignInModal/SignInModal'
import TimeLogo from '../../assets/logo/time_auto_24dp.svg'
import './Header.scss'

function Header() {
  const navigate = useNavigate()
  const token = sessionStorage.getItem("JWTtoken");

  const [userProfile, setUserProfile] = useState({});

  const signInHandler = () => {
    var popup = document.getElementById("sign-in-modal");
    popup.style.display = "block";
  }

  const signOutHandler = () => {
    sessionStorage.removeItem("JWTtoken")
    navigate('/')
  }

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${url}/authentication/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserProfile(response.data );
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [token]);

  const redirectProfile = () => {
    const username = userProfile.username;
    navigate(`/user-page/${username}`);
  }

  return(
    <>
      <SignInModal />
      <section className='header'>
        <Link to='/' className='header__logo'>
          <img src={TimeLogo} alt='logo-image' className='header__logo__image'/>
          <h1 className='header__logo__title'>TimeZest</h1>
        </Link>
        <div className='header__nav'>
          {token ? (
            <button type='button' className='header__nav__signin' onClick={signOutHandler}><h2>Sign Out</h2></button>
          ) : (
            <button type='button' className='header__nav__signin' onClick={signInHandler}><h2>Sign In</h2></button>
          )}

          {token ? (
            <button type='button' className='header__nav__signin' onClick={redirectProfile}><h2>My Profile</h2></button>
          ) : (
            <button type='button' className='header__nav__signin'><h2>Sign Up</h2></button>
          )}
          
        </div>
      </section>
    </>

  )
}

export default Header;