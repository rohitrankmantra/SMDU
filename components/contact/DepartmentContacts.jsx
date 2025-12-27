"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading"
import {
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

// Department contacts
const departments = [
  {
    name: "Admissions Office",
    email: "admissions@smdu.edu.in",
    phone: "+91-XXXX-XXX001",
    icon: GraduationCap,
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
  },
  {
    name: "Academic Affairs",
    email: "academics@smdu.edu.in",
    phone: "+91-XXXX-XXX002",
    icon: BookOpen,
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    name: "Student Services",
    email: "studentservices@smdu.edu.in",
    phone: "+91-XXXX-XXX003",
    icon: Users,
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
  },
  {
    name: "Placement Cell",
    email: "placements@smdu.edu.in",
    phone: "+91-XXXX-XXX004",
    icon: Building2,
    hours: "Mon-Fri: 10:00 AM - 4:00 PM",
  },
]

export default function DepartmentContacts() {
  return (
    <section className="py-20 bg-grey-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-50" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          subtitle="Departments"
          title="Contact Our Departments"
          description="Reach out to specific departments for specialized assistance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-[#f46b13]/10 flex items-center justify-center mb-5 group-hover:bg-[#f46b13] group-hover:scale-110 transition-all duration-300">
                    <dept.icon className="w-7 h-7 text-[#f46b13] group-hover:text-white transition-colors" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-4">
                    {dept.name}
                  </h3>

                  {/* DETAILS */}
                  <div className="space-y-3 text-sm mt-auto">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Mail className="w-4 h-4 text-[#f46b13] shrink-0" />
                      <a
                        href={`mailto:${dept.email}`}
                        className="hover:text-[#f46b13] transition-colors"
                      >
                        {dept.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-text-muted">
                      <Phone className="w-4 h-4 text-[#f46b13] shrink-0" />
                      <a
                        href={`tel:${dept.phone}`}
                        className="hover:text-[#f46b13] transition-colors"
                      >
                        {dept.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-text-muted">
                      <Clock className="w-4 h-4 text-[#f46b13] shrink-0" />
                      <span>{dept.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
