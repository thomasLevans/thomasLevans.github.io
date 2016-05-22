import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import SkillsComponent from '../../src/components/skills';

describe('SkillsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(SkillsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('skills-component');
  });
});
