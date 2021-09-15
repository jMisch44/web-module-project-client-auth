import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";
import "./FriendsList.css";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [formVisable, setFormVisable] = useState(false);

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

  const toggle = () => {
    setFormVisable(!formVisable);
  };

  return (
    <div className="friend-list">
      <h2 className="add-friend" onClick={toggle}>
        Add a friend
      </h2>
      {formVisable ? (
        <AddFriendForm setFriendsList={setFriendsList} />
      ) : (
        <span></span>
      )}
      <h2>Friends List</h2>
      {friendsList.map((friend) => {
        return (
          <div className="card-container" key={friend.id}>
            <div className="card">
              <Link className="friend-link" to={`/friends/${friend.id}`}>
                <h3>{friend.name}</h3>
              </Link>
              <p>age: {friend.age}</p>
              <p>email: {friend.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
