import React, { Component } from 'react'

class AdminPortal extends Component {

  state = {
    adminStatus: false,
    displayItem: '',
    newEvent: {
      title: '',
      description: '',
      date: ''
    }
  }

  display = (event) => {
    this.setState({ ...this.state, displayItem: event.target.id })
  }

  cancel = () => {
    this.setState({ ...this.state, displayItem: '' })
  }

  charCount = () => {
    const textArea = document.getElementById('textarea2')
  }

  render() {
    return (
      <div className="AdminPortal">
        <div className="row container">

          <div className="row">
            <a onClick={this.props.toAdmin} class="waves-effect waves-light btn">Home</a>
          </div>


          <div className="row">
            <a onClick={this.display} id='create' class="waves-effect waves-light btn">Create Event</a>
            <a onClick={this.display} id='edit' class="waves-effect waves-light btn">Edit Event</a>
            <a onClick={this.display} id='search' class="waves-effect waves-light btn">Search Event</a>
          </div>

          <div className="row">
            {
              this.state.displayItem === 'create' &&
              <div>
                <div>
                  <input type="text" placeholder='Event Title' />
                  <input type="date" placeholder='Event Date' />
                </div>

                <div className="row">
                  <a onClick={this.cancel} class="waves-effect waves-light btn">Cancel</a>
                  <a class="waves-effect waves-light btn">Create</a>

                </div>
              </div>


            }

          </div>

        </div>
      </div>
    )
  }
}

export default AdminPortal
