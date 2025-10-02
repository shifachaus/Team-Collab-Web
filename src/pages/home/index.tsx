import AuthButton from "@/components/auth/auth-button";
import Navbar from "@/components/navbar";
import useAuth from "@/hooks/api/use-auth";
import { Users, ClipboardList, History } from "lucide-react";

const Home = () => {
  const { data: authData } = useAuth();
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Collaborate smarter, manage better
                </h1>
                <p className="text-base md:text-xl text-gray-600 mb-8">
                  Welcome to TeamCollab, your all-in-one platform for seamless
                  team collaboration, project tracking, and task management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {authData && <AuthButton authData={authData} />}
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-24 bg-white"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
            />
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Work with clarity and confidence
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Workspace Management
                  </h3>
                  <p className="text-gray-600">
                    Create and manage dedicated workspaces for your teams and
                    clients. Keep everything organized and secure.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <ClipboardList className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Project & Task Tracking
                  </h3>
                  <p className="text-gray-600">
                    Stay on top of projects with task boards, priorities, due
                    dates, and assignments. Everything your team needs to move
                    work forward.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <History className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Collaboration & Audit Logs
                  </h3>
                  <p className="text-gray-600">
                    Collaborate with role-based access, comments, and real-time
                    updates. Stay accountable with detailed audit logs for every
                    action.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to empower your team?
              </h2>
              <p className="text-base text-blue-50 mb-8 max-w-2xl mx-auto">
                Join teams who organize, collaborate, and grow with TeamCollab.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
