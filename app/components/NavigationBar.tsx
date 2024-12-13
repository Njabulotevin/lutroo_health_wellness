import { Link } from "@remix-run/react";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

function NavigationBar() {
  return (
    <div>
      <div className="hidden lg:flex flex-row justify-between p-10 px-40 ">
        <div className="">
          <img src={"/logo_accent.svg"} />
        </div>
        <div className="flex flex-row gap-10 items-center justify-center">
          <Link
            to="about"
            className=" hover:text-secondary-900 text-primary-900"
          >
            Services
          </Link>
          <Link
            to="about"
            className=" hover:text-secondary-900 text-primary-900"
          >
            About
          </Link>
          <Link
            to="about"
            className=" hover:text-secondary-900 text-primary-900"
          >
            Solutions
          </Link>
          <Link
            to="about"
            className=" hover:text-secondary-900 text-primary-900"
          >
            Location
          </Link>
        </div>
        <div className="">
          <Button className="bg-primary-900 text-white">Contact</Button>
        </div>
      </div>
      <div className="lg:hidden flex flex-row justify-between p-10">
        <div className="">
          <img src={"/logo_accent.svg"} />
        </div>
        <div className="">
            <MenuIcon/>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
