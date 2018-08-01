import React from 'react';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Signup from '.';

storiesOf('Signup', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Signup
      error={{ hasError: false, title: '', message: '' }}
      clearError={action()}
      setError={action()}
    />
  ));
