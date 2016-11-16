import React from 'react';
import { mount, shallow } from 'enzyme';

import TemplateComponent from '../../components/TemplateComponent';

describe('<TemplateComponent />', () => {
  it('should be a <div>', () => {
    const wrapper = shallow(<TemplateComponent />);
    expect(wrapper.type()).to.equal('div');
  });
});
