import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "./firebase";

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true
});

export default function useFirebaseAuth() {
    const [ authUser, setAuthUser] = useState(null);
    const [ isLoading, setIsLoading] = useState(true);

    const authStateChanged = async (user) => {
        setIsLoading(true);
        if(!user) {
            setAuthUser(null);
            setIsLoading(false);
            return
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        })
        setIsLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        isLoading
    }

}

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)