const getOuterHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element);

  return ['top', 'bottom']
    .map(side => ['margin'].map(type => parseInt(style[`${type}-${side}`])).reduce((acc, k, i) => acc + k, 0))
    .reduce((total, side) => total + side, height)
}

export const normalizeTileHeights = (listEl, isExpanded) => {

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