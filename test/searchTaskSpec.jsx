import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import SearchTask from '../src/search-task'

describe('SearchTask', function () {

  it('should not be undefined', function () {
    var Component = TestUtils.renderIntoDocument(<SearchTask />);
    var element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});