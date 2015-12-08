import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import ContentEditable from '../src/content-editable'

describe('ContentEditable', function () {

  it('should not be undefined', function () {
    var Component = TestUtils.renderIntoDocument(<ContentEditable />);
    var element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});