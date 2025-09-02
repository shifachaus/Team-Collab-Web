import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar";

const NavProjects = () => {
  return (
    <>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel className="w-full justify-between pr-0">
          <span>Projects</span>
        </SidebarGroupLabel>
      </SidebarGroup>
    </>
  );
};

export default NavProjects;
