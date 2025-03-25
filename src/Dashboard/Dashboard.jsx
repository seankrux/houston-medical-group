import { useState, React } from 'react'
import companyLogo from './assets/logo.png'
import { ChevronDown, Menu, MailOpenIcon, ReceiptTextIcon, UserCircleIcon} from 'lucide-react'
import {Button} from "@/components/ui/button"
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
  SidebarTrigger
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Dashboard() {

  return (
    <>
      <Header></Header>
      <div className='flex h-full w-full bg-background-color'>
        <SidebarProvider>
          <AppSideBar selectedIdx={0}/>
          <div className='px-5 py-5 w-full'>
          <SidebarTrigger className='md:hidden'/>
            <Dropdown/>
            <div className='grid md:grid-cols-3 gap-5'>
              <PanelTasks/>
              <PanelBills/>
              <PanelHPVelocity/>
              <PanelAvgReduction/>
              <PanelReductions/>
              <PanelDropped/>
              <PanelCaseStatus/>
              <PanelBalance/>
              <PanelTopAttorneys/>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </>
  )
}

function Dropdown() {

  const [selected, setSelected] = useState();
  const items = ['Downtown', 'Northside', 'Pasadena', 'Katy', 'Southwest', 'Bellair Family Clinic'];

  const dropdownItems = items.map((item, idx) => {
    return (
      <DropdownMenuItem key={idx} onClick={() => onItemSelected(item)}>{item}</DropdownMenuItem>
    )
  });

  const onItemSelected = (item) => {
    return (
      setSelected(item)
    )
  };

  return(
    <div className='flex items-center'>
      <h2 className='mr-4'>Sub Facility</h2>
      <DropdownMenu className=''>
        <DropdownMenuTrigger asChild={true}>
          <Button variant="outline" className='w-36 truncate'>
            {selected ? selected : 'Sub Facility'}
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

function DownloadButton() {
  return(
    <Button className='text-primary-color bg-accent-gray hover:bg-gray-400 hover:cursor-pointer'>
      Download Report
    </Button>
  )
}

function PanelTasks(){

  const tasks = [
    {taskName: "Contact Attorney", priority: "High", dueDate: "Apr 25, 2025"},
    {taskName: "Update Patient X's Account", priority: "Medium", dueDate: "Apr 25, 2025"},
    {taskName: "Update Patient X's Account", priority: "Medium", dueDate: "Apr 25, 2025"}
  ]

  const tasksComp = tasks.map((task, idx) => {
    return(
      <div key={idx} className='w-full mb-4 bg-accent-gray shadow-md shadow-gray-300 rounded-sm p-2.5'>
        <h2>{task.taskName}</h2>
        <h2>{task.priority}</h2>
        <h2>{task.dueDate}</h2>
      </div>
    )
  });

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>TASKS</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 overflow-y-auto p-2.5 border-primary-color border-2 rounded-sm'>
          {tasksComp}
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )

}

function PanelBills(){
  return (
    <div>
      <div className='flex mb-4'>
        <ReceiptTextIcon></ReceiptTextIcon>
        <h2>BILLS</h2>
      </div>
      <div className='p-5 grid content-between w-full h-50 drop-shadow-lg bg-white rounded-md'>
        <div className='flex w-full h-30 justify-between rounded-sm'>
          <div>
            <p>Bills</p>
            <h2>63%</h2>
          </div>
          <div>
            <p>Total</p>
            <h2>$ 19,156.48</h2>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelHPVelocity(){
  return (
    <div>
      <div className='flex mb-4'>
        <ReceiptTextIcon></ReceiptTextIcon>
        <h2>HEALTH PROVIDERS VELOCITY</h2>
      </div>
      <div className='p-5 grid content-between w-full h-50 drop-shadow-lg bg-white rounded-md'>
        <div className='flex w-full h-30 justify-between rounded-sm'>
          <div className='flex justify-between w-full'>
            <p>Average Days For Payout</p>
            <h2>63%</h2>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelAvgReduction(){
  return (
    <div>
      <div className='flex mb-4'>
        <ReceiptTextIcon></ReceiptTextIcon>
        <h2>AVERAGE REDUCTION</h2>
      </div>
      <div className='p-5 grid content-between w-full h-50 drop-shadow-lg bg-white rounded-md'>
        <div className='flex w-full h-30 justify-between rounded-sm'>
          <div className='flex justify-between w-full'>
            <p>Average Reduction</p>
            <h2>63%</h2>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelReductions(){

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>REDUCTIONS</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 p-2.5'>
          <div className='flex justify-between w-full mb-5 h-25 border-b-2'>
            <div>
              <p>Reductions</p>
              <h2>5</h2>
            </div>
            <div>
              <p>Total</p>
              <h2>$ 4,123.32</h2>
            </div>
          </div>
          <div className=''>
            <div className='w-full h-8 bg-blue-400 mb-2'>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 justify-evenly'>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-red-400 rounded-full mr-2'></div>
                <h2>0 Pending</h2>
              </div>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-red-400 rounded-full mr-2'></div>
                <h2>0 Rejected</h2>
              </div>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-green-400 rounded-full mr-2'></div>
                <h2>39 Accepted</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelDropped(){

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>DROPPED</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 p-2.5'>
          <div className='flex justify-between w-full mb-5 h-25 border-b-2'>
            <div>
              <p>Reductions</p>
              <h2>5</h2>
            </div>
            <div>
              <p>Total</p>
              <h2>$ 4,123.32</h2>
            </div>
          </div>
          <div className=''>
            <div className='grid grid-cols-2 sm:grid-cols-3 justify-evenly'>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-red-400 rounded-full mr-2'></div>
                <h2>0 Pending</h2>
              </div>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-red-400 rounded-full mr-2'></div>
                <h2>0 Rejected</h2>
              </div>
              <div className='flex items-center'>
                <div className='h-4 w-4 bg-green-400 rounded-full mr-2'></div>
                <h2>39 Accepted</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelCaseStatus(){

  const status = [
    {qty: 0, name: 'Demand', color: 'red-400'},
    {qty: 0, name: 'Negotiation', color: 'red-400'},
    {qty: 0, name: 'No Recovery', color: 'red-400'},
    {qty: 0, name: 'Par Paid - HMG PMD', color: 'red-400'},
    {qty: 0, name: 'Dropped', color: 'red-400'},
    {qty: 0, name: 'Par Paid - BFC PND', color: 'red-400'},
    {qty: 0, name: 'Litigation', color: 'red-400'},
    {qty: 0, name: 'Paid', color: 'red-400'},
    {qty: 0, name: 'LOR', color: 'red-400'},
    {qty: 0, name: 'Pending', color: 'red-400'},
    {qty: 0, name: 'Mediation', color: 'red-400'},
    {qty: 0, name: 'Settled', color: 'green-400'},
    {qty: 0, name: 'Inactive', color: 'red-400'},
    {qty: 0, name: 'PIP', color: 'red-400'},
    {qty: 0, name: 'Bills Sent', color: 'red-400'},
  ];

  const statusComp = status.map((stat, idx) => {
    return (
      <div key={idx} className='flex items-center'>
        <div className={`h-4 w-4 bg-${stat.color} rounded-full mr-2`}></div>
        <h2>{stat.qty} {stat.name}</h2>
      </div>
    );
  });

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>CASE STATUS</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 p-2.5'>
          <div className=''>
            <div className='w-full h-8 bg-blue-400 mb-2'>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 justify-evenly'>
              {statusComp}
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelBalance(){

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>BALANCE</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 p-2.5'>
          <div className='flex justify-between pb-4 border-b-2'>
            <p>Original Amount</p>
            <h2>$ 83,625.03</h2>
          </div>
          <div className='flex justify-between py-4 border-b-2'>
            <p>Reduced Amount</p>
            <h2>$ 83,625.03</h2>
          </div>
          <div className='flex justify-between py-4 border-b-2'>
            <p>Paid Amount</p>
            <h2>$ 83,625.03</h2>
          </div>
          <div className='flex justify-between pt-4'>
            <p>Outstanding Amount</p>
            <h2>$ 83,625.03</h2>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

function PanelTopAttorneys(){

  return(
    <div>
      <div className='flex mb-4'>
        <MailOpenIcon></MailOpenIcon>
        <h2>BALANCE</h2>
      </div>
      <div className='p-5 grid content-between w-full h-80 drop-shadow-lg bg-white rounded-md'>
        <div className='w-full h-60 p-2.5'>
          <div className='flex justify-between border-b-2 pb-0.5'>
            <h2>Attorney</h2>
            <h2>Case Invites</h2>
          </div>
          <div className='flex justify-between py-4 border-b-2'>
            <div className='flex'>
              <UserCircleIcon className='mr-1'></UserCircleIcon>
              <h2>LegalStream Concierge CLAIRE</h2>
            </div>
            <h2>9</h2>
          </div>
          <div className='flex justify-between py-4 border-b-2'>
            <div className='flex'>
              <UserCircleIcon className='mr-1'></UserCircleIcon>
              <h2>LegalStream Concierge JULIE</h2>
            </div>
            <h2>5</h2>
          </div>
          <div className='flex justify-between pt-4'>
          <div className='flex'>
              <UserCircleIcon className='mr-1'></UserCircleIcon>
              <h2>LegalStream Concierge WILLIAM</h2>
            </div>
            <h2>5</h2>
          </div>
        </div>
        <div className='flex justify-end'>
          <DownloadButton className=''/>
        </div>
      </div>
    </div>
  )
}

// The components below are the repetitive components

function AppSideBar({selectedIdx}) {
  const items = [
    { title: "Dashboard", url: "#" },
    { title: "Case Status", url: "#" },
    { title: "Calendar", url: "#" },
    { title: "Tasks", url: "#" },
    { title: "Case Details", url: "#" },
    { title: "Dropped", url: "#" },
    { title: "Contacts", url: "#" },
    { title: "Report", url: "#" },
    { title: "Settings", url: "#" }
  ];
  

  return (
    <Sidebar className='3xs top-24 md:sticky h-full'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-lighter-primary hover:text-white ${idx === selectedIdx ? 'bg-primary-color text-white' : ''}`}>
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

function Header(){

  function Nav({name, url}) {
    return (
      <div>
        <a href={url} className='font-bold flex text-sm items-center'>
          {name}
          <ChevronDown className='size-6 stroke-primary-color'/>
        </a>
      </div>
    )
  }

  return (
    <div className='px-5 py-5 h-24 flex bg-white items-center place-content-between border-b-1'>
      <div className='flex gap-2.5'>
        <img src={companyLogo} alt="Logo not found" className='size-12'/>
        <div>
          <h1 className='text-lg font-bold'>Houston Medical Group</h1>
          <p className='text-sm'>Working United in the Community to Better Healthcare</p>
        </div>
      </div>
      <div className=''>
        <Menu className='size-8 lg:hidden'></Menu>
      </div>
      <div className='gap-5 items-center hidden lg:flex'>
        <Nav name={"Home"} url={"https://lucide.dev/icons/square"}></Nav>
        <Nav name={"About Us"} url={"facebook.com"}></Nav>
        <Nav name={"Services"} url={"facebook.com"}></Nav>
        <Nav name={"Patients/Visitors"} url={"facebook.com"}></Nav>
        <Nav name={"Dashboard"} url={"facebook.com"}></Nav>
        <Nav name={"Contact Us"} url={"facebook.com"}></Nav>
      </div>
    </div>
  )
}

export default Dashboard
