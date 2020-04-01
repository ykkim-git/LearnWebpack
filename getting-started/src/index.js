// ES6
import _ from 'lodash';
// var _ = require('lodash')

// -------------------------
// ES5
var path = require('path')

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack !!'], ' ');
  
  return element;
} 
  
  document.body.appendChild(component());