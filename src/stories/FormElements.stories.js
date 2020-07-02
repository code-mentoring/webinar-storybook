import React from 'react';
import { TextField } from '../components/TextField/TextField';
import {actions } from '@storybook/addon-actions';

export default {
  title: 'Text Fields'
};

const events = actions({
  'onMouseEnter': 'test'
})



export const TextFields = () => {
  return <>
    <label>Small</label>
    <TextField
      onChange={console.log}
      {...events}
      // onClick={action('input-click')}
    />
    <br />

    <label>Large</label>
    <TextField
      size="large"
      onChange={console.log}
      {...events}
    // onClick={action('input-click')}
    />
  </>
}
