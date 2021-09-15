import React, { useState } from "react";
import { Spinner, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const initialState = {
  credentials: {
    username: "",
    password: "",
  },
};

const Login = (props) => {
  const [input, setInput] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    axios
      .post(`http://localhost:5000/api/login`, input.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        setIsLoading(false);
        props.history.push(`/friends`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLoading ? (
        <Spinner color="secondary" children="" />
      ) : (
        <FormGroup onSubmit={handleSubmit}>
          <Label>
            Username
            <Input
              type="text"
              name="username"
              value={input.credentials.username}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={input.credentials.password}
              onChange={handleChange}
            />
          </Label>
          <Button onClick={handleSubmit}>Submit</Button>
        </FormGroup>
      )}
    </div>
  );
};

export default Login;
