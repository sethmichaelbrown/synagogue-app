import React, { Component } from 'react'
import Home from './components/Home'
import Admin from './components/admin/Admin'
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

const val = 'date'
const dateSorted = eventObj.sort((a, b) => (a[`${val}`] > b[`${val}`]) ? 1 : ((b[`${val}`] > a[`${val}`]) ? -1 : 0))

class App extends Component {

  state = {
    adminStatus: false,
    events: [],
    filterString: ''
  }

  componentDidMount() {
    this.setState({ ...this.state, events: eventObj })
  }

  toAdmin = () => {
    this.setState({ ...this.state, adminStatus: !this.state.adminStatus })
  }

  searchQuery = (event) => {
    this.setState({ ...this.state, filterString: event.target.value })
  }

  render() {
    return (
      <div className="App">
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
              toAdmin={this.toAdmin}
            />
          }
        </div>
      </div>
    )
  }
}

export default App
