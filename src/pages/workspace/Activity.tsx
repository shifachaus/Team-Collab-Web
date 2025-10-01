import { Separator } from "@/components/ui/separator";
import ActivityList from "@/components/worksapce/activity/activity-list";
import WorkspaceHeader from "@/components/worksapce/common/workspace-header";

const Activity = () => {
  return (
    <div className="w-full space-y-6 py-4 md:pt-3">
      <WorkspaceHeader />
      <Separator className="my-4 " />
      <main>
        <ActivityList />
      </main>
    </div>
  );
};

export default Activity;
