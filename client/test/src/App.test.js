import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('Displays correct welcome message', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains('Welcome to the Bluebeam Web Development Homework!!')).to.equal(true);
  });
});
