import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import TaskGroup from '../src/task-group'

describe('TaskGroup', function () {

  it('should not be undefined', function () {
    var Component = TestUtils.renderIntoDocument(<TaskGroup />);
    var element = TestUtils.findRenderedDOMComponentWithTag(Component, 'div');
    expect(element).toBeTruthy();
  });

});