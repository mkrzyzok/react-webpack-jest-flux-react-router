'use strict';

jest.dontMock('../ProductsList.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
import {ProductsList} from '../ProductsList.js';

describe('ProductsList', () => {

  var productslist = TestUtils.renderIntoDocument(<ProductsList />);

  it('render without problems', () => {
    expect(productslist).toBeTruthy();
  });

});

