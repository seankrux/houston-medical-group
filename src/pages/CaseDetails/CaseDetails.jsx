import { useState, React } from "react";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
  Trash2,
  Edit2,
  FilePlus2,
  Upload,
  UploadIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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

const pageIndex = 4;

function CaseDetails() {
  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <div className="px-5 py-5 w-full">
            <Input />
          <div className="panel-parent">
            <div className='small-ones panel-container'>
              <CaseInformation />
              <HistoryLog />
              <InvolvedInCase />
              <Attorneys />
            </div>
            <div className='big-ones panel-container'>
              <MedicalBills />
              <CaseOverview />
              <Files />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CaseInformation() {
  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>CASE INFORMATION</h2>
      <div className='case-info-container'>
        <div className="flex justify-between">
          <h2 className='field-label'>Case Number</h2>
          <h2 className='field-value'>2591</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Created</h2>
          <h2 className='field-value'>11/14/2023</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Type</h2>
          <h2 className='field-value'>Slip and Fall</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Status</h2>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

function HistoryLog() {
  const historyLog = [
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
    { date: "09/23/2024", status: "Start Collection" },
  ];

  const histLogComp = historyLog.map((val, idx) => {
    return (
      <div className="flex justify-between case-hist-details" key={idx}>
        <div className="flex gap-2.5">
          <h2 className='field-label'>Date:</h2>
          <h2 className='field-value'>{val.date}</h2>
        </div>
        <div className="flex gap-2.5">
          <h2 className='field-label'>Status:</h2>
          <h2 className='field-value'>{val.status}</h2>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>HISTORY LOG</h2>
      <div className="h-40 bg-red-300 overflow-y-auto hist-log-container">{histLogComp}</div>
    </div>
  );
}

function InvolvedInCase() {
  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>INVOLVED IN CASE</h2>
      <div className="involved-in-case-cont">
        <h2 className='field-label'>Claimant</h2>
        <div className="flex claimant-details">
          <UserCircleIcon className="case-details-user-icon"></UserCircleIcon>
          <h2 className='field-value'>John Doe</h2>
        </div>
      </div>
    </div>
  );
}

function Attorneys() {
  // cc = collections contact
  const attorneys = [
    {
      name: "Attorney X",
      company: "PNP Law",
      email: "attyxpnplaw.com",
      phone: "8-7000",
      role: "Referring Attorney",
      pendingLawsuit: false,
      cc: false,
    },
    {
      name: "Attorney Y",
      company: "NPN Law",
      email: "attyynpnlaw.com",
      phone: "8-7000",
      role: "Co-counsel",
      pendingLawsuit: true,
      cc: true,
    },
  ];

  const attyComp = attorneys.map((value, idx) => {
    return (
      <div key={idx} className='atty-details-container'>
        <div className="flex mb-2.5 atty-name">
          <UserCircleIcon className="case-details-user-icon"></UserCircleIcon>
          <h2>{value.name}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Company</h2>
          <h2 className='field-value'>{value.company}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Email</h2>
          <h2 className='field-value'>{value.email}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Phone</h2>
          <h2 className='field-value'>{value.phone}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Role</h2>
          <h2 className='field-value'>{value.role}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className='field-label'>Pending Lawsuit</h2>
          <input type="checkbox" className="atty-checkbox"/>
        </div>
        <div className="flex justify-between">
          <h2 className='field-label'>Collections Contact</h2>
          <input type="checkbox" className="atty-checkbox"/>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className="mb-5 panel-title">ATTORNEYS</h2>
      <div className="grid gap-5">{attyComp}</div>
    </div>
  );
}

function MedicalBills() {
  const columns = [
    { accessorKey: "healthProvider", header: "Health Provider" },
    { accessorKey: "originalBalance", header: "Original Balance" },
    { accessorKey: "paid", header: "Paid" },
    { accessorKey: "outstanding", header: "Outstanding" },
    { accessorKey: "reducedAmount", header: "ReducedAmount" },
  ];

  const data = [
    {
      id: "728ed52f",
      healthProvider: "KATY",
      originalBalance: "$ 20,000.00",
      paid: "$ 0.00",
      outstanding: "$ 20,000.00",
      reducedAmount: "$ 20,000.00",
    },
    {
      id: "728ed52f",
      healthProvider: "KATY",
      originalBalance: "$ 20,000.00",
      paid: "$ 0.00",
      outstanding: "$ 20,000.00",
      reducedAmount: "$ 20,000.00",
    },
    {
      id: "728ed52f",
      healthProvider: "KATY",
      originalBalance: "$ 20,000.00",
      paid: "$ 0.00",
      outstanding: "$ 20,000.00",
      reducedAmount: "$ 20,000.00",
    },
    {
      id: "728ed52f",
      healthProvider: "KATY",
      originalBalance: "$ 20,000.00",
      paid: "$ 0.00",
      outstanding: "$ 20,000.00",
      reducedAmount: "$ 20,000.00",
    },
  ];

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>MEDICAL BILLS</h2>
      <div className="h-50 overflow-y-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

function CaseOverview() {
  const [isOnNotes, setIsOnNotes] = useState(true);

  const notes = [
    {
      name: "Marissa Gil",
      datetime: "Jan 26, 2025 4:07PM",
      note: "Called patient LVM asking for a call back to be scheduled",
    },
    {
      name: "Marissa Gil",
      datetime: "Jan 26, 2025 4:07PM",
      note: "Contact the attorney",
    },
    {
      name: "Marissa Gil",
      datetime: "Jan 26, 2025 4:07PM",
      note: "Contact the attorney",
    },
    {
      name: "Marissa Gil",
      datetime: "Jan 26, 2025 4:07PM",
      note: "Contact the attorney",
    },
    {
      name: "Marissa Gil",
      datetime: "Jan 26, 2025 4:07PM",
      note: "Contact the attorney",
    },
  ];

  const notesComp = notes.map((note, idx) => {
    return (
      <div
        className="flex justify-between border-t-2 border-t-gray-300 note-container"
        key={idx}
      >
        <div>
          <div className="note-header">
            <UserCircleIcon className="case-details-user-icon"></UserCircleIcon>
            <div className='note-header-name'>
              <h2 className='note-author'>{note.name}</h2>
              <h2 className='date-label'>{note.datetime}</h2>
            </div>
          </div>
          <h2 className='note'>{note.note}</h2>
        </div>
        <div>
          <Button className='btn'>
            <Trash2></Trash2>
            Delete
          </Button>
          <Button className='btn'>
            <Edit2></Edit2>
            Edit
          </Button>
        </div>
      </div>
    );
  });

  const notesSection = (
    <>
      <div className="flex w-full justify-end">
        <Button className='btn'>
          <FilePlus2></FilePlus2>
          Add Notes
        </Button>
      </div>
      <div className="grid gap-5 h-60 overflow-y-auto">{notesComp}</div>
    </>
  );

  const taskSection = (
    <>
      <div className="flex w-full justify-end">
        <Button className='btn'>
          <FilePlus2></FilePlus2>
          Add Task
        </Button>
      </div>
      <div className="grid gap-5 h-60 overflow-y-auto bg-red-300">
        {notesComp}
      </div>
    </>
  );

  const handleSectionClicked = (notesPressed) => {
    setIsOnNotes(notesPressed);
  };

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>CASE OVERVIEW</h2>
      <div className="flex gap-2.5">
        <h2>Date of Accident:</h2>
        <h2>09/23/24</h2>
      </div>
      <div className='nav-container'>
        <Button onClick={() => handleSectionClicked(true)} className={`btn-nav ${isOnNotes ? "btn-nav-active" : ""}`}>
          <div>
            Notes
            <div className='underline-comp'>
            </div>
          </div>
        </Button>
        <Button onClick={() => handleSectionClicked(false)} className={`btn-nav ${!isOnNotes ? "btn-nav-active" : ""}`}>
          <div>
            Tasks
            <div className='underline-comp'>
            </div>
          </div>
        </Button>
      </div>
      <div className="">{isOnNotes === true ? notesSection : taskSection}</div>
    </div>
  );
}

function Files() {
  const files = [
    {
      fileName: "thisfile.pdf",
      type: "Medical Records",
      uploadedBy: "Levy Rafeedie",
      dateUploaded: "Jan 29, 2025 4:07PM",
    },
    {
      fileName: "thisfile.pdf",
      type: "Medical Records",
      uploadedBy: "Levy Rafeedie",
      dateUploaded: "Jan 29, 2025 4:07PM",
    },
    {
      fileName: "thisfile.pdf",
      type: "Medical Records",
      uploadedBy: "Levy Rafeedie",
      dateUploaded: "Jan 29, 2025 4:07PM",
    },
    {
      fileName: "thisfile.pdf",
      type: "Medical Records",
      uploadedBy: "Levy Rafeedie",
      dateUploaded: "Jan 29, 2025 4:07PM",
    },
  ];

  const filesComp = files.map((file, idx) => {
    return (
      <div key={idx} className="border-t-2 border-t-gray-300 file-detail-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ReceiptTextIcon color="red"/>
            <h2 className='file-name'>{file.fileName}</h2>
          </div>
          <div className="flex">
            <Button className='btn'>
              <Trash2></Trash2>
              Delete
            </Button>
            <Button className='btn'>
              <Edit2></Edit2>
              Edit
            </Button>
          </div>
        </div>
        <div className='field-details'>
          <div className="flex justify-between">
            <h2 className='file-field-label'>Type:</h2>
            <h2>{file.type}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className='file-field-label'>Uploaded by:</h2>
            <h2>{file.uploadedBy}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className='file-field-label'>Date Uploaded:</h2>
            <h2>{file.dateUploaded}</h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className='panel-title'>FILES</h2>
      <div className="flex justify-end">
        <Button className='btn'>
          <UploadIcon></UploadIcon>
          Upload File
        </Button>
      </div>
      <div className="h-50 overflow-y-auto">{filesComp}</div>
    </div>
  );
}

function Dropdown(items, name, defaultIdx) {
  const [selected, setSelected] = useState();
  const items = [
    "Downtown",
    "Northside",
    "Pasadena",
    "Katy",
    "Southwest",
    "Bellair Family Clinic",
  ];

  const onItemSelected = (item) => {
    setSelected(item);
  };

  const dropdownItems = items.map((item, idx) => (
    <DropdownMenuItem
      key={idx}
      onClick={() => onItemSelected(item)}
      className="dropdown-item"
    >
      {item}
    </DropdownMenuItem>
  ));

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="dropdown-container">
            <span className="dropdown-title">
              {selected ? selected : "Sub Facility"}
            </span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dropdown-content">
          <DropdownMenuLabel className="dropdown-label">
            Sub Facility
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="dropdown-separator" />
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
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
    <div className="rounded-md border data-table-container">
      {/* Scrollable wrapper */}
      <div className="data-table-scroll">
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center data-table-empty"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}


export default CaseDetails;
