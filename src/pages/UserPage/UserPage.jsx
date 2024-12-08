import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import './UserPage.scss'

function UserPage() {
  const localizer = momentLocalizer(moment);

  return (
    <section>
      <div className='user-calendar'>
        <Calendar
          localizer={localizer}
          
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </section>
  )
}

export default UserPage;