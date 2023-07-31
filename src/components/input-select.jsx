import React from 'react';

export const InputSelect = ({ label, options, info, required }) => {
   return (
      <div className="inputField">
         <div className="labelField">
            <label>{label}</label>
            {required && <p className="asteric">*</p>}
         </div>
         {info && <p>{info}</p>}
         <select required={false}>
            {options.map((option) => (
               <option value={option.id} key={option.id}>
                  {option.name}
               </option>
            ))}
         </select>
      </div>
   );
};
