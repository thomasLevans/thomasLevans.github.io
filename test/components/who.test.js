import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import WhoComponent from '../../src/components/who';

describe('Who Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(WhoComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('who-component');
  });
});
