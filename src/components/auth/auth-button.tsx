import type { CurrentUserResponseType } from "@/types/api.type";
import { useNavigate } from "react-router-dom";

interface AuthButtonProps {
  authData: CurrentUserResponseType;
}

const AuthButton: React.FC<AuthButtonProps> = ({ authData }) => {
  const navigate = useNavigate();
  const user = authData?.user;

  if (!user) {
    return (
      <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-sm">
        Sign In
      </button>
    );
  }

  const workspace = user.currentWorkspace;

  console.log(workspace,user);
  

  return (
    <button
      className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
      onClick={() => navigate(`/workspace/${workspace._id}`)}
    >
      {workspace ? `Go to ${workspace.name}` : "Check it Out"}
    </button>
  );
};

export default AuthButton;
