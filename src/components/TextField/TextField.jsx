import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid #eee;

  &:focus {
    border-color: #4444aa;
  }

  height: ${p => p.size === 'large' ? '60px' : '30px'};
`;

export const TextField = p => <Input {...p} />
