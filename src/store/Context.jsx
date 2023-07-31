import React from 'react';

const FormContext = React.createContext( {
   setInputStatesObj: () => { },
   inputStatesObj: {}
} );

export default FormContext;