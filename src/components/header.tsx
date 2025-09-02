import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link } from "react-router-dom";
import useWorkspaceId from "@/hooks/use-workspace-id";

const Header = () => {
  const workspaceId = useWorkspaceId();
  return (
    <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block text-[15px]">
              <BreadcrumbLink asChild>
                <Link to={`/workspace/${workspaceId}`}>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <>
              <BreadcrumbSeparator className="hidden md:block">
                <BreadcrumbItem className=" text-[15px]">
                  <BreadcrumbPage className="line-clamp-1">
                    {/* {pageHeading} */}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbSeparator>
            </>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default Header;
