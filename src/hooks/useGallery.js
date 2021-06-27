import {
  useState,
  useRef,
  useEffect
} from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import { randomBool } from '../utils/randoms';

const selectedFirst = randomBool();

function useGallery({ images = [], currentImages = [], currentIndex = 0 }) {
  const imageCount = currentImages.length ? currentImages.length : images.length;
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(currentIndex),
    mainImage = currentImages.length ? currentImages[index] : images[index],
    Image = typeof mainImage === 'object' ? GatsbyImage : undefined;

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
    images: currentImages.length ? currentImages : images,
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