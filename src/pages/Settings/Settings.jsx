import { useState } from "react";
import companyLogo from "../../assets/logo.png";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Checkbox } from "../../components/ui/checkbox.jsx";
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
} from "../../components/ui/sidebar.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu.jsx";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table.jsx";

function Settings() {
  const columns = [
    { accessorKey: "status", header: "Status" },
    { accessorKey: "email", header: "Email" },
  ];

  const data = [
    {
      id: "728ed52f",
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <>
      <SidebarProvider>
        <AppSideBar selectedIdx={8} />
      </SidebarProvider>
    </>
  );
}

function BillsUpload() {
  return (
    <div className="p-5 h-80 bg-white rounded-xs drop-shadow-md">
      <h2>BILLS UPLOAD</h2>
      <div className="w-full bg-amber-500 h-50"></div>
      <div className="flex justify-end w-full gap-1">
        <Button>Undo Changes</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

function SubFacilityAccess() {
  return (
    <div className="p-5 h-80 bg-white rounded-xs drop-shadow-md">
      <h2>SUB-FACILITY ACCESS</h2>
      <div className="">
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <LabeledCheckbox label={"Allow action 1"} />
        <LabeledCheckbox label={"Allow action 1"} />
        <LabeledCheckbox label={"Allow action 1"} />
      </div>
      <div className="flex justify-between">
        <Button>Undo Changes</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

function LabeledCheckbox({ label }) {
  return (
    <div className="flex items-center gap-1">
      <Checkbox />
      <h2>{label}</h2>
    </div>
  );
}

function ExportPanel() {
  return (
    <div className="p-5 h-80 bg-white rounded-xs drop-shadow-md">
      <h2>EXPORT</h2>
      <div>
        <h2>ATTORNEYS</h2>
        <div className="flex justify-center">
          <Button>Download XLSX</Button>
        </div>
      </div>
      <div>
        <h2>ATTORNEYS</h2>
        <div className="flex justify-center">
          <Button>Download XLSX</Button>
        </div>
      </div>
      <div>
        <h2>ATTORNEYS</h2>
        <div className="flex justify-center">
          <Button>Download XLSX</Button>
        </div>
      </div>
    </div>
  );
}

function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function Dropdown() {
  const [selected, setSelected] = useState();
  const items = [
    "Downtown",
    "Northside",
    "Pasadena",
    "Katy",
    "Southwest",
    "Bellair Family Clinic",
  ];

  const dropdownItems = items.map((item, idx) => {
    return (
      <DropdownMenuItem key={idx} onClick={() => onItemSelected(item)}>
        {item}
      </DropdownMenuItem>
    );
  });

  const onItemSelected = (item) => {
    return setSelected(item);
  };

  return (
    <div className="flex items-center">
      <h2 className="mr-4">Sub Facility</h2>
      <DropdownMenu className="">
        <DropdownMenuTrigger asChild={true}>
          <Button variant="outline" className="w-36 truncate">
            {selected ? selected : "Sub Facility"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Sub Facility</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
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
    <>TERST</>
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

export default Settings;
