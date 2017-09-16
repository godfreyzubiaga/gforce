import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`

const StyledComponent = styled.div`
  margin: 0;
  font-family: 'Varela Round', sans-serif;
  text-align: center;
`

const StyledHeader = styled.div`
  background: #5D85A8;
  height: 60px;
  text-align: center;
`

const PaymentContainer = styled.div`
  width: 50%;


  a {
    line-height: 60px;
    font-size: 2em;
    text-decoration: none;
    color: white;
    margin-left: -37px;
  }
  h1 {
    font-size: 2em;
  }
  input:nth-child(even) {
    margin-bottom: 40px;
  }

  h5 {
    margin-top: 0;
  }
`

const StyledField = styled.div`
  background: lightgray;
  color: black;
  border: none;
  text-align: center;
  font-size: 1.3em;
  padding: 20px;
  border-radius: 5px;
`

const StyledMenu = styled.div`
  float: left;
  margin-left: 5px;
  padding: 5px;
  margin-top: 8px;
  display: inline-flex;
  border-radius: 5px;
  cursor: pointer;
`

const StyledSubmit = styled.div`
  background: #5F94C6;
  color: white;
  padding: 10px;
  font-size: 1.2em;
  width: 90%;
  margin: auto;
  border-radius: 3px;
  border: none;
  font-weight: bold;
`

const StyledContainer = styled.div`
.container > span {
  font-size: 1.8em;
}`

export { StyledComponent, StyledContainer, StyledHeader, PaymentContainer, StyledField, StyledMenu, StyledSubmit, StyledDiv };
