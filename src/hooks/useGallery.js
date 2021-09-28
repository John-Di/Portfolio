import {
  useState,
  useRef,
  useEffect
} from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import { randomBool } from '../utils/randoms';

const selectedFirst = randomBool();

function useGallery({ images = [], currentIndex = 0, max }) {
  const imageCount = images.length;
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(currentIndex),
    mainImage = images[index],
    Image = typeof mainImage === 'object' ? GatsbyImage : undefined;

  const ScrollController = () => {
    if (!scrollRef || !scrollRef.current) {
      return;
    }

    const nav = scrollRef.current.querySelector('nav'),
      list = nav.querySelector('ul');

  };
  useEffect(ScrollController, [index]);
  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex]);

  const updateIndex = index => setIndex(index),
    scrollPrevious = () => {
      let newIndex = Math.max(index - 1, 0) % imageCount;
      setIndex(newIndex)
      return newIndex;
    }, scrollNext = () => {
      let newIndex = Math.min(index + 1, imageCount) % imageCount;
      setIndex(newIndex)
      return newIndex;
    };

  return {
    scrollRef,
    index,
    images,
    Image,
    mainImage,
    atBeginning: index === 0,
    atEnd: index === imageCount - 1,
    scrollPrevious,
    scrollNext,
    updateIndex,
    isCurrent: i => index === i
  };
}

export default useGallery;