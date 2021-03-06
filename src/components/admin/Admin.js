import React, { Component } from 'react'

class Admin extends Component {

  state = {
    adminStatus: false,
    displayItem: '',
  }

  display = (event) => {
    this.setState({ ...this.state, displayItem: event.target.id })
  }

  cancel = () => {
    this.setState({ ...this.state, displayItem: ''})
  }

  render() {
    // console.log('Admin', props)

    return (
      <div className="Admin">
        <div className="row container">

          <div className="row">
            <button onClick={this.props.toAdmin}>Home</button>
          </div>


          <div className="row">
            <button onClick={this.display} id='create'>Create Event</button>
            <button onClick={this.display} id='edit'>Edit Event</button>
            <button onClick={this.display} id='search'>Search Event</button>
          </div>

          <div className="row">
            {
              this.state.displayItem === 'create' &&
              <div>
                <input type="text" placeholder='Event Title' />
                <input type="date" placeholder='Event Date' />
                <input type="text" placeholder='Event Description' />

                <div className="row">
                  <button onClick={this.cancel}>Cancel</button>
                  <button>Create</button>

                </div>

              </div>
            }

          </div>

        </div>
      </div>
    )
  }
}

export default Admin
