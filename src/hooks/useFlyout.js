import {
  useState
} from "react";

function useFlyout({ initState = false }) {

  const [isOpen, toggleState] = useState(initState),
    openFlyout = () => toggleState(true),
    closeFlyout = () => toggleState(false),
    toggleFlyout = () => toggleState(!isOpen);

  return { isOpen, openFlyout, closeFlyout, toggleFlyout };
}

export default useFlyout;