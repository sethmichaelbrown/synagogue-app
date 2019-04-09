import React, { Component } from 'react'

class AdminPortal extends Component {

  state = {
    adminStatus: false,
    displayItem: '',
    description: '',
    title: '',
    date: ''
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

  newText = (event) => {
    this.setState({ ...this.state, description: event.target.value })
  }

  newTitle = (event) => {
    this.setState({ ...this.state, title: event.target.value })
  }

  newDate = (event) => {
    this.setState({ ...this.state, date: event.target.value })
  }

  createNewEvent = () => {
    const newEvent = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    }

    console.log(newEvent)

  }

  render() {
    return (
      <div className="AdminPortal">
        <div className="row container">

          <div className="row">
            <a onClick={this.props.toAdmin} className="waves-effect waves-light btn">Home</a>
          </div>


          <div className="row">
            <a onClick={this.display} id='create' className="waves-effect waves-light btn">Create Event</a>
            <a onClick={this.display} id='edit' className="waves-effect waves-light btn">Edit Event</a>
            <a onClick={this.display} id='search' className="waves-effect waves-light btn">Search Event</a>
          </div>

          <div className="row">
            {
              this.state.displayItem === 'create' &&
              <div>
                <div>
                  <input type="text" placeholder='Event Title' onChange={this.newTitle} />
                  <input type="date" placeholder='Event Date' onChange={this.newDate} />
                  <textarea id="textarea2" className="materialize-textarea" onChange={this.newText}></textarea>
                </div>

                <div className="row">
                  <a onClick={this.cancel} className="waves-effect waves-light btn">Cancel</a>
                  <a onClick={this.createNewEvent} className="waves-effect waves-light btn">Create</a>

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
