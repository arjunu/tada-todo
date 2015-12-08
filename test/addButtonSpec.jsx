import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import AddButton from '../src/add-button'

describe('AddButton', function () {

  it('should not be undefined', function () {
    var component = TestUtils.renderIntoDocument(<AddButton />);
    var element = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
    expect(element).toBeTruthy();
  });

});