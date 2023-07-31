import React, { useContext, useRef } from 'react';
import Context from '../store/Context';

export const InputField = ({
   label,
   type,
   info,
   required,
   customInput,
   placeholder,
   errorEmail,
}) => {
   const inputRef = useRef(null);
   const context = useContext(Context);
   const { inputStatesObj, setInputStatesObj } = useContext(Context);
   context.inputRef = inputRef.current;
   return (
      <div className="inputField">
         <div className="labelField">
            <label>{label}</label>
            {(required || customInput) && <p className="asteric">*</p>}
         </div>
         {info && <p>{info}</p>}

         {customInput ? (
            customInput
         ) : (
            <input
               ref={inputRef}
               className={errorEmail && 'redBorder'}
               type={type ?? 'text'}
               value={inputStatesObj[label] ?? ''}
               onChange={(e) => {
                  setInputStatesObj((prev) => {
                     return {
                        ...prev,
                        [label]: e.target.value,
                     };
                  });
               }}
               required={required}
               placeholder={placeholder}
            />
         )}
      </div>
   );
};
