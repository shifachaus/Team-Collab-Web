import { Dialog, DialogContent } from "@/components/ui/dialog";
import CreateProjectForm from "@/components/worksapce/project/create-project-form";
import useCreateProjectDialog from "@/hooks/use-create-project-dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const CreateProjectDialog = () => {
  const { open, onClose } = useCreateProjectDialog();
  return (
    <div>
      <Dialog modal={true} open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg border-0">
        <VisuallyHidden
        >
          <DialogTitle>Create Workspace</DialogTitle>
        </VisuallyHidden>
          <CreateProjectForm {...{ onClose }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProjectDialog;