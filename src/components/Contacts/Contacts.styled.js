import styled from 'styled-components';

import { FormStyles } from 'components/Form/Form.styled';

export const FindContact = FormStyles.withComponent('div');

export const DeleteBtn = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  color: red;
  :focus{
    border 2px solid red;
  };

`;

export const Contact = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  };
`;