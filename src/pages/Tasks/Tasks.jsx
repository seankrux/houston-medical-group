import { useState, React } from "react";
import companyLogo from "@/assets/logo.png";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Tasks() {
  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <SidebarProvider>
          <AppSideBar selectedIdx={4} />
          <div className="px-5 py-5 w-full">
            <SidebarTrigger className="md:hidden" />
            <div className="w-full bg-white rounded-md shadow-lg py-5 px-10">
              <h2>WORKFLOW TASKS</h2>
              <div className="flex items-center">
                <div className="w-50">
                  <h2>TASK SUBJECT</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>DESCRIPTION</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>DUE DATE</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>REMINDERS</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>ASSIGNED TO</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>PRIORITY</h2>
                </div>
                <Input></Input>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-50">
                  <h2>TASKS</h2>
                </div>
                <Input></Input>
              </div>
            </div>
            <Button>Add New Task</Button>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}

// The components below are the repetitive components

function AppSideBar({ selectedIdx }) {
  const items = [
    { title: "Dashboard", url: "#" },
    { title: "Case Status", url: "#" },
    { title: "Calendar", url: "#" },
    { title: "Tasks", url: "#" },
    { title: "Case Details", url: "#" },
    { title: "Dropped", url: "#" },
    { title: "Contacts", url: "#" },
    { title: "Report", url: "#" },
    { title: "Settings", url: "#" },
  ];

  return (
    <Sidebar className="3xs top-24 md:sticky h-full">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-lighter-primary hover:text-white ${idx === selectedIdx ? "bg-primary-color text-white" : ""}`}
                  >
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function Header() {
  function Nav({ name, url }) {
    return (
      <div>
        <a href={url} className="font-bold flex text-sm items-center">
          {name}
          <ChevronDown className="size-6 stroke-primary-color" />
        </a>
      </div>
    );
  }

  return (
    <div className="px-5 py-5 h-24 flex bg-white items-center place-content-between border-b-1">
      <div className="flex gap-2.5">
        <img src={companyLogo} alt="Logo not found" className="size-12" />
        <div>
          <h1 className="text-lg font-bold">Houston Medical Group</h1>
          <p className="text-sm">
            Working United in the Community to Better Healthcare
          </p>
        </div>
      </div>
      <div className="">
        <Menu className="size-8 lg:hidden"></Menu>
      </div>
      <div className="gap-5 items-center hidden lg:flex">
        <Nav name={"Home"} url={"https://lucide.dev/icons/square"}></Nav>
        <Nav name={"About Us"} url={"facebook.com"}></Nav>
        <Nav name={"Services"} url={"facebook.com"}></Nav>
        <Nav name={"Patients/Visitors"} url={"facebook.com"}></Nav>
        <Nav name={"Dashboard"} url={"facebook.com"}></Nav>
        <Nav name={"Contact Us"} url={"facebook.com"}></Nav>
      </div>
    </div>
  );
}

export default Tasks;
