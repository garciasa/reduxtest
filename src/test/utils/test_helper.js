import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import jsdom from 'jsdom';

chai.use(chaiEnzyme());

let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = { userAgent: 'node.js'};
global.expect = chai.expect;
global.sinon = sinon;


// Prevent mocha from interpreting SCSS @import files
function noop() {
  return null;
}

require.extensions['.scss'] = noop;
