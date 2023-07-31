import React, { useState, useContext } from 'react';
import Context from '../store/Context';

import { PersonalInfo } from './personal-info';
import { BillingInfo } from './billing-info';
import { ConfirmPayment } from './confirm-payment';
import { PurchaseCompleted } from './purchase-completed';

export const MainContainer = () => {
   const { inputStatesObj } = useContext(Context);
   const [step, setStep] = useState(1);
   const [errorEmail, setErrorEmail] = useState(false);

   const handleNextStep = (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if ( !emailRegex.test( inputStatesObj[ 'Email Address' ] ) ) {
         setErrorEmail(true);
      } else {
         setStep(step + 1);
      }
   };

   const handlePreviousStep = () => {
      if (step <= 1) return;
      setStep(step - 1);
   };
   const refresh = () => {
      window.location.reload(false);
   };
   return (
      <>
         {step === 4 ? (
            <PurchaseCompleted setStep={setStep} />
         ) : (
            <div className="mainContainer">
               <div className="container">
                  <h3>Complete your Purchase </h3>
                  <div className="tab">
                     <div className="tabContent">
                        <h5 className={`${step === 1 && 'active'}`}>
                           Personal Info
                        </h5>
                        <h5 className={`${step === 2 && 'active'}`}>
                           Billing Info
                        </h5>
                        <h5 className={`${step === 3 && 'active'}`}>
                           Confirm Payment
                        </h5>
                     </div>
                  </div>

                  <div className="formContainer">
                     {step === 1 && (
                        <PersonalInfo
                           handleNextStep={handleNextStep}
                           refresh={refresh}
                           errorEmail={errorEmail}
                        />
                     )}
                     {step === 2 && (
                        <BillingInfo
                           refresh={refresh}
                           handleNextStep={handleNextStep}
                           handlePreviousStep={handlePreviousStep}
                        />
                     )}
                     {step === 3 && (
                        <ConfirmPayment
                           refresh={refresh}
                           handlePreviousStep={handlePreviousStep}
                           handleNextStep={handleNextStep}
                        />
                     )}
                  </div>
               </div>
            </div>
         )}{' '}
      </>
   );
};
