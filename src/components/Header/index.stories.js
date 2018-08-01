import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('Header', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Header
      displayName="hueter"
      profilePic="https://avatars0.githubusercontent.com/u/13444851"
      type="user"
    />
  ))
  .add('with alternate props', () => (
    <Header
      displayName="hooli"
      profilePic="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/032018/untitled-1_402.png"
      type="company"
    />
  ));
