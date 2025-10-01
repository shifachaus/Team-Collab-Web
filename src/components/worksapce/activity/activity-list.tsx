import useWorkspaceId from "@/hooks/use-workspace-id";
import { getAuditLogsQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import ActivityItem from "./activit-item";

const ActivityList = () => {
  const workspaceId = useWorkspaceId();

  const { data, isPending } = useQuery({
    queryKey: ["audit-log", workspaceId],
    queryFn: () => getAuditLogsQueryFn(workspaceId),
    staleTime: 0,
    enabled: !!workspaceId,
  });

  const auditLogs = data?.auditlog || [];

  return (
    <div className="flex flex-col space-y-6">
      {isPending ? (
        <Loader className="w-8 h-8 animate-spin place-self-center flex" />
      ) : null}
      {auditLogs?.length === 0 && (
        <div className="font-semibold text-sm text-muted-foreground text-center py-5">
          No Audit Logs Found
        </div>
      )}

      <ol className="mt-2 space-y-4">
        {auditLogs?.map((logs) => {

          
          return <ActivityItem key={logs._id} auditlogs={logs}/>;
        })}
      </ol>
    </div>
  );
};

export default ActivityList;
