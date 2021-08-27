import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PERMISSIONS = ['Yes', 'No'];

const RegisterYourApplicationForm = () => {
  const [date, setDate] = useState(new Date());
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    bool: '',
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSubmit = (event) => {
    const YYYY = date.getFullYear();
    let MM = date.getMonth() + 1;
    let DD = date.getDate();
    event.preventDefault();
    console.log(`Name:${values.name} Email:${values.email} Age:${values.age}`);
    console.log(`Month:${MM} Day:${DD} Year:${YYYY}`)
    console.log(`${values.bool}`)

  };


  return (
    <form onSubmit={onSubmit}>
      <h2>Please Register for our next Event</h2>

      <label>Name*:</label>
      <input type="text" value={values.name} onChange={set('name')} required placeholder="Name" />

      <label>Email*:</label>
      <input type="email" value={values.email} onChange={set('email')} required placeholder="Email" />

      <label>Age*:</label>
      <input type="number" value={values.age} onChange={set('age')} required min="0" placeholder="Age" />

      <label>Select a Date*:</label>
      <DatePicker placeholderText="Select Date" value={date} selected={date} onChange={date => setDate(date)} />

      <label>About us*:</label>
      <select required>
        <option value={values.bool}>Do you want to receive Techtonica's Newsletter</option>
        {PERMISSIONS.map(preference => <option key={preference}>{preference}</option>)}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterYourApplicationForm;