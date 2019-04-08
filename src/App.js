import React, { Component } from 'react'
import Home from './components/Home'
import Admin from './components/admin/Admin'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Modal from './components/Modal'

import M from "materialize-css";
import './App.css'

const port = 'http://localhost:3000/events'

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
    this.fetchEvents()
  }

  fetchEvents = async () => {
    const res = await fetch(port)
    const events = await res.json()
    this.setState({...this.state, events})
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
