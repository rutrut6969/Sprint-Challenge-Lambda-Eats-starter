import styled from 'styled-components';
export const NavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid black; */
  margin-left: 7%;
  margin-bottom: 5%;
`;
export const LinkWrap = styled.section`
  display: flex;
  /* width: 35%; */
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  /* height: 2000px; */
  border: 1px solid black;
  margin: 0 auto;
`;
export const FormWrapper = styled.section`
  width: 100%;
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
  /* background-color: rgb(211, 211, 211); */
`;

export const Name = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 30%;
  margin-bottom: 3%;
`;
export const FormDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2%;
  background-color: rgb(211, 211, 211);
  width: 98%;
  border-bottom: 1px solid rgba(211, 211, 211, 0.6);
  padding: 1%;
`;
export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
export const P = styled.p`
  font-size: 1rem;
  margin: 0;
`;
export const Select = styled.select`
  width: 35%;
  margin-bottom: 2%;
`;
export const Radio = styled.input``;
export const Label = styled.label`
  display: flex;
  flex-flow: row wrap;
  margin-left: 5px;
  margin-bottom: 2%;
`;

export const CheckBox = styled.input``;
export const CheckWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;
export const CheckCon = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 48%;
`;
export const TextArea = styled.textarea`
  width: 95%;
  max-width: 95%;
  /* padding: 10px; */
  margin: 10px;
  height: 100px;
`;
export const BottomBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const SubmitBtn = styled.button`
  width: 80%;
  height: 40px;
  color: black;
  border: none;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const Count = styled.input`
  width: 10%;
  height: 30px;
`;
export const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
