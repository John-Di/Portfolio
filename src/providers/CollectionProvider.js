import React from "react";
import CollectionContext from '../contexts/CollectionContext';
import useCollection from "../hooks/useCollection";

const CollectionProvider = ({
  products = [],
  children
}) => {
  const hook = useCollection({ products });
  return (
    <CollectionContext.Provider value={hook}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;
