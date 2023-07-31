import React, { useState } from 'react';
import Context from './Context'

const Provider = ( { children } ) => {
   const [inputStatesObj, setInputStatesObj] = useState({})

   const value = {
    inputStatesObj,
    setInputStatesObj
   };
   return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;