import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "" || lastName === "") {
      setMessage(
        <span className="error-message">
          لطفا موارد خواسته شده را وارد کنید
        </span>
      );
    } else {
      setMessage(`سلام ${firstName} ${lastName}👋`);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="firstName">نام</label>
          <input
            autoComplete="off"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="مثال: محمد"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName"> نام خانوادگی </label>
          <input
            autoComplete="off"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder=" مثال: رضایی "
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">ثبت کن</button>
        </div>
      </form>
      <div className="result-message">
        <div className="span-wrapper">
          <span className="green-span"> نتیجه نهایی:</span>
        </div>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default App;
