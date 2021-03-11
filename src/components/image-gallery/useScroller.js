import {
  useState,
  useRef,
  useEffect
} from "react";

function useScroller({ max, selectedFirst = false, PREVIOUS, NEXT } = {}) {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const ScrollController = () => {
    if (!scrollRef) {
      return;
    }

    const nav = scrollRef.current.querySelector('nav'),
      list = nav.querySelector('ul');
    let itemWidth = list.querySelector('li').offsetWidth,
      visibleMaxIndex = selectedFirst ? 0 : Math.floor(nav.offsetWidth / itemWidth),
      left = selectedFirst || index > visibleMaxIndex ? (index - visibleMaxIndex) * itemWidth : 0;

    list.scroll({
      left,
      top: 0,
      behavior: 'smooth'
    })

  };

  const scrollPrevious = () => {
    let newIndex = Math.max(index - 1, 0) % max;
    setIndex(newIndex);
    return setIndex(newIndex)
  };
  const scrollNext = () => {
    let newIndex = Math.min(index + 1, max) % max;
    setIndex(newIndex);
    return setIndex(newIndex)
  };

  let PreviousButton = {
    ...PREVIOUS,
    isDisabled: index <= 0,
    disabled: index <= 0,
    onClick: scrollPrevious
  },
    NextButton = {
      ...NEXT,
      isDisabled: index >= (max - 1),
      disabled: index >= (max - 1),
      onClick: scrollNext
    };

  useEffect(ScrollController, [index]);

  return { scrollRef, index, setIndex, PreviousButton, NextButton };
}

export default useScroller;