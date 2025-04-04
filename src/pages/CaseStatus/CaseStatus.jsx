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
  const [cols, setCols] = useState([
    { accessorKey: "patientId", header: "Patient ID", isActivated: true },
    { accessorKey: "firstName", header: "First Name", isActivated: true },
    { accessorKey: "lastName", header: "Last Name", isActivated: true },
    { accessorKey: "doi", header: "DOI", isActivated: true },
    { accessorKey: "clinic", header: "Clinic", isActivated: true },
    { accessorKey: "attyName", header: "Atty Name", isActivated: true },
    { accessorKey: "dateMailed", header: "Date Mailed", isActivated: true },
    { accessorKey: "downtown", header: "Downtown", isActivated: false },
    { accessorKey: "northside", header: "Northside", isActivated: false },
    { accessorKey: "pasadena", header: "Pasadena", isActivated: false },
    { accessorKey: "katy", header: "Katy", isActivated: false },
    { accessorKey: "southwest", header: "Southwest", isActivated: false },
    { accessorKey: "bellairFamilyClinic", header: "Bellair Family Clinic", isActivated: false },
    { accessorKey: "starAlliance", header: "Star Alliance", isActivated: false },
    { accessorKey: "hmgTotal", header: "HMG Total", isActivated: false },
    { accessorKey: "paid", header: "Paid", isActivated: true },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedQty, setSelectedQty] = useState(25);
  const [selectedStartYr, setSelectedStartYr] = useState(2010);
  const [selectedEndYr, setSelectedEndYr] = useState(2025);

  const activeColumns = cols.filter(col => col.isActivated).map(col => ({
    accessorKey: col.accessorKey,
    header: col.header
  }));

  const allCols = cols.map(col => (col.header));
  const numItems = [25, 50, 75, 100, "All"];
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
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

  const selectId = (id) => {
    setSelectedIds([...selectedIds, id]);
  }

  const deselectId = (id) => {
    const idx = selectedIds.indexOf(id);
    const arr = [...selectedIds];

    if (idx > -1) {
      arr.splice(idx, 1);
    }

    setSelectedIds(arr);
  }

  const toggleSelect = (id) => {
    if(selectedIds.includes(id)) {
      deselectId(id);
    }else {
      selectId(id);
    }
  }

  const printSelectedIds = () => {
    console.log(selectedIds);
  }

  const toggleCol = (idx) => {
    const newCols = [...cols];
    newCols[idx] = {...newCols[idx], isActivated: !newCols[idx].isActivated};
    setCols(newCols);
  }

  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <div className="px-5 py-5 w-full">
          <div className="">
            <div className="">
              <div className='flex md:flex-row gap-2.5 items-center'>
                <div className='flex md:w-2/3 gap-1 grow items-center'>
                  <Input 
                    className="border-2 border-primary-color focus-visible:ring-0 focus-visible:outline-none focus-visible:border-primary-color md:grow search-box"
                    placeholder="Patient ID, First Name, Last Name, Atty Name"
                  />
                  <Button className="bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg btn" onClick={printSelectedIds}>
                    <SearchIcon></SearchIcon>
                  </Button>
                </div>
                <div className='flex justify-evenly md:gap-2.5 md:mt-0 items-center gap-2'>
                  <Button className="w-2/5 md:w-30 rounded-3xl bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg btn">Add Note</Button>
                  <Button className="w-2/5 md:w-40 rounded-3xl bg-primary-color cursor-pointer hover:bg-lighter-primary text-lg btn">
                    Download
                    <FileDown className="size-6"></FileDown>
                  </Button>
                </div>
              </div>
              <div className='flex-col mb-2'>
                <div className='flex mt-2.5 gap-2.5 md:mt-0'>
                  <Dropdown
                    items={numItems}
                    name={"Number of Results"}
                    selectedItem={selectedQty}
                    selector={setSelectedQty}
                  />
                  <Dropdown items={status} name={""} category={"Status"} selectedItem={selectedStatus} selector={setSelectedStatus}/>
                  <DropdownMenuCheckboxes cols={cols} selector={toggleCol}/>
                </div>
                <div className='flex gap-5 date-field-container'>
                  <Dropdown items={years} name={"From"} category={"Year"} dateDropdown={true} selectedItem={selectedStartYr} selector={setSelectedStartYr}/>
                  <Dropdown items={years} name={"To"} category={"Year"} dateDropdown={true} selectedItem={selectedEndYr} selector={setSelectedEndYr}/>
                </div>
              </div>
            </div>
            <DataTable columns={activeColumns} data={data} selector={toggleSelect}/>
          </div>
        </div>
      </div>
    </>
  );
}

function Dropdown({ items, name, category, dateDropdown = false, selectedItem, selector }) {

  const dropdownItems = items.map((item, idx) => (
    <DropdownMenuItem key={idx} onClick={() => selector(item)} className="dropdown-item">
      {item}
    </DropdownMenuItem>
  ));

  return (
    <div className={`flex items-center font-roboto text-lg mb-4 field-container ${dateDropdown === true ? "date-dropdown" : ""}`}>
      {name ? <h2 className="mr-2 dropdown-desc">{name}</h2> : null}
      <DropdownMenu className="">
        <DropdownMenuTrigger asChild={true}>
          <div className="flex items-center border-2 border-primary-color rounded-sm py-1 px-2.5 dropdown-container">
            <h2 className="w-9/10 text-lg dropdown-title">{selectedItem ? selectedItem : category}</h2>
            <ChevronDown className="w-1/10 dropdown-icon" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dropdown-content">
          <DropdownMenuLabel className="dropdown-label">{category ? "Select " + category : ""}</DropdownMenuLabel>
          <DropdownMenuSeparator className="dropdown-separator" />
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


function DropdownMenuCheckboxes({cols, selector}) {
  // const [showStatusBar, setShowStatusBar] = useState(true);
  // const [showActivityBar, setShowActivityBar] = useState(false);
  // const [showPanel, setShowPanel] = useState(false);

  const checkboxItems = cols.map((col, idx) => {

    return (
      <DropdownMenuCheckboxItem
        checked={col.isActivated}
        onCheckedChange={() => selector(idx)}
        className="dropdown-item checkbox-item"
      >
        <span className="checkbox-label">{col.header}</span>
      </DropdownMenuCheckboxItem>
    );

  })

  return (
    <DropdownMenu className=''>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center border-2 border-primary-color rounded-sm py-1 px-2.5 dropdown-container">
          Select Columns
          <ChevronDown className="text-primary-color dropdown-icon" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dropdown-content">
        <DropdownMenuLabel className="dropdown-label">Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator className="dropdown-separator" />
        {checkboxItems}
      </DropdownMenuContent>

    </DropdownMenu>
  );
}


function DataTable({ columns, data, toggleSelect }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border data-table-container">
      <Table className="data-table">
        <TableHeader className="data-table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="data-table-row">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="data-table-head">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="data-table-body">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="data-table-row"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="data-table-cell">
                    {cell.column.id === "patientId" ? (
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="data-table-checkbox" onChange={() => toggleSelect(row.original.patientId)}/>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="data-table-row">
              <TableCell colSpan={columns.length} className="h-24 text-center data-table-empty">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CaseStatus;