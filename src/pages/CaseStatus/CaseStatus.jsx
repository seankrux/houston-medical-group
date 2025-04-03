import { useState, React } from "react";
import { ChevronDown, Menu, Search, FileDown, SearchIcon } from "lucide-react";
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
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
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

function CaseStatus() {
  const [currentCols, setCurrentCols] = useState([
    { accessorKey: "patientId", header: "Patient ID", activated: true },
    { accessorKey: "firstName", header: "First Name", activated: true },
    { accessorKey: "lastName", header: "Last Name", activated: true },
    { accessorKey: "doi", header: "DOI", activated: true },
    { accessorKey: "clinic", header: "Clinic", activated: true },
    { accessorKey: "attyName", header: "Atty Name", activated: true },
    { accessorKey: "dateMailed", header: "Date Mailed", activated: true },
    { accessorKey: "downtown", header: "Downtown", activated: false },
    { accessorKey: "northside", header: "Northside", activated: false },
    { accessorKey: "pasadena", header: "Pasadena", activated: false },
    { accessorKey: "katy", header: "Katy", activated: false },
    { accessorKey: "southwest", header: "Southwest", activated: false },
    { accessorKey: "bellairFamilyClinic", header: "Bellair Family Clinic", activated: false },
    { accessorKey: "starAlliance", header: "Star Alliance", activated: false },
    { accessorKey: "hmgTotal", header: "HMG Total", activated: false },
    { accessorKey: "paid", header: "Paid", activated: true },
  ]);

  const activeColumns = currentCols.filter(col => col.activated).map(col => ({
    accessorKey: col.accessorKey,
    header: col.header
  }));

  const allCols = currentCols.map(col => (col.header));
  
  const numItems = [25, 50, 75, 100, "All"];
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2023];
  const status = [
    "Demand",
    "No Recovery",
    "Dropped",
    "Litigation",
    "LOR",
    "Mediation",
    "Inactive",
    "PIP",
    "Negotiation",
    "Par Paid - HMG PMD",
    "Paid",
    "Par Paid - BFC PND",
    "Pending",
    "Settled",
    "Start Collection",
    "Bills Sent",
  ];
  const data = [
    { patientId: 1, firstName: 'John', lastName: 'Doe', clinic: 'Northside', attyName: 'Jane Smith', doi: '2025-01-01', dateMailed: '2025-01-02', paid: 29000 },
    { patientId: 2, firstName: 'Alice', lastName: 'Johnson', clinic: 'Downtown', attyName: 'Mark Adams', doi: '2025-01-03', dateMailed: '2025-01-04' },
  ];

  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <SidebarProvider>
          <AppSideBar selectedIdx={1} />
          <SidebarInset className="overflow-hidden bg-background-color">
            <div className="px-5 py-5 w-full">
              <SidebarTrigger className="md:hidden" />
              <div className="">
                <div className="">
                  <div className='flex-col md:flex md:flex-row md:gap-2.5'>
                    <div className='flex md:w-2/3 gap-1 justify-between'>
                      <Input 
                        className="border-2 border-primary-color focus-visible:ring-0 focus-visible:outline-none focus-visible:border-primary-color md:grow"
                        placeholder="Patient ID, First Name, Last Name, Atty Name"
                      />
                      <Button className="bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg">
                        <SearchIcon></SearchIcon>
                      </Button>
                    </div>
                    <div className='flex justify-evenly mt-2 md:gap-2.5 md:mt-0'>
                      <Button className="w-2/5 md:w-30 rounded-3xl bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg">Add Note</Button>
                      <Button className="w-2/5 md:w-40 rounded-3xl bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg">
                        Download
                        <FileDown className="size-6"></FileDown>
                      </Button>
                    </div>
                  </div>
                  <div className='lg:flex md:mt-2'>
                    <div className='flex mt-2.5 gap-2.5 md:mt-0'>
                      <Dropdown
                        items={numItems}
                        name={"Number of Results"}
                        defaultIdx={0}
                      />
                      <Dropdown items={status} name={""} defaultIdx={0} />
                      <DropdownMenuCheckboxes/>
                    </div>
                    <div className='flex gap-5'>
                      <Dropdown items={years} name={"From"} defaultIdx={0} />
                      <Dropdown items={years} name={"To"} defaultIdx={years.length - 1} />
                    </div>
                  </div>
                </div>
                <DataTable columns={activeColumns} data={data} />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}

function Dropdown({ items, name, defaultIdx }) {
  const [selected, setSelected] = useState(items[defaultIdx]);

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
    <div className="flex items-center font-roboto text-lg">
      {name ? <h2 className="mr-2">{name}</h2> : null}
      <DropdownMenu className="">
        <DropdownMenuTrigger asChild={true}>
          <Button variant="outline" className="w-36 truncate border-2 border-primary-color rounded-md flex justify-between text-base">
            {selected ? selected : "Sub Facility"}
            <ChevronDown className="text-primary-color"></ChevronDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel></DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='border-2 border-primary-color font-roboto text-base'>
          Columns
          <ChevronDown className="text-primary-color"></ChevronDown>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
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

export default CaseStatus;