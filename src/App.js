import React, { Component } from 'react'
import Home from './components/Home'
import Admin from './components/admin/Admin'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Modal from './components/Modal'

import M from "materialize-css";
import './App.css'

const eventObj = [
  {
    id: 1,
    date: '03/20/18',
    title: 'Wedding 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui porro aut, aspernatur soluta odit ut, earum at eos libero debitis fugiat ea quasi? Consequuntur quisquam eum vel libero pariatur!'
  },
  {
    id: 2,
    date: '04/23/18',
    title: 'Wedding 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui porro aut, aspernatur soluta odit ut, earum at eos libero debitis fugiat ea quasi? Consequuntur quisquam eum vel libero pariatur!'
  },
  {
    id: 3,
    date: '03/25/18',
    title: 'Wedding 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui porro aut, aspernatur soluta odit ut, earum at eos libero debitis fugiat ea quasi? Consequuntur quisquam eum vel libero pariatur!'
  },
  {
    id: 4,
    date: '06/01/18',
    title: 'Bar Mitzvah',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui porro aut, aspernatur soluta odit ut, earum at eos libero debitis fugiat ea quasi? Consequuntur quisquam eum vel libero pariatur!'
  },
  {
    id: 5,
    date: '05/10/18',
    title: 'Bat Mitzvah',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui porro aut, aspernatur soluta odit ut, earum at eos libero debitis fugiat ea quasi? Consequuntur quisquam eum vel libero pariatur!'
  },
]

// const val = 'date'
// const dateSorted = eventObj.sort((a, b) => (a[`${val}`] > b[`${val}`]) ? 1 : ((b[`${val}`] > a[`${val}`]) ? -1 : 0))

class App extends Component {

  state = {
    adminStatus: false,
    clickedIn: false,
    contribution: null,
    events: [],
    filterString: '',
    selectedEvent: {}
  }

  componentDidMount() {
    M.AutoInit()
    this.setState({ ...this.state, events: eventObj })
  }

  toAdmin = () => {
    this.setState({ ...this.state, adminStatus: !this.state.adminStatus })
  }

  searchQuery = (event) => {
    this.setState({ ...this.state, filterString: event.target.value })
  }

  selectEvent = (event) => {
    const selectedEvent = this.state.events.find(eventItem => parseInt(eventItem.id) === parseInt(event.target.id))
    this.setState({ ...this.state, selectedEvent })
  }

  storeContribution = (event) => {
    const contribution = parseInt(event.target.value)
    this.setState({ ...this.state, contribution })
  }

  inputClickIn = (event) => {
    this.setState({ ...this.state, clickedIn: true })
  }

  render() {
    return (
      <div className="App">
        <Modal
          contribution={this.state.contribution}
          clickedIn={this.state.clickedIn}
          inputClickIn={this.inputClickIn}
          selectedEvent={this.state.selectedEvent}
          storeContribution={this.storeContribution}
        />

        <NavBar
          toAdmin={this.toAdmin}
        />
        <div className="row container">
          <Welcome />
        </div>

        <div className="row container">
          {this.state.adminStatus ?
            <Admin
              events={this.state.events}
              toAdmin={this.toAdmin}
            />
            :
            <Home
              events={this.state.events}
              filterString={this.state.filterString}
              searchQuery={this.searchQuery}
              selectEvent={this.selectEvent}
            />
          }
        </div>
      </div>
    )
  }
}

export default App
