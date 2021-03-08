import {
  useReducer,
  useState,
  useEffect
} from "react";

const actionTypes = {
  id: 'ID',
  option: 'OPTION'
}

export const scrollReducer = (state, action) => {
  let { index, setIndex } = action;

  return action;
}
function useScroller({ reducer = scrollReducer, ref, max, index = 0, setIndex, selectedFirst = false } = {}) {

  const [galleryState, SaveScrollLeft] = useReducer(reducer, { index });

  const ScrollController = () => {
    if (!ref) {
      return;
    }

    const nav = ref.current.querySelector('nav'),
      list = nav.querySelector('ul');
    let itemWidth = list.querySelector('li').offsetWidth;
    let visibleMaxIndex = selectedFirst ? 0 : Math.floor(nav.offsetWidth / itemWidth) - 1;
    list.scrollLeft = selectedFirst || galleryState.index > visibleMaxIndex ? (galleryState.index - visibleMaxIndex) * itemWidth : 0;
  };

  const scrollPrevious = index => {
    let newIndex = Math.max(index, 0) % max;
    setIndex(newIndex);
    return SaveScrollLeft({ index: newIndex, setIndex })
  };
  const scrollNext = index => {
    let newIndex = Math.min(index, max) % max;
    setIndex(newIndex);
    return SaveScrollLeft({ index: newIndex, setIndex })
  };
  useEffect(ScrollController, [galleryState.index]);

  return { galleryState, scrollPrevious, scrollNext };
}

export default useScroller;