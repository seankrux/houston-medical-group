import { useState, React } from "react";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HmgDataTable from "@/customComponents/HmgDataTable";
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
      <h2>CASE INFORMATION</h2>
      <div>
        <div className="flex justify-between">
          <h2>Case Number</h2>
          <h2>2591</h2>
        </div>
        <div className="flex justify-between">
          <h2>Created</h2>
          <h2>11/14/2023</h2>
        </div>
        <div className="flex justify-between">
          <h2>Type</h2>
          <h2>Slip and Fall</h2>
        </div>
        <div className="flex justify-between">
          <h2>Status</h2>
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
      <div className="flex justify-between" key={idx}>
        <div className="flex gap-2.5">
          <h2>Date:</h2>
          <h2>{val.date}</h2>
        </div>
        <div className="flex gap-2.5">
          <h2>Status:</h2>
          <h2>{val.status}</h2>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2>CASE INFORMATION</h2>
      <div className="h-40 bg-red-300 overflow-y-auto">{histLogComp}</div>
    </div>
  );
}

function InvolvedInCase() {
  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2>INVOLED IN CASE</h2>
      <div className="">
        <h2>Claimant</h2>
        <div className="flex">
          <UserCircleIcon></UserCircleIcon>
          <h2>John Doe</h2>
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
      <div key={idx}>
        <div className="flex mb-2.5">
          <UserCircleIcon></UserCircleIcon>
          {value.name}
        </div>
        <div className="flex justify-between">
          <h2>Company</h2>
          <h2>{value.company}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Email</h2>
          <h2>{value.email}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Phone</h2>
          <h2>{value.phone}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Role</h2>
          <h2>{value.role}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2>Pending Lawsuit</h2>
          <Checkbox className={"border-black"} />
        </div>
        <div className="flex justify-between">
          <h2>Collections Contact</h2>
          <Dropdown />
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2 className="mb-5">ATTORNEYS</h2>
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
      <h2>MEDICAL BILLS</h2>
      <div className="h-50 overflow-y-auto">
        <HmgDataTable columns={columns} data={data} />
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
        className="flex justify-between border-t-2 border-t-gray-300"
        key={idx}
      >
        <div>
          <div className="flex">
            <UserCircleIcon className=""></UserCircleIcon>
            <div>
              <h2>{note.name}</h2>
              <h2>{note.datetime}</h2>
            </div>
          </div>
          <h2>{note.note}</h2>
        </div>
        <div>
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
      </div>
    );
  });

  const notesSection = (
    <>
      <div className="flex w-full justify-end">
        <Button>Add Notes</Button>
      </div>
      <div className="grid gap-5 h-60 overflow-y-auto">{notesComp}</div>
    </>
  );

  const taskSection = (
    <>
      <div className="flex w-full justify-end">
        <Button>Add Task</Button>
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
      <h2>CASE OVERVIEW</h2>
      <div className="flex gap-2.5">
        <h2>Date of Accident:</h2>
        <h2>09/23/24</h2>
      </div>
      <div>
        <Button onClick={() => handleSectionClicked(true)}>Notes</Button>
        <Button onClick={() => handleSectionClicked(false)}>Tasks</Button>
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
      <div key={idx} className="border-t-2 border-t-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ReceiptTextIcon />
            <h2>{file.fileName}</h2>
          </div>
          <div className="flex">
            <Button>Delete</Button>
            <Button>Edit</Button>
          </div>
        </div>
        <div className="flex justify-between">
          <h2>Type:</h2>
          <h2>{file.type}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Uploaded by:</h2>
          <h2>{file.uploadedBy}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Date Uploaded:</h2>
          <h2>{file.dateUploaded}</h2>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 shadow-sm shadow-gray-400">
      <h2>FILES</h2>
      <div className="flex justify-end">
        <Button>Upload File</Button>
      </div>
      <div className="h-50 overflow-y-auto">{filesComp}</div>
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
      {/* <h2 className='mr-4'>Sub Facility</h2> */}
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

export default CaseDetails;
