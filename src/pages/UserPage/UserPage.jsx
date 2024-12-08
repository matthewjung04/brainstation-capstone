import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../utils/utils'
import CreateEvent from '../../components/createEvent/CreateEvent'
import './UserPage.scss'


function UserPage() {
  const location = useLocation();
  const profileName = location.state.name;
 
  const {username} = useParams();
  let [userEvents, setUserEvents] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const fetchEvents = async () => {
      await axios
        .get(`${url}/events/${username}`)
        .then((res) => {
          setUserEvents(userEvents=res.data.event)
        })
    }
    fetchEvents();
  },[])

  const modifiedEvents = []
  for (let i=0; i<userEvents.length; i++) {
    const eventObj = {
      start: new Date(userEvents[i].startDate),
      end: new Date(userEvents[i].endDate),
      title: userEvents[i].eventName
    }
    modifiedEvents.push(eventObj)
  }


  return (
    <section className='user-page'>
      <div className='user-page__header'>
        <h1 className='user-page__header__title'>{`${profileName}'s Page`}</h1>
        <button type='button' className='user-page__header__button'><h2>Add Event</h2></button>
      </div>
      
      <div className='user-calendar'>
        <Calendar
          localizer={localizer}
          events={modifiedEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </section>
  )
}

export default UserPage;