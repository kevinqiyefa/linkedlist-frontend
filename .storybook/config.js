import { configure } from '@storybook/react';
import 'notosans-fontface/css/notosans-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../src/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
