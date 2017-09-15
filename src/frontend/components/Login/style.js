import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledInput = styled.div`
  text-align: center;  
  margin: 1vh auto; 
  text-align: left;
`;


const StyledDiv = styled.div`
  h1, h2 {
    text-align: center;  
  }

  h1 {
    font-size: 3em;
  }

  span {
    display: block;
  }

  input {
    text-align: left;  
    width: 250px;
    padding: 12px 15px;
    border-radius: 3px;
    box-sizing: border-box;
    border: none;
    border: 1px solid lightgray;
    font-size: 15px;
  }

  input[type=submit] {
  text-align: center;
  }

  @media (hover: hover) {

  input:hover {
    box-shadow: 3px 3px 3px #3B4A4F, 
    3px 3px 5px #3B4A4F;
    transition-duration: 0.2s;
  }
  }

  input:focus{
  text-align: center;
  }

  label {
  margin-left: 12px;
  font-size: 0.9em;
  }

  input[type=submit] {
  background: #5F94C6;
  color: white;
  padding: 10px;
  font-size: 1.2em;
  }

  a {
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 0.8em;
  }

  a:hover {
  color: #5D85A8;
  } 
`;

export { StyledDiv, StyledInput, StyledForm };