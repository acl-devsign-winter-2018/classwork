import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('passing test', () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.toJSON()).toMatchSnapshot();
});