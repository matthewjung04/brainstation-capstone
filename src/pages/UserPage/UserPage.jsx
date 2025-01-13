import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../utils/utils'
import './UserPage.scss'


function UserPage() {
  const token = sessionStorage.getItem("JWTtoken");
  const {username} = useParams();

  const location = useLocation();
  
  let [userEvents, setUserEvents] = useState([]);
  let [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    if (!token && location.state) {
      const fetchUser = async () => {
        try {
          await axios
          .post(`${url}/authentication/sign-in`, {
            username: location.state.username,
            password: location.state.password
          })
          .then((res) => {
            sessionStorage.setItem("JWTtoken", res.data.token);
            setHasComfirmedLog(true);
            setIsLoginError(false);
          })
        } catch (err) {
          setIsLoginError(true);
          setErrorMessage(err.res.data.error.message);
        }
      }
      fetchUser()
      
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${url}/authentication/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setUserInfo(response.data );
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  useEffect(() => {
    const fetchEvents = async () => {
      if(userInfo.username) {
        await axios
          .get(`${url}/events/${userInfo.username}`)
          .then((res) => {
            setUserEvents(userEvents=res.data.event)
          })
      }
    }
    fetchEvents();
  },[userInfo.username])

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
    isLoading ? (
      <section>
        <h1>Loading...</h1>
      </section>
    ) : (
      <section className='user-page'>
        <div className='user-page__header'>
          <h1 className='user-page__header__title'>{`${userInfo.name}'s Page`}</h1>
          <Link to={`/${username}/new-event`}>
            <button type='button' className='user-page__header__button'><h2>Add Event</h2></button>
          </Link>
        </div>
        
        <div className='user-calendar'>
          <Calendar
            localizer={localizer}
            events={modifiedEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={event => alert(`${event.title} starting at ${event.start}`)}
          />
        </div>
      </section>
    )
  )
}

export default UserPage;