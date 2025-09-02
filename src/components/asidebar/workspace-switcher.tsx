import { Plus } from "lucide-react";
import { SidebarGroupLabel } from "../ui/sidebar";

const WorkspaceSwitcher = () => {
  return (
    <>
      <SidebarGroupLabel className="w-full justify-between pr-0">
        <span>Workspaces</span>
        <button className="flex size-5 items-center justify-center rounded-full border">
          <Plus className="size-3.5" />
        </button>
      </SidebarGroupLabel>
    </>
  );
};

export default WorkspaceSwitcher;
