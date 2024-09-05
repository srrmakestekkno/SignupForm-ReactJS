import { useState } from "react";

import "./styles/styles.css";

const Input = ({ name, id, placeholder }) => {
  return (
    <>
      <input type="text" name={name} id={id} placeholder={placeholder} />
    </>
  );
};

const Button = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
    </>
  );
};

const ErrorMessage = () => {
  return (
    <>
      <p id="error-message"></p>
    </>
  );
};

const Form = () => {
  return (
    <>
      <form className="form">
        <div>
          <label></label>
          <Input
            name="firstname"
            id="firstname-input"
            placeholder="Firstname"
          />
        </div>
        <div>
          <label></label>
          <Input name="email" id="email-input" placeholder="Email" />
        </div>
        <div>
          <label></label>
          <Input name="password" id="password-input" placeholder="Password" />
        </div>
        <div>
          <label></label>
          <Input
            name="repeatPassword"
            id="repeat-password-input"
            placeholder="Repeat password"
          />
        </div>
        <Button>Signup</Button>
      </form>
    </>
  );
};

function App() {
  return (
    <div className="wrapper">
      <h1>signup</h1>
      <Form />
      <ErrorMessage />
    </div>
  );
}

export default App;
