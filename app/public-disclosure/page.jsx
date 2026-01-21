"use client"

import { ChevronDown, Download, Eye, FileText, User, Link as LinkIcon } from "lucide-react"
import React from "react"

export default function PublicDisclosure() {
  const disclosureData = [
    {
      section: "1. About the HEI (Higher Education Institution)",
      rows: [
        { sno: "1", title: "About Us Overview", subtitle: "Brief introduction about the University", action: "View", href: "/about/history" },
        { sno: "2", title: "Act and Statutes / MoA", subtitle: "Establishment Act and Statutes", action: "Download PDF", href: "/about/Gazette.pdf" },
        { sno: "3", title: "Institutional Development Plan", subtitle: "Development Plan", action: "View", href: "/idp" },
        { sno: "4", title: "Constituent Units/Affiliated Colleges, Off-Campus / Learning Support Centers", subtitle: "—", action: "NA", href: null },
        { sno: "5", title: "Accreditation / Ranking", subtitle: "NAAC, NBA, NIRF", action: "NA", href: null },
        { sno: "6", title: "Recognition / Approval (2(f), 12B, etc.)", subtitle: "—", action: "View", href: "/recognition" },
        { sno: "7", title: "Annual Reports", subtitle: "Annual Reports (2024–25)", action: "Download PDF", href: "/downloads/annual-report-2024-25.pdf" },
        { sno: "8", title: "Annual Accounts & Audit Report", subtitle: "—", action: "Download PDF", href: "/downloads/audit-report.pdf" },
      ],
    },
    // You can add href to other sections similarly
    // Example for section 2:
    {
      section: "2. Administration (Profiles & Contact Details)",
      rows: [
        { sno: "1", title: "Chancellor", subtitle: "Dr. S. Nautiyal • president@smdu.edu.in • +91-94117-14602", action: "Profile", href: "/profiles/chancellor" },
        { sno: "2", title: "Vice Chancellor", subtitle: "Prof. (Dr.) Bhagwan Nautiyal • vc@smdu.edu.in • +91-94111-40245", action: "Profile", href: "/profiles/vice-chancellor" },
        { sno: "3", title: "Pro Vice-Chancellor", subtitle: "—", action: "NA", href: null },
        { sno: "4", title: "Registrar", subtitle: "Mr. Amit Kumar • registrar@smdu.edu.in • +91-581712-83797", action: "Profile", href: "/profiles/registrar" },
        // ... add href for others
      ],
    },
    // Add remaining sections 3–10 the same way (with or without href for now)
    // For brevity I'm showing only section 1 & 2 here — copy pattern for others
  ]

  const getActionStyle = (action) => {
    if (action === "NA") return { bg: "bg-gray-200", text: "text-gray-600", icon: null, hover: "" }
    if (action.includes("Download")) return { bg: "bg-green-100", text: "text-green-700", icon: Download, hover: "hover:bg-green-200" }
    if (action === "Profile") return { bg: "bg-purple-100", text: "text-purple-700", icon: User, hover: "hover:bg-purple-200" }
    if (action === "Link" || action === "Explore") return { bg: "bg-indigo-100", text: "text-indigo-700", icon: LinkIcon, hover: "hover:bg-indigo-200" }
    // default View / Visit
    return { bg: "bg-blue-100", text: "text-blue-700", icon: Eye, hover: "hover:bg-blue-200" }
  }

  return (
    <section className="relative py-8 md:py-16 min-h-screen bg-gray-50">
      {/* background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold uppercase mb-4">
            UGC Compliance
            <ChevronDown className="w-4 h-4" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Mandatory Disclosure
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As per UGC Guidelines — Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {disclosureData.map((section, secIdx) => (
            <div key={secIdx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              {/* Section header */}
              <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white font-bold text-lg md:text-xl">
                {section.section}
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-100">
                {section.rows.map((row, rowIdx) => {
                  const style = getActionStyle(row.action)
                  const Icon = style.icon

                  return (
                    <div
                      key={rowIdx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-gray-50 transition-colors"
                    >
                      {/* Left - info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-500 w-8">{row.sno}.</span>
                          <div>
                            <h3 className="font-medium text-gray-900">{row.title}</h3>
                            <p className="text-sm text-gray-600 mt-0.5 whitespace-pre-line">{row.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right - action button */}
                      {row.action === "NA" ? (
                        <span className="inline-flex items-center px-5 py-2 bg-gray-200 text-gray-600 text-sm font-medium rounded-lg">
                          NA
                        </span>
                      ) : (
                        <a
                          href={row.href || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition
                            ${style.bg} ${style.text} ${style.hover}
                          `}
                        >
                          {Icon && <Icon size={16} />}
                          {row.action}
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          Last updated: January 2026 • Contact: registrar@smdu.edu.in | +91-80063-45557
        </p>
      </div>
    </section>
  )
}