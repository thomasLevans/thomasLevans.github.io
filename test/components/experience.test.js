import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import ExperienceComponent from '../../src/components/experience';

describe('ExperienceComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ExperienceComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('experience-component');
  });
});
