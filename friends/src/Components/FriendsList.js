import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

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
      {friendsList.map((friend) => {
        return (
          <div key={friend.id}>
            <p>name: {friend.name}</p>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
