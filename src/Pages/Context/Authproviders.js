import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthProvider = createContext();
const AuthProviders = ({children}) => {
    return (
        <AuthProvider.Provider value={useFirebase()}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProviders;