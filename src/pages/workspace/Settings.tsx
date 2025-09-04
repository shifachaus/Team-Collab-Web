import EditWorkspaceForm from "@/components/worksapce/edit-workspace-form";

const Settings = () => {
  return (
    <div className="w-full h-auto py-2">
      <main>
        <div className="w-full mx-w-3xl mx-auto py-3">
          <h2 className="text-[20px] leading-[30px] font-semibold mb-3">
            Workspace settings
          </h2>
        </div>

        <div className="flex flex-col pt-0.5 px-0 ">
            <div className="pt-2">
              <EditWorkspaceForm />
            </div>
            <div className="pt-2">
            </div>
          </div>
      </main>
    </div>
  );
};

export default Settings;
