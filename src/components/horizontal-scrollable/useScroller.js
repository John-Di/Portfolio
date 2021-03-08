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
    let itemWidth = list.querySelector('li').offsetWidth,
      visibleMaxIndex = selectedFirst ? 0 : Math.floor(nav.offsetWidth / itemWidth) - 1,
      left = selectedFirst || galleryState.index > visibleMaxIndex ? (galleryState.index - visibleMaxIndex) * itemWidth : 0;

    list.scroll({
      left,
      top: 0,
      behavior: 'smooth'
    })
    // list.scrollLeft = ;
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