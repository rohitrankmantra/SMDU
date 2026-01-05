"use client";

import Link from "next/link";
import {
  Send,
  PhoneCall,
  Mail,
  MessageCircle,
} from "lucide-react";

const actions = [
  {
    label: "Apply Now",
    href: "/admissions/enquiry",
    color: "bg-[#f97316]",
    hover: "hover:bg-orange-600",
    icon: Send,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918006345557",
    color: "bg-green-500",
    hover: "hover:bg-green-600",
    icon: PhoneCall,
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
    href: "/admissions/enquiry",
    color: "bg-purple-600",
    hover: "hover:bg-purple-700",
    icon: MessageCircle,
  },
];

export function FloatingActionPanel() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
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
            className="group relative flex items-center"
          >
            {/* SLIDING STRIPE */}
            <span
              className={`absolute right-6 flex items-center gap-2
              ${item.color} text-white
              pl-8 pr-5 py-2 rounded-full text-sm font-medium
              min-w-42.5
              opacity-0 translate-x-6
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 shadow-lg whitespace-nowrap`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </span>

            {/* ICON */}
            <span
              className={`relative z-10 flex items-center justify-center
              w-12 h-12 rounded-full text-white shadow-lg
              ${item.color} ${item.hover}
              transition-all duration-300
              group-hover:-translate-x-1`}
            >
              <Icon className="w-5 h-5" />
            </span>
          </Wrapper>
        );
      })}
    </div>
  );
}
