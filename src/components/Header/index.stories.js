import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '.';

storiesOf('Header', module)
  .addDecorator(story => (
    <div style={{ backgroundColor: 'darkgray', padding: '50px' }}>
      {story()}
    </div>
  ))
  .add('default', () => <Header />)
  .add('with alternate props', () => <Header cool />);
