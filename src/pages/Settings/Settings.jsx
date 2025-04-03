import { useState, useCallback } from "react";
import { styled } from "styled-components";
import { useDropzone } from "react-dropzone";
import { utils as xlsxUtils, read as xlsxRead } from "xlsx";
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
import { Checkbox } from "@/components/ui/checkbox";
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
} from "@/components/ui/table";
import { isAfter } from "date-fns";

const Headline = styled.h2`
  font-size: 24px;
  font-weight: 800;
  font-family: Roboto, sans-serif;
`

const Label = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
`

const BtnAction = styled.button`
  border: 1px solid ${props => (props.primary ? "transparent" : "#7E1417")};
  background-color: ${props => (props.primary ? "#7E1417" : "#FFF")};
  color: ${props => (props.primary ? "#FFF" : "#7E1417")};
  font-weight: 500;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  padding: 10px 20px;
  border-radius: 26px;
  cursor: pointer;
`

const InputField = styled.input`
  border: 2px solid #7E1417;
  border-radius: 5px;
  width: 100%;
`

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

  const [parsedData, setParsedData] = useState([]);
  const [fileName, setFileName] = useState("");

  const onDropBills = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileName(file.name);

      const reader = new FileReader();

      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = xlsxRead(data, { type: "array" });
        const sheetName = "2017-2018";

        if (workbook.SheetNames.includes(sheetName)) {
          const worksheet = workbook.Sheets[sheetName];
          let sheetData = xlsxUtils.sheet_to_json(worksheet);

          sheetData = sheetData.map(row => ({
            ...row,
            DOI: typeof row.DOI === "number" ? convertExcelDate(row.DOI) : row.DOI
          }));

          setParsedData(sheetData); // Send parsed data to parent component
        } else {
          alert("Sheet does not exists");
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }, [setParsedData]);

  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <SidebarProvider>
          <div className="px-5 py-5 w-full grid-cols-2 grid gap-5">
            <SidebarTrigger className="md:hidden" />
            <div className="grid grid-cols-2 bg-white p-5 gap-5 col-span-2 rounded-xs">
              <div>
                <div className="flex flex-col gap-5">
                  <Headline>EMPLOYEES</Headline>
                  <div className="p-3 bg-white rounded-xs drop-shadow-md">
                    <InputField/>
                  </div>
                </div>
                <div className="mt-5">
                  <EmployeeFields label={"FIRST NAME"}/>
                  <EmployeeFields label={"LAST NAME"}/>
                  <EmployeeFields label={"EMAIL ADDRESS"}/>
                  <EmployeeFields label={"PASSWORD"}/>
                  <EmployeeFields label={"STATUS"}/>
                  <div className="flex justify-between mt-5">
                    <BtnAction>Undo Changes</BtnAction>
                    <BtnAction primary>Save Changes</BtnAction>
                  </div>
                </div>
              </div>
              <div>
                <DataTable columns={columns} data={data} />
              </div>
            </div>
            <ExcelImportContainer headline="Biils Upload" />
            <BillsUpload />
            <BillsUpload />
            <SubFacilityAccess />
            <ExportPanel />
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}

const EmployeeFields = ({label}) => {
  return (
    <div className="flex items-center justify-between mt-2.5 gap-5">
      <div className="w-1/4">
        <Label>{label}</Label>
      </div>
      <div className="w-3/4">
        <InputField/>
      </div>
    </div>
  )
}

const ExcelImportContainer = ({headline, onDrop}) => {
  const DropzoneWrapper = styled.div`
    border: 4px dashed #CBD0DC;
    width: 100%;
    height: 230px;
  `
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
        "text/csv": [".csv"],
        "application/vnd.ms-excel": [".xls"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
        "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
    },
    onDrop,
    multiple: false
  });

  return (
    <div className="p-5 h-80 bg-white rounded-xs drop-shadow-md">
      <Headline>{headline}</Headline>
      <DropzoneWrapper {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </DropzoneWrapper>
      <div className="flex justify-end w-full gap-1">
        <BtnAction>Clear</BtnAction>
        <BtnAction primary>Save</BtnAction>
      </div>
    </div>
  )
}

function BillsUpload() {
  return (
    <div className="p-5 h-80 bg-white rounded-xs drop-shadow-md">
      <Headline>BILLS UPLOAD</Headline>
      <div className="w-full bg-amber-500 h-50"></div>
      <div className="flex justify-end w-full gap-1">
        <BtnAction>Clear</BtnAction>
        <BtnAction primary>Save</BtnAction>
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

export default Settings;
