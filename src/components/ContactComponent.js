import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from "../assets/images/home.png";

const Contact = () => {
    return (
      <div className="home col-sm-12 col-10 contact">
      <div className="row">
        <div className="col-sm-10 col-xl-4 col-12 home-welcome">
          <h2>Contact Us</h2>
          <p><Link to='/home'>Home</Link> / Contact</p>
        </div>
        <div className="homeImg col-sm-7 col-xl-4 col-12">
          <img src={homeImg} className="col-12 home-img" />
        </div>
      </div>
      <div className='contact-form'>
          <div className="contact-1">
            <div className="contact-2">
            <h1>FEEL FREE TO ASK US!</h1>
            <p>LETS TALK & GET A FREE QUOTE
            </p> 
            <h3>107 MK 32 STREET,<br/>
            MANCHESTER, FL 2542<br/>
            HOMEGYMEQUIPMENT.HGEUK@GMAIL.COM</h3><br/><br/>
            <h2>CALL US NOW</h2><br/>
            <h3>SALES: 1 855-289-1496 / 305 -501- 4614</h3><br/>
            </div>
          </div>
          <div className="contact-3">
            <h3>Contact Us Form</h3>
            <form>
            <label for="form_fname">First Name</label>
            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please Enter your first name" required="required" data-error="Firstname is required." />
            <label for="form_lname">Last Name</label>
            <input id="form_lname" type="text" name="surname" class="form-control" placeholder="Please Enter your last name" required="required" data-error="Lastname is required." />
            <label for="form_email">Email</label>
            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required." />  
            <label for="form_phone">Phone</label>
            <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone" />
            <label for="form_message"></label>
            <textarea id="form_message" class="textarea" rows="10" cols="40" name="message"  placeholder=" Description" required="required" data-error="Please,leave us a message."></textarea>
            <div class="g-recaptcha" data-sitekey="6LeoyRAeAAAAAP8ZRWkVgQtH_fh_KywGJR2Hnm2h"></div><br/>                                    
            <input type="submit" name="ok" class="btn btn-secondary btn-send" value="Send message" />
    </form>
    <script src='https://www.google.com/recaptcha/api.js'></script>
          </div>
      </div>
    </div>
      );
}
 
export default Contact;