// src/__tests__/Event.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  test('render details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('renders details information and expands', () => {
    const EventWrapper = shallow(<Event />);
    const query = EventWrapper.state('query');
    expect(EventWrapper.find('.details').prop('value')).toBe(query);
  });
});