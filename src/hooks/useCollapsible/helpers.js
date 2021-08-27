/**
 * Returns the element height including margins
 * @param element - element
 * @returns {number}
 */
const outerHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element)

  return ['top', 'bottom']
    .map(side => ['margin'].map(type => parseInt(style[`${type}-${side}`])))
    .reduce((total, side) => total + side, height)
}

const getLongestWidth = (width, li) => width > li.offsetWidth ? width : li.offsetWidth;
const getDropdownHeight = (height, li) => height + outerHeight(li);

const getOuterHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element);

  return ['top', 'bottom']
    .map(side => ['margin'].map(type => parseInt(style[`${type}-${side}`])).reduce((acc, k, i) => acc + k, 0))
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

export const normalizeTileHeights = (listEl, isExpanded) => {

  console.log('normalizeTileHeights', listEl);
  if (!listEl) {
    return;
  }

  const items = Array.from(listEl.children);

  const { children } = listEl;
  let tallest = 0;
  let i = 0;

  for (let li of items) {
    let height = getOuterHeight(children[i++]);
    tallest = tallest >= height ? tallest : height;
  }

  const height = `${(tallest / 16)}${tallest === 0 ? '' : 'em'}`;

  items.forEach(li => {
    li.style.height = height;
  })

}