import React from 'react';
import { ReactComponent as Check } from '../assets/svg/check.svg';

export const PurchaseCompleted = ({ setStep }) => {
   const clickHandler = () => {
      // setStep(1);
      window.location.reload(false);
   };
   return (
      <div className="completedContainer">
         <div className="purchaseCompleted">
            <div className="icon">
               <Check />
            </div>
            <h2>Purchase Completed</h2>
            <p>
               Please check your email for details concerning this transaction
            </p>
            <p className="goHome" onClick={clickHandler}>
               Return Home
            </p>
         </div>
      </div>
   );
};
