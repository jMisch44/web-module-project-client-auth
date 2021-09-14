import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then((res) => {
        setFriendsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>add a friend</h2>
      <AddFriendForm setFriendsList={setFriendsList} />
      <h2>Friends List</h2>
      {friendsList.map((friend) => {
        return (
          <div key={friend.id}>
            <Link to={`/friends/${friend.id}`}>
              <p>name: {friend.name}</p>
            </Link>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
