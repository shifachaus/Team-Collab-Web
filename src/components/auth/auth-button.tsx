import type { CurrentUserResponseType } from "@/types/api.type";
import { useNavigate } from "react-router-dom";

type AuthButtonProps = {
  authData?: CurrentUserResponseType;
};

const AuthButton: React.FC<AuthButtonProps> = ({ authData }) => {
  const navigate = useNavigate();
  if (!authData?.user) {
    return (
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-sm"
        onClick={() => navigate("/sign-in")}
      >
        Get Started
      </button>
    );
  }

  const workspace = authData?.user.currentWorkspace;

  return (
    <button
      className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
      onClick={() => navigate(`/workspace/${workspace._id}`)}
    >
      Visit Your Workspace
    </button>
  );
};

export default AuthButton;
