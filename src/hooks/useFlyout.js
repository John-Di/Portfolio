import {
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import PageContext from "../contexts/PageContext";

function useFlyout() {

  const ref = useRef(null),
    [isOpen, toggleState] = useState(false), {
      overlayContent,
      addOverlayContent,
      subtractOverlayContent
    } = useContext(PageContext),
    openFlyout = () => {
      addOverlayContent();
      toggleState(true)
    },
    closeFlyout = () => {
      subtractOverlayContent();
      toggleState(false);
    },
    toggleFlyout = () => {
      if (isOpen) {
        closeFlyout()
      } else {
        openFlyout()
      }
    };

  let footerHeight = 0;

  const onFooterHeightChange = () => {
    if (!ref.current) {
      return;
    }

    footerHeight = ref.current.offsetHeight;
  }

  if (isOpen && overlayContent <= 0) {
    toggleState(false);
  }

  useEffect(onFooterHeightChange, []);

  return {
    ref,
    isOpen,
    footerHeight,
    openFlyout,
    closeFlyout,
    toggleFlyout
  };
}

export default useFlyout;