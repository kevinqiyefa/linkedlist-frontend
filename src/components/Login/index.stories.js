import React from 'react';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Login from '.';

storiesOf('Login', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Login
      error={{ hasError: false, title: '', message: '' }}
      clearError={action()}
      setError={action()}
    />
  ));
