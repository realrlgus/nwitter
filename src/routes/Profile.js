import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
