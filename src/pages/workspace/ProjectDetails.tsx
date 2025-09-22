import ProjectAnalytics from "@/components/worksapce/project/project-analytics";
import ProjectHeader from "@/components/worksapce/project/project-header";
import TaskTable from "@/components/worksapce/task/task-table";
import { Separator } from "@radix-ui/react-separator";

const ProjectDetails = () => {
  return (
    <div className="w-full space-y-6 py-4 md:pt-3">
      <ProjectHeader />
      <div className="space-y-5">
        <ProjectAnalytics />
        <Separator />
        {/* {Task Table} */}
        <TaskTable />
      </div>
    </div>
  );
};

export default ProjectDetails;
