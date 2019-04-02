import React from 'react'

const EventList = (props) => {
  // console.log('EventList', props)

  const filteredEvents = props.events.filter(eventItem =>
    eventItem.title.toLowerCase().includes(props.filterString.toLowerCase()) ||
    eventItem.description.toLowerCase().includes(props.filterString.toLowerCase())
  )

  return (
    <div className="EventList">
      <ul>
        {filteredEvents.map((event, idx) =>
          <li id={event.id} key={idx} className='my-2'>
            <div className="eventTitle">{event.title} - {event.date}</div>
            <div className="eventDescription">{event.description}</div>
            <button id={event.id}>Contribute</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default EventList