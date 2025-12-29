"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Building2,
  GraduationCap,
  Users,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import QuickContactInfo from "@/components/contact/QuickContactInfo";
import ContactFormMapSection from "@/components/contact/ContactFormMapSection";
import DepartmentContacts from "../../components/contact/DepartmentContacts";

// Social links
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
];

// Inquiry types
const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "admissions", label: "Admissions" },
  { value: "academics", label: "Academics" },
  { value: "placements", label: "Placements & Career" },
  { value: "hostel", label: "Hostel & Accommodation" },
  { value: "fees", label: "Fees & Payments" },
  { value: "complaints", label: "Complaints & Grievances" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to help. Reach out to us for any queries or information."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <QuickContactInfo />
      <ContactFormMapSection
        inquiryTypes={inquiryTypes}
        socialLinks={socialLinks}
      />

      <DepartmentContacts />
    </main>
  );
}
