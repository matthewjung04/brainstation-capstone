import './CreateEvent.scss'

function CreateEvent() {
  return (
    <div id='sign-in-modal' className='modal'>
      <div className='sign-in'>
        <form className='sign-in__form' onSubmit={signInUser}>
          <h1 className='sign-in__form__title'>Sign In</h1>
          <input
            type='text'
            name='eventName'
            placeholder='Event Name'
            className='sign-in__form__input'
          />
          <div>
            <input
              type='date'
              name='eventStartDate'
              placeholder='Start date'
              className='sign-in__form__input'
            />
            <input
            type='time'
            name='eventStartTime'
            placeholder='Start time'
            className='sign-in__form__input'
            />
          </div>
          <div>
            <input
              type='date'
              name='eventEndDate'
              placeholder='End date'
              className='sign-in__form__input'
            />
            <input
              type='time'
              name='eventEndTime'
              placeholder='End time'
              className='sign-in__form__input'
            />
          </div>


          <button type='submit' className='sign-in__form__button'>Sign In</button>
        </form>
      </div>
    </div>
    )
}

export default CreateEvent;