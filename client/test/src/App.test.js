import React from 'react';
import App from '../../src/components/App';
import { mount } from 'enzyme';

describe('App', () => {
  it('Displays correct welcome message', () => {
    const wrapper = mount(<App />);

    expect(wrapper.text()).to.equal('Welcome to the Bluebeam Web Development Homework!!');
  });
});
