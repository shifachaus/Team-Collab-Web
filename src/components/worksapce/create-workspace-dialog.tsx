import useCreateWorkspaceDialog from "@/hooks/use-create-workspace-dialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import WorkspaceForm from "./create-workspace-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const CreateWorkspaceDialog = () => {
  const { open, onClose } = useCreateWorkspaceDialog();
  return (
    <Dialog modal={true} open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl !p-0 overflow-hidden border-0">
        <VisuallyHidden>
          <DialogTitle>Create Workspace</DialogTitle>
        </VisuallyHidden>
        <WorkspaceForm {...{ onClose }} />
      </DialogContent>
    </Dialog>
  );
};



export default CreateWorkspaceDialog;
