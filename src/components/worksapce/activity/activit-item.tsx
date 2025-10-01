import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarColor, getAvatarFallbackText } from "@/lib/helper";
import type { AuditLog } from "@/types/api.type";
import { format } from "date-fns";

type ActivityItemProps = {
  auditlogs: AuditLog;
};

interface Metadata {
  projectName?: string;
  taskName?: string;
  workspaceName?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ auditlogs }) => {
  const { action, entityType, createdBy, metadata, createdAt } = auditlogs;

  const name = createdBy?.name;
  const initials = getAvatarFallbackText(name);
  const avatarColor = getAvatarColor(name);

  const getNameLabel = (metadata: Metadata) => {
    if (metadata?.projectName) return "Project";
    if (metadata?.taskName) return "Task";
    if (metadata?.workspaceName) return "Workspace";
    return "";
  };

  const getNameValue = (metadata: Metadata) => {
    return (
      metadata?.projectName ||
      metadata?.taskName ||
      metadata?.workspaceName ||
      ""
    );
  };

  const entityName =
    entityType === "PROJECT" && action === "UPDATE" && metadata?.oldValue
      ? metadata?.oldValue.name + " project"
      : entityType === "WORKSPACE" && action === "UPDATE" && metadata?.oldValue
      ? metadata?.oldValue.name + " Workspace"
      : "Task";

  return (
    <li
      role="listitem"
      className="flex flex-col gap-2 rounded-xl p-3 hover:bg-gray-50 transition-colors ease-in-out"
    >
      {/* Action */}
      <p className="text-sm font-semibold text-foreground">
        {entityType} <span className="capitalize">{action}</span>
      </p>

      {/* Content */}
      <div className="flex flex-col w-full">
        <div className="flex  items-center">
          <div className="flex gap-1 flex-wrap sm:flex-nowrap">
            {action === "CREATE" && metadata && (
              <>
                <p className="text-sm text-muted-foreground">
                  {getNameLabel(metadata)}{" "}
                  <span className="font-medium">{getNameValue(metadata)}</span>{" "}
                  was created
                </p>

                {entityType === "TASK" && metadata?.taskCodeId && (
                  <p className="text-sm text-muted-foreground">
                    with ID {metadata.taskCodeId}
                  </p>
                )}
              </>
            )}

            {metadata?.assignedTo && (
              <p className="text-sm text-muted-foreground">
                assigned to{" "}
                <span className="font-medium">
                  {typeof metadata.assignedTo === "string"
                    ? metadata.assignedTo
                    : metadata.assignedTo?.name}
                </span>
              </p>
            )}
          </div>

          <div>
            {action === "DELETE" && metadata && (
              <>
                <p className="text-sm text-muted-foreground">
                  {getNameLabel(metadata)}{" "}
                  <span className="font-medium">{getNameValue(metadata)}</span>{" "}
                  was deleted
                </p>
                {entityType === "TASK" && metadata?.taskCodeId && (
                  <p className="text-sm text-muted-foreground">
                    with ID {metadata.taskCodeId}
                  </p>
                )}
              </>
            )}
          </div>

          <div>
            {action === "UPDATE" && metadata && (
              <>
                <p className="text-sm text-muted-foreground">
                  {entityName}{" "}
                  <span className="font-medium">{metadata?.taskCodeId}</span>{" "}
                  was updated.
                </p>

                {metadata.oldValue && metadata.newValue && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    <ul className="ml-3 space-y-1">
                      <li>
                        <strong>Name:</strong>{" "}
                        <span className="font-medium">
                          "{metadata.oldValue.name}"
                        </span>{" "}
                        →{" "}
                        <span className="font-medium">
                          "{metadata.newValue.name}"
                        </span>
                      </li>
                      {entityType === "TASK" && (
                        <>
                          <li>
                            <strong>Priority:</strong>{" "}
                            <span className="font-medium">
                              "{metadata.oldValue.priority}"
                            </span>{" "}
                            →{" "}
                            <span className="font-medium">
                              "{metadata.newValue.priority}"
                            </span>
                          </li>
                          <li>
                            <strong>Status:</strong>{" "}
                            <span className="font-medium">
                              "{metadata.oldValue.status}"
                            </span>{" "}
                            →{" "}
                            <span className="font-medium">
                              "{metadata.newValue.status}"
                            </span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* Avatar + Timestamp */}
        <div className="flex items-center gap-1.5 mt-2 ">
          <Avatar className="h-[20px] w-[20px]">
            <AvatarImage
              src={createdBy?.profilePicture || ""}
              alt={name || "User"}
            />
            <AvatarFallback
              className={`${avatarColor} text-[.65rem] font-medium`}
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          <p className="text-xs text-muted-foreground whitespace-nowrap">
            {name} created{" "}
            {createdAt
              ? format(new Date(createdAt), "MMM d, yyyy 'at' h:mm a")
              : null}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ActivityItem;
