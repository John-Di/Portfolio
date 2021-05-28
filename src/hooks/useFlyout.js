import {
  useEffect,
  useRef,
  useState
} from "react";

function useFlyout() {

  const ref = useRef(null),
    [isOpen, toggleState] = useState(false),
    openFlyout = () => toggleState(true),
    closeFlyout = () => toggleState(false),
    toggleFlyout = () => toggleState(!isOpen);

  let footerHeight;

  const onFooterHeightChange = () => {
    if (!ref.current) {
      return;
    }

    footerHeight = ref.current.offsetHeight;
  }

  useEffect(onFooterHeightChange, []);

  return { ref, isOpen, footerHeight, openFlyout, closeFlyout, toggleFlyout };
}

export default useFlyout;