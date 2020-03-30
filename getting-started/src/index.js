import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.setAttribute('style', 'color: red;')
    return element;
  } 
  
  document.body.appendChild(component());