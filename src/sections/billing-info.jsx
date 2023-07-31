import React, { useState, useContext, useRef } from 'react';
import { InputField } from '../components/input-field';
import { InputSelect } from '../components/input-select';
import { Button } from '../components/button';
import { usePaymentInputs } from 'react-payment-inputs';
import Context from '../store/Context';
const cards = [
   {
      name: 'Visa',
      value: 'visa',
   },
   {
      name: 'Master Card',
      value: 'master-card',
   },
];

export const BillingInfo = ({
   handlePreviousStep,
   handleNextStep,
   refresh,
}) => {
   const [isCardNumberValid, setIsCardNumberValid] = useState(true);
   const handleCardNumberBlur = (event) => {
      const value = event.target.value;
      setIsCardNumberValid(value.trim() !== '');
   };

   const context = useContext(Context);
   const billingFormRef = useRef(null);
   const resetForm = () => {
      billingFormRef.current.reset();
   };
   context.resetForm = resetForm;
   const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
      usePaymentInputs();
   return (
      <form ref={billingFormRef} onSubmit={handleNextStep}>
         <InputField label={'Name on Card'} required />
         <InputSelect label={'Card type'} required options={cards} />
         <div className="states">
            <div className="cardDetails">
               <InputField
                  label={'Card details'}
                  customInput={
                     <input
                        {...getCardNumberProps({
                           onBlur: handleCardNumberBlur,
                        })}
                     />
                  }
               />
               {!isCardNumberValid && (
                  <p className="errorText">Card number is required.</p>
               )}
            </div>
            <div className="expiryDate">
               <InputField
                  label={'Expiry date'}
                  customInput={
                     <input
                        {...getExpiryDateProps({
                           onBlur: handleCardNumberBlur,
                        })}
                     />
                  }
               />
               {!isCardNumberValid && (
                  <p className="errorText">Date is required.</p>
               )}
            </div>
            <div className="cvc">
               <InputField
                  label={'CVV'}
                  customInput={
                     <input
                        {...getCVCProps({ onBlur: handleCardNumberBlur })}
                     />
                  }
               />
               {!isCardNumberValid && (
                  <p className="errorText">CVC is required.</p>
               )}
            </div>
         </div>
         {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}

         <div className="bottomNavigation">
            <Button name={'Next'} type={'submit'} />
            <p onClick={refresh}>Cancel Payment</p>
         </div>
         <div className="goHome">
            <p onClick={handlePreviousStep}>Go back</p>
         </div>
      </form>
   );
};
