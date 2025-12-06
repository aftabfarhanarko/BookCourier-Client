import React, { use } from 'react';
import { AuthCntext } from '../contexts/AuthComtext';

const useAuth = () => {
    const {user} = use(AuthCntext);
    return user
};

export default useAuth;