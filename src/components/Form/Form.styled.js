import styled from 'styled-components';

import { Form } from 'formik';

export const FormStyles = styled(Form)`
  padding: 16px;
  font-weight: 500;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  background-color: rgb(50, 80, 220);
  border-radius: 80px/20px; 
  color: yellow;
`;

export const Label = styled.label`
width: 250px;
  font-weight: 500;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
 
`;

export const SubmitBtn = styled.button`
padding: 8px;
border-radius: 5px;
cursor: pointer;
 background-color: yellow;
:focus{
    border 2px solid #000000;
  };
border:none;
  `