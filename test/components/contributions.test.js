import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import ContributionsComponent from '../../src/components/contributions';

describe('ContributionsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ContributionsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('contributions-component');
  });
});
