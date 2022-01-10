// src/__tests__/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberEvents';
import Event from '../Event';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('specify number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('show and hide event details', () => {
    expect(AppWrapper.find(Event)).toHaveLength(1);
  });

  // Add test('render show hide') and test('specify number of events)
});