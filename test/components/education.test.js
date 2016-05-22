import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import EducationComponent from '../../src/components/education';

describe('EducationComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(EducationComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('education-component');
  });
});
