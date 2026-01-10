"use client";

import Link from "next/link";
import { Send, PhoneCall, Mail, MessageCircle } from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";

const actions = [
  {
    label: "Apply Now",
    href: "/admissions/enquiry",
    color: "bg-orange-500",
    hover: "hover:bg-orange-600",
    icon: Send,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918006345557",
    color: "bg-green-500",
    hover: "hover:bg-green-600",
    icon: BiLogoWhatsapp,
    external: true,
  },
  {
    label: "Call Us",
    href: "tel:+918006345557",
    color: "bg-blue-600",
    hover: "hover:bg-blue-700",
    icon: PhoneCall,
  },
  {
    label: "Email Us",
    href: "mailto:info@smduniversity.ac.in",
    color: "bg-red-500",
    hover: "hover:bg-red-600",
    icon: Mail,
  },
  {
    label: "Chat Enquiry",
    href: "/contact",
    color: "bg-purple-600",
    hover: "hover:bg-purple-700",
    icon: MessageCircle,
  },
];

export function FloatingActionPanel() {
  return (
    <div className="fixed right-0 top-[60%] -translate-y-1/2 z-50 flex flex-col gap-3 pr-2">
      {actions.map((item, i) => {
        const Icon = item.icon;
        const Wrapper = item.external ? "a" : Link;

        return (
          <Wrapper
  key={i}
  href={item.href}
  target={item.external ? "_blank" : undefined}
  rel={item.external ? "noopener noreferrer" : undefined}
  aria-label={item.label}
  className="group relative flex items-center justify-end"
>
  {/* STRIP */}
  <span
    className={`
      absolute right-0 flex items-center gap-2
      h-12 overflow-hidden
      ${item.color} text-white
      rounded-full shadow-lg
      w-12 group-hover:w-44
      transition-all duration-400 ease-out
    `}
  >
    <span
      className="
        flex items-center gap-2
        pl-4 pr-5 text-sm font-medium whitespace-nowrap
        translate-x-10 group-hover:translate-x-0
        transition-all duration-300 delay-100
      "
    >
      <Icon className="w-4 h-4" />
      {item.label}
    </span>
  </span>

  {/* ICON */}
  <span
    className={`
      relative z-10
      flex items-center justify-center
      w-12 h-12 rounded-full text-white
      ${item.color} ${item.hover}
      shadow-lg transition-all duration-300
    `}
  >
    <Icon className="w-5 h-5" />
  </span>
</Wrapper>

        );
      })}
    </div>
  );
}
