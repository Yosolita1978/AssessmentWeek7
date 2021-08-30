import React, { useState } from "react";
import './App.css';
import RegisterYourApplicationForm from './components/Form';

function App() {

  // a state to control if the user is register or not. This allows the parent to control the flow of the application 
  const [isSubmited, setIsSubmited] = useState(false);

  //sending this function as a prop to the child 
  const handleOnSubmit = () => {
    setIsSubmited(true);
    console.log("Submited value change in parent")
  }

  return (
    <div className="App">
      {isSubmited ? 
      <div className="sucess-message"> Sucess! Thank you for registering for our event </div> : <RegisterYourApplicationForm isSubmited={isSubmited} onSubmit={handleOnSubmit} />} 
      
  
    </div>
  );
}

export default App;
