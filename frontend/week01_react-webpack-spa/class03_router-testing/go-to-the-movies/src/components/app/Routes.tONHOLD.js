import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Routes, { Home } from './Routes';

it('passing test', () => {
  let wrapper = render(
    <MemoryRouter>
      <Routes/>
    </MemoryRouter>
  );
  const home = wrapper.find(Home);
  console.log(home);
  expect(home.length).toBe(1);
});