import React from 'react'
import Checkout from './StripeCheckout'

const Modal = (props) => {
  return (
    <div className="Modal">
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h5>{props.selectedEvent.title} - {props.selectedEvent.date}</h5>

          <div className="row">
            <div className="col s12">
              <p>Please enter contribution amount below</p>
            </div>
            <div className="input-field col s1">
              <p>$</p>
            </div>
            <div className="input-field col s11">
              <input
                onFocus={props.inputClickIn}
                onChange={props.storeContribution}
                placeholder="Contribution amount"
                id="contribution_amount"
                type="number"
                className="validate"
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              {
                props.clickedIn && props.contribution > 0 && 'Contribution cannot be empty'
              }
            </div>
          </div>

        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
          <Checkout 
            contribution={props.contribution}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal