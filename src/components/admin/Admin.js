import React, { Component } from 'react'

import AdminPortal from './AdminPortal';
import AdminSignIn from './AdminSignIn';

class Admin extends Component {

  state = {
    adminSignedIn: false,
  }

  signIn = () => {
    this.setState({ ...this.state, adminSignedIn: true })
  }

  signOut = () => {
    this.setState({ ...this.state, adminSignedIn: false })
  }


  render() {
    return (
      <div className="Admin">
        {
          this.state.adminSignedIn ?
            <AdminPortal />
            :
            <AdminSignIn 
              signIn={this.signIn}
            />
        }

      </div>
    )
  }
}

export default Admin
