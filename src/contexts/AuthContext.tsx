
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User } from 'firebase/auth';
import { 
  auth, 
  registerUser, 
  loginUser, 
  logoutUser, 
  onAuthStateChange, 
  UserData 
} from '@/lib/firebase';

interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  loading: boolean;
  register: (userData: UserData & { password: string }) => Promise<{ success: boolean }>;
  login: (email: string, password: string) => Promise<{ success: boolean }>;
  logout: () => Promise<{ success: boolean }>;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
      setLoading(false);
      
      // In a real app, you would fetch user data from Firestore here
      if (user) {
        // Mock user data for demonstration
        setUserData({
          username: "Usuario HABY",
          email: user.email || "usuario@haby.edu",
          folio: "HAB12345",
          curp: "XXXX000000XXXXXX00",
          userType: "student"
        });
      } else {
        setUserData(null);
      }
    });
    
    return unsubscribe;
  }, []);
  
  const register = async (userData: UserData & { password: string }) => {
    try {
      // Strip out password before sending to registerUser function
      const { password, ...userDataWithoutPassword } = userData;
      const result = await registerUser(userDataWithoutPassword);
      return { success: result.success };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false };
    }
  };
  
  const login = async (email: string, password: string) => {
    try {
      const result = await loginUser({ email, password });
      return { success: result.success };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false };
    }
  };
  
  const logout = async () => {
    try {
      await logoutUser();
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return { success: false };
    }
  };

  const value = {
    currentUser,
    userData,
    loading,
    register,
    login,
    logout,
    isLoggedIn: !!currentUser,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
