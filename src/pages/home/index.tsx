import LogoutDialog from "@/components/asidebar/logout-dialog";
import AuthButton from "@/components/auth/auth-button";
import Navbar from "@/components/navbar";
import useAuth from "@/hooks/api/use-auth";
import { Users, ClipboardList, History } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const { data: authData } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />

      <div className="flex flex-col min-h-screen bg-slate-50 ">
        <main className="flex-1">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
            <div className="relative container mx-auto px-6 lg:px-8 py-24 md:py-36">
              <div className="max-w-3xl mx-auto text-center text-black">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                  Collaborate smarter, manage better
                </h1>

                <p className="text-base md:text-xl text-gray-700 mb-10">
                  Welcome to TeamCollab, your all-in-one platform for seamless
                  team collaboration, project tracking, and task management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AuthButton authData={authData} />
                </div>
              </div>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-slate-50 rounded-t-[100%]" />
          </section>

          {/* FEATURES */}
          <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Work with clarity and confidence
                </h2>
                <p className="text-gray-600">
                  Everything you need to organize teams, projects, and workflows
                  in one place.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Card 1 */}
                <div className="group rounded-sm bg-white p-8 shadow-sm border border-gray-100 transition hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Workspace Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create and manage dedicated workspaces for your teams and
                    clients. Keep everything organized and secure.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group rounded-sm bg-white p-8 shadow-sm border border-gray-100 transition hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                    <ClipboardList className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Project & Task Tracking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay on top of projects with task boards, priorities, due
                    dates, and assignments. Everything your team needs to move
                    work forward.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group rounded-sm bg-white p-8 shadow-sm border border-gray-100 transition hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                    <History className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Collaboration & Audit Logs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Collaborate with role-based access, comments, and real-time
                    updates. Stay accountable with detailed audit logs for every
                    action.
                  </p>
                </div>
              </div>
            </div>
          </section>

       
          <section className="py-20 md:py-28 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to empower your team?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join teams who organize, collaborate, and grow with TeamCollab.
              </p>
            </div>
          </section>
        </main>
      </div>

      <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Home;
