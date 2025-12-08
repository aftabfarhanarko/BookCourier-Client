import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSchore from '../../../hooks/useAxiosSchore';
import useAuth from '../../../hooks/useAuth';

const PaymentSuccess = () => {
    const axioscehore = useAxiosSchore();
    const {user} = useAuth();
      const [searchParems] = useSearchParams();
      const sessionId = searchParems.get("session_id")
      console.log(searchParems.get("session_id"));
      
      useEffect(()=> {
        if(sessionId){
            axioscehore.patch(`success-payment?sessionId=${sessionId}`)
            .then(res => {
                console.log(res);       
            })
        }
      },[sessionId, axioscehore])
   
    return (
        <div>
            paymentSuccess
        </div>
    );
};

export default PaymentSuccess;