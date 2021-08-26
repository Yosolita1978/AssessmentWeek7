import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PERMISSIONS = ['Yes', 'No'];

const RegisterYourApplicationForm = () => {
    const [date, setDate] = useState(new Date());

  return (
    <form>
      <h2>Please Register for our next Event</h2>

      <label>Name*:</label>
      <input type="text" required placeholder="Name" />

      <label>Email*:</label>
      <input type="email" required placeholder="Email"/>

      <label>Age*:</label>
      <input type="number" required min="0" placeholder="Age" />

      <label>Select a Date*:</label>
      <DatePicker required placeholderText="Select Date" selected={date} onChange={date => setDate(date)} />

      <label>About us*:</label>
      <select required>
        <option value="">Do you want to receive Techtonica's Newsletter</option>
        {PERMISSIONS.map(preference => <option key={preference}>{preference}</option>)}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterYourApplicationForm;