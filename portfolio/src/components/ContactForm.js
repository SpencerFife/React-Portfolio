import React from "react";

function ContactForm() {
  return (
    <div className="container">
      <div className="form-group">
        <label for="nameBox">Name</label>
        <input type="text" class="form-control" id="nameInput"></input>
      </div>
      <div className="form-group">
        <label for="emailBox">Email Address</label>
        <input type="email" class="form-control" id="emailInput"></input>
      </div>
      <div class="form-group">
        <label for="messageBox">Enter your message here</label>
        <textarea class="form-control" id="emailInput" rows="5"></textarea>
      </div>
    </div>
  );
}

export default ContactForm;
