import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignInModal from '../SignInModal/SignInModal'
import TimeLogo from '../../assets/logo/time_auto_24dp.svg'
import DropDownArrow from '../../assets/icons/arrow_drop_down_white.svg'
import './Header.scss'

function Header() {
  const navigate = useNavigate()
  const [hasAuthenticated, setHasAuthenticated] = useState(false)

  const signInHandler = (e) => {
    var popup = document.getElementById("sign-in-modal");
    popup.style.display = "block";
    setHasAuthenticated(true);
  }

  const signOutHandler = (e) => {
    setHasAuthenticated(false);
    navigate('/')
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
          <h2 className='header__nav__features'>
            Features
            <img src={DropDownArrow} alt='dropdown-icon' className='header__nav__features__image'/>
          </h2>
          {hasAuthenticated ? (
            <button type='button' className='header__nav__signin' onClick={signOutHandler}><h2>Sign Out</h2></button>
          ) : (
            <button type='button' className='header__nav__signin' onClick={signInHandler}><h2>Sign In</h2></button>
          )}
        </div>
      </section>
    </>

  )
}

export default Header;