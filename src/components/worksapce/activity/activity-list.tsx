import useWorkspaceId from "@/hooks/use-workspace-id";
import { getAuditLogsQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Loader } from "lucide-react";
import ActivityItem from "./activit-item";
import { format } from "date-fns";

const ActivityList = () => {
  const workspaceId = useWorkspaceId();

  const { data, isPending } = useQuery({
    queryKey: ["audit-log", workspaceId],
    queryFn: () => getAuditLogsQueryFn(workspaceId),
    staleTime: 0,
    enabled: !!workspaceId,
  });

  const auditLogs = data?.auditlog || [];

  const groupLogsByDate = (logs: any[]) => {
    return logs.reduce((groups: Record<string, any[]>, log) => {
      const date = format(new Date(log.createdAt), "MMM d, yyyy");
      if (!groups[date]) groups[date] = [];
      groups[date].push(log);
      return groups;
    }, {});
  };

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

      <ol className="mt-2 space-y-6">
        {Object.entries(groupLogsByDate(auditLogs || [])).map(
          ([date, logs]) => (
            <li key={date} className="space-y-3">
              {/* Date header */}
              <div className="flex items-center gap-1">
                <Calendar size={14} />{" "}
                <h3 className="text-sm font-semibold text-gray-500">
                  Activity on {date}
                </h3>
              </div>

              <ol className="space-y-4 ml-1">
                {logs.map((log) => (
                  <ActivityItem key={log._id} auditlogs={log} />
                ))}
              </ol>
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default ActivityList;
