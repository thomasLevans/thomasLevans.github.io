import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import ArcComponent from '../../src/components/arc';

describe('ArcComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ArcComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('arc-component');
  });
});
