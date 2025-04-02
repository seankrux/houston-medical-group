import { useState, React } from "react";
import companyLogo from "@/assets/logo.png";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
  FileDown,
  FilePlus,
  Plus,
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
      <div className="flex h-full w-full bg-background-color task-background">
        <div className="px-5 py-5 w-full">
          <div className="w-full bg-white rounded-md shadow-lg py-5 px-10 field-container">
            <h2 className='page-title'>WORKFLOW TASKS</h2>
            <div className="flex items-center input-container">
              <div className="w-50 label-container">
                <h2>TASK SUBJECT</h2>
              </div>
              <Input className='text-fields'></Input>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>DESCRIPTION</h2>
              </div>
              <Input className='text-fields'></Input>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>DUE DATE</h2>
              </div>
              <Dropdown/>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>REMINDERS</h2>
              </div>
              <div className='btn-container'>
                <Button className='reminder-btn'>
                  <Plus className="new-task-icon"></Plus>
                  Add New Task
                </Button>
              </div>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>ASSIGNED TO</h2>
              </div>
              <Dropdown/>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>PRIORITY</h2>
              </div>
              <Dropdown/>
            </div>
            <div className="flex items-center mt-5 input-container">
              <div className="w-50 label-container">
                <h2>TASKS</h2>
              </div>
              <Input className='text-fields'></Input>
            </div>
          </div>

          <Button className='new-task-btn'>
            Add New Task
            <FilePlus className="new-task-icon"></FilePlus>
          </Button>
        </div>
        
      </div>
    </>
  );
}

function Dropdown() {
  const [selected, setSelected] = useState();
  const items = [
    "All",
    "Downtown",
    "Northside",
    "Pasadena",
    "Katy",
    "Southwest",
    "Bellair Family Clinic",
  ];

  const dropdownItems = items.map((item, idx) => {
    return (
      <DropdownMenuItem key={idx} onClick={() => onItemSelected(item)} className='dropdown-item'>
        {item}
      </DropdownMenuItem>
    );
  });

  const onItemSelected = (item) => {
    return setSelected(item);
  };

  return (
    <div className="flex items-center mb-4">
      <DropdownMenu className="">
        <DropdownMenuTrigger asChild={true}>
          <div className="flex items-center border-2 border-primary-color rounded-sm py-1 px-2.5 dropdown-container">
            {/* <Button variant="outline" className="w-44 truncate border-2 outline-none text-lg font-normal bg-accent-gray rounded-sm focus-visible:ring-0 focus-visible:border-primary-color">
            {selected ? selected : "All"}
          </Button> */}
            <h2 className="w-40 text-lg dropdown-title">{selected ? selected : "All"}</h2>
            <ChevronDown className="dropdown-icon"></ChevronDown>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='dropdown-content'>
          <DropdownMenuLabel className="dropdown-label">Sub Facility</DropdownMenuLabel>
          <DropdownMenuSeparator className="dropdown-separator"/>
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Tasks;
