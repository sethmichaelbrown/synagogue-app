import React, { Component } from 'react'

class AdminSignIn extends Component {

  state = {
    passMatch: false,
    testPass: 'HelloWorld',
    showPass: false
  }

  readPassword = (event) => {
    const matching = event.target.value === this.state.testPass
    matching && this.setState({ ...this.state, passMatch: matching })
  }

  showPassword = () => {
    this.setState({ ...this.state, showPass: !this.state.showPass })
  }


  render() {
    return (
      <div className="AdminSignIn">
        <div className="row container">

          <div className="row">
            <span>Please sign in to continue</span>
            <input type="text" placeholder='Username' value='admin' readOnly />
            <input type={this.state.showPass ? "text" : "password"} placeholder='Password' onChange={this.readPassword} />
          </div>

          <div className="row">
            <div className="col s7">
              <div className="switch">
                <label>
                  <input type="checkbox" onChange={this.showPassword} />
                  <span className="lever"></span>
                  Show Password
              </label>
              </div>
            </div>

            <div className="col s5 right-align">
              <a
                className="waves-effect waves-light btn"
                onClick={this.props.signIn}
                disabled={this.state.passMatch ? '' : 'disabled'}>
                Log In
            </a>
            </div>

          </div>

          <div className="row">

          </div>

        </div>
      </div>
    )
  }
}

export default AdminSignIn