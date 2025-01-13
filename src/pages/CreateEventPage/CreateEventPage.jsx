import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../utils/utils.jsx'
import './CreateEventPage.scss'

function CreateEventPage() {
  const navigate = useNavigate();

  const { username } = useParams();

  const [eventName, setEventName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hasCreated, setHasCreated] = useState(null);
  const [newEventName, setNewEventName] = useState(null);
  const [hasAutocomplete, setHasAutocomplete] =useState(false)

  const createEventHandler = (e) => {
    e.preventDefault();
    setEventName(e.target.eventName.value);
    setStartDate(`${e.target.eventStartDate.value} ${e.target.eventStartTime.value}`);
    setEndDate(`${e.target.eventEndDate.value} ${e.target.eventEndTime.value}`);
    setHasCreated(true)
  }

  useEffect(() => {
    const fetchNewEvent = () => {
      if(hasCreated) {
        axios
          .post(`${url}/events/${username}`, {
            eventName: eventName,
            startDate: startDate,
            endDate: endDate,
            repeat: "none"
          })
          .then(() => {
            navigate(`/user-page/${username}`)
          })
      }
    }
    fetchNewEvent();
  },[hasCreated])

  const generateAI = (e) => {
    setNewEventName(e.target.value)
  }

  useEffect(() => {

  },[newEventName])

  return (
    <div className='create-event'>
      <form className='create-event__form' onSubmit={createEventHandler}>
        <h1 className='create-event__form__title'>Create New Event</h1>
        <label htmlFor='eventName' id='labels'>Event Title:</label>
        <input
          type='text'
          name='eventName'
          placeholder='Event Name'
          className='create-event__form__input'
          onChange={generateAI}
        />
        <div>
          <h2 id='labels'>Start Date & Time</h2>
          <div id='input-block'>
            <input
              type='date'
              name='eventStartDate'
              placeholder='Start date'
              className='create-event__form__input'
            />
            <input
              type='time'
              name='eventStartTime'
              placeholder='Start time'
              className='create-event__form__input'
            />
          </div>
        </div>
        <div>
          <h2 id='labels'>End Date & Time</h2>
          <div id='input-block'>
            <input
              type='date'
              name='eventEndDate'
              placeholder='End date'
              className='create-event__form__input'
            />
            <input
              type='time'
              name='eventEndTime'
              placeholder='End time'
              className='create-event__form__input'
            />
          </div>
        </div>
        <button type='submit' className='create-event__form__button'>Create Event</button>
      </form>

      <div>
        <h1>Suggested Events:</h1>
      </div>

    </div>
    )
}

export default CreateEventPage;