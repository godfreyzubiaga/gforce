import React from "react";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';
import styles from "./styles";
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';

const StyledDiv = styled.div`
  fontFamily: 'Open Sans';
`;

const Profile = inject("store")(
  observer(({ store }) => {
    const {image, name, reputation, age, phoneNumber, accountNumber} = store.userStore.currentUser;
    store.paymentGatewayStore.getBalance(accountNumber)
    return (
      <StyledDiv>
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
            <p style={styles.p}> Age : {age} </p>
            <p  style={styles.p}> Phone Number : {phoneNumber} </p>
            <p style={styles.p}> Reputation : {reputation} </p>
            <span style={styles.p}>My UNIONBANK Balance: </span> &#8369; <span>{store.paymentGatewayStore.balance}</span>
            <p style={styles.p}> Your current tasks: </p>
            {
              store.taskStore.currentTasks.map(task => 
              <div>
                <span style={styles.p}> Employer: {task.employer} Description: {task.description} </span>
              </div>
                )
            }
          </div>
        </div>
        </div>
      </StyledDiv>
    );
  })
);

export default Profile;
