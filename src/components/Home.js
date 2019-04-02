import React from 'react'
import EventList from './EventList'

const Home = (props) => {
  // console.log('Home', props)

  return (
    <div className="Home">
      <button onClick={props.toAdmin}>Admin</button>
      <input type="text" onChange={props.searchQuery}/>
      <EventList
        events={props.events}
        filterString={props.filterString}
      />
    </div>
  )
}

export default Home