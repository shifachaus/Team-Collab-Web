import { createContext, useContext, useEffect } from "react";

type AuthContextType = {
  workspaceId: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const workspaceId = "";

  useEffect(() => {});
  return (
    <AuthContext.Provider value={{ workspaceId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useCurerntUserContext must be used withing a AuthProvider"
    );
  }

  return context;
};
