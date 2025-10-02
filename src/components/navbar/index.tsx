import { data, Link, useNavigate } from "react-router-dom";
import Logo from "../logo";
import useAuth from "@/hooks/api/use-auth";

const Navbar = () => {
  const { data: authData, isPending } = useAuth();
  const user = authData?.user;
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Logo />
          <span className="text-base font-bold text-gray-800">
            Team Collab.
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {!isPending && (
            <>
              {user ? (
                <>
                  <Link
                    to={`/workspace/${user?.currentWorkspace._id}|| ""}`}
                    className="text-slate-900 hover:text-sky-500"
                  >
                    Workspace
                  </Link>
                </>
              ) : (
                <button
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-sm cursor-pointer"
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
