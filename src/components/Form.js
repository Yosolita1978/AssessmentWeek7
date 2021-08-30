import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PERMISSIONS = ['Yes', 'No'];

const RegisterYourApplicationForm = (props) => {

  const [date, setDate] = useState(new Date());

  //create a state for the values that you need in the form (I create an object with those values)
  const [valuesForm, setValuesForm] = useState({
    userName: "",
    userEmail: "",
    userAge: "",
    userPreference: ""
  });
  
  //create functions that handle the event of the user typing into the form 
  const handleInputNameChange = (event) => {
    setValuesForm({...valuesForm, userName: event.target.value})
  }

  const handleInputEmailChange = (event) => {
    setValuesForm({...valuesForm, userEmail: event.target.value})
  }

  const handleInputAgeChange = (event) => {
    setValuesForm({...valuesForm, userAge: event.target.value})
  }

  const handleInputPreferenceChange = (event) => {
    setValuesForm({...valuesForm, userPreference: event.target.value})
  }

  //create a function to handle the submit of the form to the parent component 
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit()
    console.log(valuesForm);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Please Register for our next Event</h2>

      <label htmlFor="Name:">Name:*</label>
      <input type="text" required placeholder="Name" value={valuesForm.userName} onChange={handleInputNameChange} />

      <label htmlFor="Email:">Email*:</label>
      <input type="email" required placeholder="Email" value={valuesForm.userEmail} onChange={handleInputEmailChange}/>

      <label htmlFor="Age:">Age*:</label>
      <input type="number" required min="0" placeholder="Age" value={valuesForm.userAge} onChange={handleInputAgeChange} />

      <label htmlFor="Date:">Select a Date*:</label>
      <DatePicker required placeholderText="Select Date" selected={date} onChange={(date => {setDate(date)})} />

      <label htmlFor="Preference:">About us*:</label>
      <select onChange={handleInputPreferenceChange} required>
        <option value={valuesForm.userPreference}>Do you want to receive Techtonica's Newsletter</option>
        {PERMISSIONS.map(preference => <option key={preference} value={preference}>{preference}</option>)}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterYourApplicationForm;