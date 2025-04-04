import { useState, React } from "react";
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

function Contacts() {
  return (
    <>
      <div className="flex h-full w-full bg-background-color">
        <div className="px-5 py-5 w-full">
          <div className="">
            <div className="w-full bg-white py-2.5 px-2.5 rounded-sm">
              <Input></Input>
            </div>

            <div className="w-full bg-white py-2.5 px-2.5 rounded-sm mt-5">
              <h2>RESULTS</h2>
              <div className="bg-gray-300 p-2.5">
                <div>
                  <h2>Attorney X</h2>
                  <p>Personal Injury</p>
                </div>
                <div className="flex items-end justify-between mt-8">
                  <div>
                    <p>Pending Lawsuit</p>
                    <p>Collections Contact: </p>
                    <p>Law Office of Attorney X</p>
                    <p>111 Arciniega St, San Antonio, TX 78205, USA</p>
                  </div>
                  <Button>Edit Contact</Button>
                </div>
              </div>
              <Button>Add Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
