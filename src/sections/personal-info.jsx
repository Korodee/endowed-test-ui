import { useState, useEffect, useRef, useContext } from 'react';
import { InputField } from '../components/input-field';
import { InputSelect } from '../components/input-select';
import { Button } from '../components/button';
import Context from '../store/Context';

export const PersonalInfo = ({ handleNextStep, refresh, errorEmail }) => {
   const personalInfoRef = useRef(null);
   const [states, setStates] = useState([]);

   useEffect(() => {
      fetchStates();
   }, []);

   const fetchStates = async () => {
      try {
         const response = await fetch('/states.json');
         if (!response.ok) {
            throw new Error('Network response was not ok.');
         }
         const data = await response.json();
         setStates(data.data);
      } catch (error) {
         console.error('Error fetching states:', error);
      }
   };

   const context = useContext(Context);
   context.personalInfoRef = personalInfoRef;

   return (
      <form ref={personalInfoRef} onSubmit={handleNextStep}>
         <InputField label={'Name'} required={false} />
         <InputField
            required={true}
            type={'email'}
            label={'Email Address'}
            errorEmail={errorEmail}
            info={'The purchase receipt would be sent to this address'}
         />
         {errorEmail && (
            <p className="errorText">
               Invalid email, Please enter a valid email address
            </p>
         )}
         <InputField label={'Address 1'} required={false} />
         <InputField label={'Address 2'} />
         <div className="states">
            <div className="lga">
               <InputField label={'Local Government'} required={false} />
            </div>
            <div className="state">
               <InputSelect label={'State'} options={states} />
            </div>
         </div>

         <div className="bottomNavigation">
            <Button name={'Next'} type={'submit'} />
            <p onClick={refresh}>Cancel Payment</p>
         </div>
      </form>
   );
};
