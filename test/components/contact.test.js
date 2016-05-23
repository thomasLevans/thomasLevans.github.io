import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import ContactComponent from '../../src/components/contact';

describe('ContactComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ContactComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('contact-component');
  });
});
