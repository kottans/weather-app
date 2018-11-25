
export const createDomFragment = string => {
  const template = document.createElement('template');
  template.innerHTML = string.trim();
  return template.content;
};

export const clearDomChildren = domElement => {
  domElement.innerHTML = '';
  return domElement;
};

export const appendDomFragment = (domElement, domFragment) => {
  if (Array.isArray(domFragment)) {
    domElement.append(...domFragment);
  } else {
    domElement.append(domFragment);
  }
  return domElement;
};

export const buildDomFragment = (host, elements) => {
  elements.forEach(elementSpec => {
    let element = document.createElement(typeof elementSpec.tag === 'string' ? elementSpec.tag : 'div');
    if (elementSpec.innerHTML) {
      element.innerHTML = elementSpec.innerHTML;
    }
    if (elementSpec.classList) {
      if (typeof elementSpec.classList === 'string') {
        elementSpec.classList = elementSpec.classList.split(' ');
      }
      element.classList.add(...elementSpec.classList);
    }
    if (!(typeof elementSpec.tag === 'string')) {
      new elementSpec.tag(element, elementSpec.props);
    }
    if (elementSpec.children) {
      buildDomFragment(element, elementSpec.children);
    }
    host.appendChild(element);
  });
  return host;
};

export const bindScope = (scope, ...names) => {
  names.forEach(name => {
    if (typeof scope[name] === 'function') {
      scope[name] = scope[name].bind(scope);
    } else {
      throw Error(
        `Expected ${name} to be a function. Instead ${name} is ${typeof scope[name]}`
      );
    }
  });
};
