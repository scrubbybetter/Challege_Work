import React from 'react';
import API from '../api';
import '../User.css';

export default class PersonContent extends React.Component{
  render() {
    return(
      <div className='Content'>
        <form onSubmit={this.handleSubmit} className='Layout'>
          
          <div
            id="personal_content_header"
          >
            Notification Form
          </div>

          <div
            id="personal_content_name_group"
          >
            <div
              id="personal_content_first_name_group"
            >
              <span>
                First Name
              </span>
              <input type="text" name="firstName" className='personal_input_size'/>
            </div>
            <div
              id="personal_content_last_name_group"
            >
              <span>
                Last Name
              </span>
              <input type="text" name="lastName" className='personal_input_size'/>
            </div>
          </div>

          <div
            id="personal_content_notice_group"
          >
            {/* <div id="howToNotify">How would you prefer to be notified?</div> */}
            <span>How would you perfer to be notified?</span>
            <div
              id="personal_email_group"
            >
              <span>
                <input type="checkbox" name="Email" className='personal_checkbox_size'/>
                Email
              </span>                          
              <input type="text" name="EmailAddress" className='personal_input_size'/>
            </div>
            <div
              id="personal_phonenumber_group"
            >
              <span>
                <input type="checkbox" name="phone" className='personal_checkbox_size'/>
                PhoneNumber
              </span>                          
              <input type="text" name="phonenumber" className='personal_input_size'/>
            </div>
          </div>
          <div
            id="supervisor_group"
          >
            <label>Supervisor</label>
            <select id="supervisor_selector" placeholder='select...'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div id='submit_button_item'>
            <button id='form_data_submit_button'>SUBMIT</button>
          </div>
        </form> 
      </div>
    )
  }
}