
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updatePassword,
  onAuthStateChanged,
  signOut,
  User as FirebaseUser
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBWtfYqOYZifqLUZAFwjGVRd2ThDmVBHok",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "haby-open-the-doors.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "haby-abre-las-puertas",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "haby-open-the-doors.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "607937944716",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:607937944716:web:5c0c29efdf07c8e04defa9",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://haby-open-the-doors-default-rtdb.firebaseio.com"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error: any) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error);
  }
}

// Get Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Type for user data
export interface UserData {
  username: string;
  email: string;
  folio: string;
  curp: string;
  userType: 'student' | 'teacher' | 'admin';
  uid?: string;
  createdAt?: string;
  emailVerified?: boolean;
}

// Auth functions
export const registerUser = async (userData: UserData) => {
  try {
    console.log('Registering user with data:', userData);
    
    // In a real implementation, we would create the user with Firebase
    // const userCredential = await createUserWithEmailAndPassword(
    //   auth,
    //   userData.email,
    //   userData.password
    // );
    
    // await sendEmailVerification(userCredential.user);
    
    // Store additional user data in Firestore
    // const userDocRef = doc(firestore, 'users', userCredential.user.uid);
    // await setDoc(userDocRef, {
    //   username: userData.username,
    //   email: userData.email,
    //   folio: userData.folio,
    //   curp: userData.curp,
    //   userType: userData.userType,
    //   createdAt: new Date().toISOString(),
    // });
    
    return { success: true, userId: 'mock-user-id' };
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    console.log('Logging in user with credentials:', credentials);
    
    // In a real implementation, we would sign in with Firebase
    // const userCredential = await signInWithEmailAndPassword(
    //   auth,
    //   credentials.email,
    //   credentials.password
    // );
    
    return { success: true, userId: 'mock-user-id' };
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    // await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
};

export const recoverPassword = async (email: string) => {
  try {
    console.log('Password recovery for email:', email);
    // await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

export const verifyRecoveryCode = async (code: string) => {
  console.log('Verifying recovery code:', code);
  return { success: true };
};

export const updateUserPassword = async (newPassword: string) => {
  try {
    console.log('Updating password:', newPassword);
    // const user = auth.currentUser;
    // if (user) {
    //   await updatePassword(user, newPassword);
    // } else {
    //   throw new Error('No user is signed in');
    // }
    return { success: true };
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};

// Current user listener
export const onAuthStateChange = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Class related functions
export const createClass = async (classData: any) => {
  console.log('Creating class with data:', classData);
  return { success: true, classId: 'mock-class-id', classCode: 'ABC123' };
};

export const joinClass = async (classCode: string) => {
  console.log('Joining class with code:', classCode);
  return { success: true, classId: 'mock-class-id' };
};

export const getClasses = async () => {
  return [
    { 
      id: 'class1', 
      name: 'Matemáticas Avanzadas', 
      section: 'A', 
      subject: 'Matemáticas', 
      room: '101',
      teacher: 'Prof. Martínez',
      pendingTasks: 2
    },
    { 
      id: 'class2', 
      name: 'Física Cuántica', 
      section: 'B', 
      subject: 'Física', 
      room: '203',
      teacher: 'Dr. Rodríguez',
      pendingTasks: 0
    },
    { 
      id: 'class3', 
      name: 'Literatura Contemporánea', 
      section: 'C', 
      subject: 'Español', 
      room: '305',
      teacher: 'Dra. Sánchez',
      pendingTasks: 1
    }
  ];
};
