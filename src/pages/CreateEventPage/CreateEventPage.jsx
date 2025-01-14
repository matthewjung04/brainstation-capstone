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
  const [autoEvent, setAutoEvent] = useState(null);

  const timeConvert = (time) => {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1); 
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; 
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }

  const convertTime12to24 = (time) => {
    let hours = time.split(":")[0];

    let min = time.split(":")[1];
    let minutes = [min[0], min[1]].join("");
    let modifier = [min[2], min[3]].join("");
    
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
  }

  const createEventHandler = (e) => {
    e.preventDefault();
    setEventName(e.target.eventName.value);
    setStartDate(`${e.target.eventStartDate.value} ${e.target.eventStartTime.value}`);
    setEndDate(`${e.target.eventEndDate.value} ${e.target.eventEndTime.value}`);
    setHasCreated(true)
  }

  useEffect(() => {
    const fetchNewEvent = async () => {
      if(hasCreated) {
        await axios
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
    const autoGenerateEvent = async () => {
      if(newEventName) {
        await axios
        .get(`${url}/events/${username}/autocomplete?term=${newEventName}`)
        .then((res) => {
          setAutoEvent(res.data.autocomplete);
        })
      }
    }
    autoGenerateEvent();

  },[newEventName])

  const autoSelectEvent = (e) => {
    
    const eventId = e.target.parentElement.id;
    console.log(eventId)
    console.log(`${eventId}autoEventName`)
    // const autoEventName = document.getElementById(`${eventId}autoEventName`).textContent;

    // const autoStartDate = document.getElementById(`${eventId}autoStartDate`).textContent;
    // const autoStartTime = document.getElementById(`${eventId}autoStartTime`).textContent;

    // const autoEndDate = document.getElementById(`${eventId}autoEndDate`).textContent;
    // const autoEndTime = document.getElementById(`${eventId}autoEndTime`).textContent;

    // const currentName = document.getElementById('eventName');
    // currentName.value = autoEventName;

    // const currentStartDate = document.getElementById('startDate');
    // currentStartDate.value = autoStartDate.split(" ")[1];
    // const currentStartTime = document.getElementById('startTime');
    // currentStartTime.value = convertTime12to24(autoStartTime.split(" ")[1]);

    // const currentEndDate = document.getElementById('endDate');
    // currentEndDate.value = autoEndDate.split(" ")[1];
    // const currentEndTime = document.getElementById('endTime');
    // currentEndTime.value = convertTime12to24(autoEndTime.split(" ")[1]);
  }

  return (
    <section className='create-event'>
      <form className='create-event__form' onSubmit={createEventHandler}>
        <h1 className='create-event__form__title'>Create New Event</h1>
        <label htmlFor='eventName' id='labels'>Event Title:</label>
        <input
          type='text'
          name='eventName'
          placeholder='Event Name'
          className='create-event__form__input'
          id='eventName'
          onChange={generateAI}
        />
        <div>
          <h2 id='labels'>Start Date & Time</h2>
          <div id='input-block'>
            <input
              type='date'
              name='eventStartDate'
              placeholder='Start date'
              pattern=' '
              id='startDate'
              className='create-event__form__input'
            />
            <input
              type='time'
              name='eventStartTime'
              placeholder='Start time'
              id='startTime'
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
              id='endDate'
              className='create-event__form__input'
            />
            <input
              type='time'
              name='eventEndTime'
              placeholder='End time'
              id='endTime'
              className='create-event__form__input'
            />
          </div>
        </div>
        <button type='submit' className='create-event__form__button'>Create Event</button>
      </form>

      <article className='auto-events'>
        <h1 className='auto-events__title'>Suggested Events:</h1>

        <div className="auto-events__list"> 
          {
            autoEvent ? (
              autoEvent.map((event) => (
              <div key={event._id} id={event._id} className="auto-events__list__item" onClick={autoSelectEvent}>
                <h3 className="auto-events__list__item__title">Event Title:</h3>
                <p className="auto-events__list__item__event-name" id={`${event._id}autoEventName`}>{event.eventName}</p>
            
                <h3 className="auto-events__list__item__title">Start Date & Time:</h3>
                <div className="auto-events__list__item__event" id={event._id}>
                  <p className="auto-events__list__item__event__date" id={`${event._id}autoStartDate`}>{`Date: ${event.startDate.split(" ")[0]}`}</p>
                  <p className="auto-events__list__item__event__date--time" id={`${event._id}autoStartTime`}>{`Time: ${timeConvert(event.startDate.split(" ")[1])}`}</p>
                </div>
              
                <h3 className="auto-events__list__item__title" id={event._id}>End Date & Time:</h3>
                <div className="auto-events__list__item__event">
                  <p className="auto-events__list__item__event__date" id={`${event._id}autoEndDate`}>{`Date: ${event.endDate.split(" ")[0]}`}</p>
                  <p className="auto-events__list__item__event__date--time" id={`${event._id}autoEndTime`}>{`Time: ${timeConvert(event.startDate.split(" ")[1])}`}</p>
                </div>
              </div>
              ))

            ) : (
              <h1>No similar or matching events</h1>
            )
          }
        </div>

      </article>

    </section>
    )
}

export default CreateEventPage;