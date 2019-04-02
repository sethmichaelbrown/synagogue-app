import React from 'react'

const EventList = (props) => {
  // console.log('EventList', props)

  const filteredEvents = props.events.filter(eventItem =>
    eventItem.title.toLowerCase().includes(props.filterString.toLowerCase()) ||
    eventItem.description.toLowerCase().includes(props.filterString.toLowerCase())
  )

  return (
    <div className="EventList">
      <ul className='collection'>
        {filteredEvents.map((event, idx) =>
          <li id={event.id} key={idx} className='my-2 collection-item'>
            <div className="row">
              <div className="col s12">
                <div className="eventTitle">
                  <h5>{event.title} - {event.date}</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="eventDescription">{event.description}</div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <a id={event.id} className="waves-effect waves-light btn">Contribute</a>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default EventList