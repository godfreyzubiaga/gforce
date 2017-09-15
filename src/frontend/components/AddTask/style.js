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

const AddTaskContainer = styled.div`
  width: 50%;
  text-align: center;

  input, textarea {
    text-align: center;
    width: 250px;
    padding: 12px 15px;
    border-radius: 3px;
    border: none;
    border: 1px solid lightgray;
  }
`
const StyledFields = styled.div`
  margin-bottom: 30px;
`

const SelectLocationStyle = styled.div`
  text-decoration: none;
  color: white;
  background: #5F94C6;
  padding: 10px;
  cursor: pointer;
  width: 50%;
  margin: auto;
`

const SubmitStyle = styled.div`
  padding: 5px;
  font-size: 1.3em;
  background: #5F94C6;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  width: 50%;
  text-align: center;
  margin: auto;
  cursor: pointer;
`

export { StyledDiv, StyledComponent, AddTaskContainer, StyledFields, SelectLocationStyle, SubmitStyle };
