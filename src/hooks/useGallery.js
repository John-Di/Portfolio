import {
  useState,
  useRef,
  useEffect
} from "react";
import { randomBool } from '../utils/randoms';

const selectedFirst = randomBool();

function useGallery({ max, images = [], currentIndex = 0 } = {}) {
  const imageCount = images.length;
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(currentIndex);

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
  useEffect(ScrollController, [index]);

  const updateIndex = index => setIndex(index),
    scrollPrevious = () => {
      let newIndex = Math.max(index - 1, 0) % images.length;
      return setIndex(newIndex)
    }, scrollNext = () => {
      let newIndex = Math.min(index + 1, images.length) % images.length;
      return setIndex(newIndex)
    };

  return {
    scrollRef,
    index,
    images,
    updateIndex,
    isCurrent: i => index === i,
    hasNavButtons: imageCount > 4,
    atBeginning: index === 0,
    atEnd: index === images.length - 1,
    scrollPrevious,
    scrollNext
  };
}

export default useGallery;