import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import Modal, { Close } from '../client/src/components/Modal.jsx';

describe('Modal test suite', () => {
  it('Should have Close Button,', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(Close)).to.have.lengthOf(1);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Close onClick={onButtonClick} />);
    wrapper.simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
