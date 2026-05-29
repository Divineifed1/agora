"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BaseNav, type NavItem } from "./base-nav";

const USER_NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    icon: "/icons/home.svg",
    text: "Home",
    isActive: (p) => p === "/",
  },
  {
    href: "/discover",
    icon: "/icons/earth-yellow.svg",
    text: "Discover Events",
    isActive: (p) => p === "/discover" || p.startsWith("/events"),
  },
  {
    href: "/organizers",
    icon: "/icons/user-group.svg",
    text: "Organizers",
    isActive: (p) => p === "/organizers",
  },
  {
    href: "/stellar",
    icon: "/icons/stellar-xlm-logo 1.svg",
    text: "Stellar Ecosystem",
    isActive: (p) => p === "/stellar",
  },
];

        <div className="hidden lg:flex items-center gap-[53px]">
          <div className="flex items-center gap-6">
            <NavLink
              href="/"
              icon="/icons/home.svg"
              text="Home"
              isActive={pathname === "/"}
              ariaLabel="Home"
            />
            <NavLink
              href="/discover"
              icon="/icons/earth-yellow.svg"
              text="Discover Events"
              isActive={
                pathname === "/discover" || pathname.startsWith("/events")
              }
              ariaLabel="Discover Events"
            />
            <NavLink
              href="/organizers"
              icon="/icons/user-group.svg"
              text="Organizers"
              isActive={pathname === "/organizers"}
              ariaLabel="Organizers"
            />
            <NavLink
              href="/stellar"
              icon="/icons/stellar-xlm-logo 1.svg"
              text="Stellar Ecosystem"
              isActive={pathname === "/stellar"}
              ariaLabel="Stellar Ecosystem"
            />
          </div>
const userCta = (
  <Link href="/create-event">
    <Button
      backgroundColor="bg-white"
      textColor="text-black"
      shadowColor="rgba(0,0,0,1)"
    >
      <span>Create Your Event</span>
      <Image
        src="/icons/arrow-up-right-01.svg"
        alt="Arrow"
        width={24}
        height={24}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    </Button>
  </Link>
);

const userEndSlot = (
  <>
    <Link href="#">
      <Button
        backgroundColor="bg-white"
        className="relative w-[55.22px] h-[53px] px-[10px] py-[10px]"
        textColor="text-black"
        shadowColor="rgba(0,0,0,1)"
      >
        <div className="size-[9px] bg-red-500 rounded-full absolute top-[4px] right-[2px]" />
        <Image
          src="/icons/notification.svg"
          alt="Notifications"
          width={24}
          height={24}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Button>
    </Link>
    <Link href="/profile">
      <Button
        backgroundColor="bg-white"
        className="relative w-[55.22px] h-[53px] px-0! py-0"
        textColor="text-black"
        shadowColor="rgba(0,0,0,1)"
      >
        <div className="size-[49px] rounded-full">
          <Image
            src="/images/pfp.png"
            alt="Profile"
            width={49}
            height={49}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </Button>
    </Link>
  </>
);

export function UserNav({ pathname }: { pathname: string }) {
  return (
    <BaseNav
      pathname={pathname}
      isAuthenticated={true}
      navItems={USER_NAV_ITEMS}
      ctaSlot={userCta}
      endSlot={userEndSlot}
    />
  );
}