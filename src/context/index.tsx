import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { authFirebase } from '../../firebaseConfig';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}


interface AuthContextTestType {
  user: boolean;
  loading: boolean;
}

interface IProps {
  children: React.ReactNode;
}


const AuthContext = createContext<AuthContextTestType>({} as AuthContextTestType);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);

/*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []); */

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
