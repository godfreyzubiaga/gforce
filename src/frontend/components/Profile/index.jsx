import React from "react";
import { observer, inject } from "mobx-react";
import styles from "./styles";
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';

const Profile = inject("store")(
  observer(({ store }) => {
    const {image, name, reputation, age, phoneNumber} = store.userStore.currentUser;
    return (
      <div>
        <Header />
        <Sidebar />
      <div style={styles.body}>
        <div style={styles.header}>
          <a style={styles.a}>   {name}</a>
        </div>
        <div>
          <div style={styles.displayPic}>
            <img src={image} />
          </div>

          <div style={styles.details}>
            <p> Age : {age} </p>
            <p> Phone Number : {phoneNumber} </p>
            <p> Reputation : {reputation} </p>
            <span>My balance: </span> &#8369; <span>999</span>
          </div>
        </div>
      </div>
      </div>
    );
  })
);

export default Profile;
