import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friend = (props) => {
  const { id } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${id}`)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div key={friend.id}>
      <p>name: {friend.name}</p>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </div>
  );
};

export default Friend;
