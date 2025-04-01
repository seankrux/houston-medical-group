import { useState, React } from "react";
import companyLogo from "@/assets/logo.png";
import {
  ChevronDown,
  Menu,
  MailOpenIcon,
  ReceiptTextIcon,
  UserCircleIcon,
} from "lucide-react";

function HmgHeader() {
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

export default HmgHeader;
