import React, { useState } from "react";
import axios from "axios";

const initialState = {
  credentials: {
    username: "",
    password: "",
  },
};

const Login = () => {
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    setInput({
      credentials: {
        ...input.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, input.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input
            type="text"
            name="username"
            value={input.credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={input.credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
