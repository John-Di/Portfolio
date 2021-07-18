import React from "react";
import CollectionContext from '../contexts/CollectionContext';
import useCollection from "../hooks/useCollection";

const CollectionProvider = ({
  products = [],
  children
}) => {
  return (
    <CollectionContext.Provider value={useCollection({ products })}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;
