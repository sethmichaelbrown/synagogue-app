import React from 'react'
import EventList from './EventList'

const Home = (props) => {
  // console.log('Home', props)

  return (
    <div className="Home">

      <input type="text" onChange={props.searchQuery} placeholder='Search Events...'/>
      <EventList
        events={props.events}
        filterString={props.filterString}
      />
    </div>
  )
}

export default Home