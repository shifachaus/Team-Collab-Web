import EditWorkspaceForm from "@/components/worksapce/edit-workspace-form";
import DeleteWorkspaceCard from "@/components/worksapce/settings/delete-workspace-card";
import { Permission } from "@/constant";
import withPermission from "@/hoc/with-permission";

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
              <DeleteWorkspaceCard />
            </div>
          </div>
      </main>
    </div>
  );
};

const SettingsWithPermission= withPermission(Settings, Permission.MANAGE_WORKSPACE_SETTINGS)

export default SettingsWithPermission;
