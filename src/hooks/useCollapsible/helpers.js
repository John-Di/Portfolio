/**
 * Returns the element height including margins
 * @param element - element
 * @returns {number}
 */
const outerHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element)

  return ['top', 'bottom']
    .map(side => parseInt(style[`margin-${side}`]))
    .reduce((total, side) => total + side, height)
}

const getLongestWidth = (width, li) => width > li.offsetWidth ? width : li.offsetWidth;
const getDropdownHeight = (height, li) => height + outerHeight(li);

const getOuterHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element)

  return ['top', 'bottom']
    .map(side => parseInt(style[`margin-${side}`]))
    .reduce((total, side) => total + side, height)
}

const getTallest = (height, li) => {
  const tileOuterHeight = getOuterHeight(li);
  return height > tileOuterHeight ? height : tileOuterHeight;
};

export const adjustDropdownDimensions = (el, isExpanded) => {
  if (!el) {
    return;
  }
  const height = isExpanded ? [...el.querySelectorAll('li')].reduce(getDropdownHeight, 0) : 0;

  el.querySelector('ul').style.height = `${(height + (height ? 2 : 0)) / 16}em`;
};

export const slideOverlay = (el, isExpanded) => {
  if (!el) {
    return;
  }

};

export const normalizeTileHeights = (el, isExpanded) => {
  if (!el) {
    return;
  }
  console.log('el', el, el.children);

  const { children } = el;
  let tallest = 0;//[...el.childNodes].querySelector('article').reduce(getTallest, 0);

  for (let li of Array.from(children)) {
    console.log(li, li.querySelector('article'));
    tallest = getTallest(tallest, li.children[0]);
  }

  const height = el ? `${(tallest / 16) + 2}em` : 'auto';

  Array.from(el.children).forEach(li => {
    li.style.height = height;
  })

}