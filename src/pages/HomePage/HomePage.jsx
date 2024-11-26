import calendarImage from '../../assets/images/calendar_asset.jpg'
import clockImage from '../../assets/images/clock_asset.png'
import autoCalendarIcon from '../../assets/icons/automatic_calendar_icon.png'
import autoNotificationIcon from '../../assets/icons/automatic_notification_icon.png'
import autoTasklistIcon from '../../assets/icons/automatic_tasklist_icon.png'
import './HomePage.scss'

function HomePage() {
  return (
    <section className='homepage'>
      <article className='homepage__sign-up'>
        <img src={calendarImage} alt='calendar-image' className='homepage__sign-up__calendar-photo'/>
        <form className='homepage__sign-up__form'>
          <h1 className='homepage__sign-up__form__title'>Schedule with confidence and a little zest</h1>
          <input type='text' name='full-name' placeholder='Full Name' className='homepage__sign-up__form__input'/>
          <input type='text' name='email-address' placeholder='Email Address' className='homepage__sign-up__form__input'/>
          <button type='submit' className='homepage__sign-up__form__button'>Sign Up</button>
        </form>
        <img src={clockImage} alt='clock-image' className='homepage__sign-up__clock-photo'/>
      </article>
      <article className='homepage__features'>
        <div className='homepage__features__calendars'> 
          <img src={autoCalendarIcon} alt='autoCalendar-icon' id='feature-icons'/>
          <h1 className='homepage__features__calendars__title'>Effortless Scheduling</h1>
        </div>
        <div className='homepage__features__reminders'>
          <img src={autoNotificationIcon} alt='autoNotification-icon' id='feature-icons'/>
          <h1 className='homepage__features__reminders__title'>Automated Reminders</h1>
        </div>
        <div className='homepage__features__tasklist'>
          <img src={autoTasklistIcon} alt='autoTasklist-icon' id='feature-icons'/>
          <h1 className='homepage__features__tasklist__title'>Auotmatic Task Lists</h1>
        </div>
      </article>
    </section>
  )
}

export default HomePage;