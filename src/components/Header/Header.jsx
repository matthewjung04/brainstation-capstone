import { Link } from 'react-router-dom'
import TimeLogo from '../../assets/logo/time_auto_24dp.svg'
import DropDownArrow from '../../assets/icons/arrow_drop_down_white.svg'
import './Header.scss'

function Header() {
  return(
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
        <button type='button' className='header__nav__signin'><h2>Sign In</h2></button>
      </div>
    </section>
  )
}

export default Header;