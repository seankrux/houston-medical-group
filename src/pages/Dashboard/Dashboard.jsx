import { useState, React } from "react";
import companyLogo from "@/assets/logo.png";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
  Hourglass,
  TrendingUpDown,
  ArrowDown,
  X,
  Clock,
  BookOpenText,
  Star,
  FileDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  SidebarInset
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HmgSidebar from "@/customComponents/HmgSidebar";
import HmgHeader from "@/customComponents/HmgHeader";
import HmgHorizontalChart from "@/customComponents/HmgHorizontalChart";

function App() {
  return (
    <>
      <HmgHeader></HmgHeader>
      <div className="flex h-full w-full bg-background-color">
        <SidebarProvider>
          <HmgSidebar selectedIdx={0} />
          <SidebarInset className="overflow-hidden bg-background-color">
            <div className="px-5 py-5 w-full">
              <SidebarTrigger className="md:hidden" />
              <Dropdown />
              <div className="grid lg:grid-cols-3 gap-10 md:gap-5">
                <PanelTasks />
                <PanelBills />
                <PanelHPVelocity />
                <PanelAvgReduction />
                <PanelReductions />
                <PanelDropped />
                <PanelCaseStatus />
                <PanelBalance />
                <PanelTopAttorneys />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
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
      <DropdownMenuItem key={idx} onClick={() => onItemSelected(item)}>
        {item}
      </DropdownMenuItem>
    );
  });

  const onItemSelected = (item) => {
    return setSelected(item);
  };

  return (
    <div className="flex items-center mb-4">
      <h2 className="mr-4 text-lg font-semibold text-dark-gray">Sub Facility</h2>
      <DropdownMenu className="">
        <DropdownMenuTrigger asChild={true}>
          <div className='flex items-center border-2 border-primary-color rounded-sm py-1 px-2.5'>
          {/* <Button variant="outline" className="w-44 truncate border-2 outline-none text-lg font-normal bg-accent-gray rounded-sm focus-visible:ring-0 focus-visible:border-primary-color">
            {selected ? selected : "All"}
          </Button> */}
          <h2 className='w-40 text-lg'>{selected ? selected : "All"}</h2>
          <ChevronDown className='text-primary-color'></ChevronDown>
          </div>
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

function DownloadButton() {
  return (
    <Button className="text-primary-color bg-white hover:bg-gray-300 hover:cursor-pointer font-roboto text-base shadow-none">
      Download Report
      <FileDown className="size-6"></FileDown>
    </Button>
  );
}

function PanelTasks() {
  const tasks = [
    { taskName: "Contact Attorney", priority: "High", dueDate: "Apr 25, 2025" },
    {
      taskName: "Update Patient X's Account",
      priority: "Medium",
      dueDate: "Apr 25, 2025",
    },
    {
      taskName: "Update Patient X's Account",
      priority: "Medium",
      dueDate: "Apr 25, 2025",
    },
  ];

  const tasksComp = tasks.map((task, idx) => {
    return (
      <div
        key={idx}
        className="w-full mb-4 bg-accent-gray shadow-lg shadow-gray-300 rounded-sm p-2.5"
      >
        <h2 className='font-roboto font-semibold text-lg text-primary-color mb-2'>{task.taskName}</h2>
        <div className='flex gap-2'>
          <h2 className='font-roboto font-semibold text-gray-400'>Priority:</h2>
          <h2 className='font-roboto font-semibold'>{task.priority}</h2>
        </div>
        <div className='flex gap-2'>
          <h2 className='font-roboto font-semibold text-gray-400'>Due Date:</h2>
          <h2 className='font-roboto font-semibold'>{task.dueDate}</h2>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <MailOpenIcon className='text-primary-color'></MailOpenIcon>
        </div>
        <h2 className='font-semibold font-roboto'>TASKS</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-60 overflow-y-auto p-2.5 border-gray-300 border-2 rounded-xs">
          {tasksComp}
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelBills() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <ReceiptTextIcon className='text-primary-color'></ReceiptTextIcon>
        </div>
        <h2 className='font-semibold font-roboto'>BILLS</h2>
      </div>
      <div className="p-5 grid content-between w-full h-50 drop-shadow-md bg-white rounded-md">
        <div className="flex w-full h-30 justify-between rounded-sm">
          <div>
            <p className='text-gray-400 font-roboto'>Bills</p>
            <h2 className='text-2xl xl:text-3xl font-semibold text-primary-color font-roboto'>63%</h2>
          </div>
          <div>
            <p className='text-gray-400 font-roboto'>Total</p>
            <h2 className='text-2xl xl:text-3xl font-semibold text-dark-gray font-roboto'>$19,156.48</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelHPVelocity() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <Hourglass className='text-primary-color'></Hourglass>
        </div>
        <h2 className='font-semibold font-roboto'>HEALTH PROVIDERS VELOCITY</h2>
      </div>
      <div className="p-5 grid content-between w-full h-50 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-30 justify-between rounded-sm">
          <div className="">
            <p className='font-roboto text-gray-400'>Average Days For Payout</p>
          </div>
          <div className='flex justify-end'>
            <h2 className='text-2xl xl:text-3xl font-semibold text-primary-color'>63%</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelAvgReduction() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <TrendingUpDown className='text-primary-color'></TrendingUpDown>
        </div>
        <h2 className='font-semibold font-roboto'>AVERAGE REDUCTION</h2>
      </div>
      <div className="p-5 grid content-between w-full h-50 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-30 justify-between rounded-sm">
          <div className="">
            <p className='font-roboto text-gray-400'>Average Reduction</p>
          </div>
          <div className='flex justify-end'>
            <h2 className='text-2xl xl:text-3xl font-semibold text-primary-color'>63%</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelReductions() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <ArrowDown className='text-primary-color'></ArrowDown>
        </div>
        <h2 className='font-semibold font-roboto'>REDUCTIONS</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-60 p-2.5">
          <div className="flex justify-between w-full mb-5 h-25 border-b-2">
            <div>
              <p className='font-roboto text-gray-400'>Reductions</p>
              <h2 className='text-2xl xl:text-3xl font-semibold text-primary-color'>5</h2>
            </div>
            <div>
              <p className='font-roboto text-gray-400'>Total</p>
              <h2 className='text-2xl xl:text-3xl font-semibold text-dark-gray'>$4,123.32</h2>
            </div>
          </div>
          <div className="">
            <div className="w-full h-8 mb-2">
              <HmgHorizontalChart/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 text-sm md:text-base lg:grid-cols-1 xl:grid-cols-2 xl:gap-2 justify-evenly">
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-red-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-gray-400'>0 Pending</h2>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-red-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-gray-400'>0 Rejected</h2>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-green-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-gray-400'>39 Accepted</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelDropped() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <X className='text-primary-color'></X>
        </div>
        <h2 className='font-semibold'>DROPPED</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-60 p-2.5">
          <div className="flex justify-between w-full mb-5 h-25 border-b-2">
            <div className="flex justify-between w-full mb-5 h-25 border-b-2">
              <div>
                <p className='font-roboto text-gray-400'>Reductions</p>
                <h2 className='text-2xl xl:text-3xl font-semibold text-primary-color'>5</h2>
              </div>
            <div>
              <p className='font-roboto text-gray-400'>Total</p>
              <h2 className='text-2xl xl:text-3xl font-semibold text-dark-gray'>$4,123.32</h2>
            </div>
          </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 text-sm md:text-base lg:grid-cols-1 xl:grid-cols-2 xl:gap-2 justify-evenly">
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-red-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-dark-gray'>0 Pending</h2>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-red-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-dark-gray'>0 Rejected</h2>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 aspect-square bg-green-400 rounded-full mr-2"></div>
                <h2 className='font-roboto text-dark-gray'>39 Accepted</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelCaseStatus() {
  const status = [
    { qty: 0, name: "Demand", color: "red-400" },
    { qty: 0, name: "Negotiation", color: "red-400" },
    { qty: 0, name: "No Recovery", color: "red-400" },
    { qty: 0, name: "Par Paid - HMG PMD", color: "red-400" },
    { qty: 0, name: "Dropped", color: "red-400" },
    { qty: 0, name: "Par Paid - BFC PND", color: "red-400" },
    { qty: 0, name: "Litigation", color: "red-400" },
    { qty: 0, name: "Paid", color: "red-400" },
    { qty: 0, name: "LOR", color: "red-400" },
    { qty: 0, name: "Pending", color: "red-400" },
    { qty: 0, name: "Mediation", color: "red-400" },
    { qty: 0, name: "Settled", color: "green-400" },
    { qty: 0, name: "Inactive", color: "red-400" },
    { qty: 0, name: "PIP", color: "red-400" },
    { qty: 0, name: "Bills Sent", color: "red-400" },
  ];

  const statusComp = status.map((stat, idx) => {
    return (
      <div key={idx} className="flex items-center">
        <div className={`h-4 w-4 aspect-square bg-${stat.color} rounded-full mr-2`}></div>
        <h2 className='font-roboto text-gray-400'>
          {stat.qty} {stat.name}
        </h2>
      </div>
    );
  });

  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <Clock className='text-primary-color'></Clock>
        </div>
        <h2 className='font-semibold'>CASE STATUS</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 lg:h-100 drop-shadow-md bg-white rounded-md">
        <div className="w-full h-60 lg:h-70 p-2.5">
          <div className="w-full h-8 mb-2">
            <HmgHorizontalChart/>
          </div>
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 text-sm lg:grid-cols-1 xl:grid-cols-2 xl:gap-2 justify-evenly">
              {statusComp}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelBalance() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <BookOpenText className='text-primary-color'></BookOpenText>
        </div>
        <h2 className='font-semibold'>BALANCE</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 lg:h-100 drop-shadow-lg bg-white rounded-md">
        <div className="flex flex-col justify-evenly w-full h-60 lg:h-75 p-2.5 overflow-y-auto">
          <div className="flex justify-between pb-4 border-b-2">
            <p className='font-roboto text-gray-400'>Original Amount</p>
            <h2 className='text-lg font-roboto font-semibold'>$ 83,625.03</h2>
          </div>
          <div className="flex justify-between py-4 border-b-2">
            <p className='font-roboto text-gray-400'>Reduced Amount</p>
            <h2 className='text-lg font-roboto font-semibold'>$ 83,625.03</h2>
          </div>
          <div className="flex justify-between py-4 border-b-2">
            <p className='font-roboto text-gray-400'>Paid Amount</p>
            <h2 className='text-lg font-roboto font-semibold'>$ 83,625.03</h2>
          </div>
          <div className="flex justify-between pt-4">
            <p className='font-roboto text-gray-400'>Outstanding Amount</p>
            <h2 className='text-xl text-prim text-primary-color font-roboto font-semibold'>$ 83,625.03</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

function PanelTopAttorneys() {
  return (
    <div>
      <div className="flex mb-2 lg:mb-4 items-center gap-2">
        <div className='bg-lightest-primary p-1.5 rounded-full items-center flex just'>
          <Star className='text-primary-color'></Star>
        </div>
        <h2 className='font-semibold'>TOP REFERRING ATTORNEYS</h2>
      </div>
      <div className="p-5 grid content-between w-full h-80 lg:h-100 drop-shadow-lg bg-white rounded-md">
        <div className="flex flex-col justify-evenly w-full h-60 lg:h-75 p-2.5 overflow-y-auto">
          <div className="flex justify-between border-b-2 pb-0.5">
            <h2 className='font-roboto text-gray-400'>Attorney</h2>
            <h2 className='font-roboto text-gray-400'>Case Invites</h2>
          </div>
          <div className="flex justify-between py-4 border-b-2">
            <div className="flex">
              <UserCircleIcon className="mr-1"></UserCircleIcon>
              <h2 className='font-roboto font-medium'>LegalStream Concierge CLAIRE</h2>
            </div>
            <h2 className='font-medium font-roboto text-primary-color text-xl'>9</h2>
          </div>
          <div className="flex justify-between py-4 border-b-2">
            <div className="flex">
              <UserCircleIcon className="mr-1"></UserCircleIcon>
              <h2 className='font-roboto font-medium'>LegalStream Concierge JULIE</h2>
            </div>
            <h2 className='font-medium font-roboto text-primary-color text-xl'>5</h2>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex">
              <UserCircleIcon className="mr-1"></UserCircleIcon>
              <h2 className='font-roboto font-medium'>LegalStream Concierge WILLIAM</h2>
            </div>
            <h2 className='font-medium font-roboto text-primary-color text-xl'>5</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <DownloadButton className="" />
        </div>
      </div>
    </div>
  );
}

export default App;
