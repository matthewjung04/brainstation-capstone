import { Link, NavLink } from 'react-router-dom'
import facebookLogo from '../../assets/logo/facebook_logo.png'
import instagramLogo from '../../assets/logo/instagram_logo.png'
import linkedinLogo from '../../assets/logo/linkedin_logo.png'
import twitterLogo from '../../assets/logo/twitter_logo.png'
import TimeLogo from '../../assets/logo/time_auto_24dp.svg'
import './Footer.scss'

function Footer() {

  return(
    <section className='footer'>
      <article className='footer__main'>
        <div className='footer__main__logo'>
          <img src={TimeLogo} alt='logo-image'/>
          <h1 className='footer__main__logo__title'>TimeZest</h1>
          <p className='footer__main__logo__messsage'>The zesty way to schedule</p>
        </div>
        <div className='footer__main__mission-statement'>
          <h3 className='footer__main__mission-statement__title'>Mission Statement</h3>
          <p className='footer__main__mission-statement__message'>
            TimeZest strives to make scheduling anything from daily tasks to important work events easier with the power of generative AI.
          </p>
        </div>
        <div className='footer__main__site-map'>
          <h3 className='footer__main__site-map__title'>Site Map</h3>
          <nav className='footer__main__site-map__nav'>
            <NavLink id='site-map-link'>My Profie</NavLink>
            <NavLink id='site-map-link'>My Calendars</NavLink>
            <NavLink id='site-map-link'>My Reminders</NavLink>
          </nav>
        </div>
        <div className='footer__main__contact'>
          <div className='footer__main__contact__email'>
            <h3 className='footer__main__contact__email__title'>Contact Us:</h3>
            <a href='mailto:support@timezest.com' className='footer__main__contact__email__link'>support@timezest.com</a>
          </div>
          <nav className='footer__main__contact__social'>
            <a href='https://www.facebook.com' target='_blank' id='social-link'>
              <img src={facebookLogo} alt='facebook-logo' id='social-logo'/>
            </a>
            <a href='https://www.instagram.com' target='_blank' id='social-link'>
              <img src={instagramLogo} alt='instagram_logo' id='social-logo'/>
            </a>
            <a href='https://www.twitter.com' target='_blank' id='social-link'>
              <img src={twitterLogo} alt='twitter-logo' id='social-logo'/>
            </a>
            <a href='https://www.linkedin.com' target='_blank' id='social-link'>
              <img src={linkedinLogo} alt='linkedin-logo' id='social-logo'/>
            </a>
          </nav>
        </div>
      </article>
      <p className='footer__copyright'>© TimeZest All Rights Reserved</p>
    </section>
  )
}

export default Footer;