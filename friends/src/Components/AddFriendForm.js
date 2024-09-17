import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./AddFriendForm.css";

const initialState = {
  name: "",
  age: 0,
  email: "",
};

const AddFriendForm = (props) => {
  const [newFriend, setNewFriend] = useState(initialState);
  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, newFriend)
      .then((res) => {
        props.setFriendsList((friends) => [...friends, newFriend]);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewFriend(initialState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          age
          <input
            type="number"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </label>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
