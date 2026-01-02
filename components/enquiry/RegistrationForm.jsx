"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Upload,
  ArrowRight,
  User,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Percent,
  Home,
  MapPin,
  Building,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  CheckCircle2,
  SquareUser,
} from "lucide-react"

const programOptions = [
  { value: "btech-cse", label: "B.Tech - Computer Science & Engineering" },
  { value: "btech-ece", label: "B.Tech - Electronics & Communication" },
  { value: "btech-me", label: "B.Tech - Mechanical Engineering" },
  { value: "btech-ce", label: "B.Tech - Civil Engineering" },
  { value: "bba", label: "BBA - Bachelor of Business Administration" },
  { value: "bcom", label: "B.Com (Hons)" },
  { value: "ba-llb", label: "BA LLB (Integrated)" },
  { value: "mba", label: "MBA - Master of Business Administration" },
  { value: "mtech", label: "M.Tech - Computer Science" },
  { value: "phd", label: "Ph.D Program" },
]

const documentsList = [
  "Passport Size Photo",
  "10th Marksheet",
  "12th Marksheet",
  "Aadhar Card",
  "Category Certificate (if applicable)",
  "Signature",
]

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    program: "",
    qualifyingExam: "",
    percentage: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    message: "",
  })

  const [files, setFiles] = useState({
    photo: null,
    marksheet10: null,
    marksheet12: null,
    aadhar: null,
    categoryCert: null,
    signature: null,
  })

  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (docKey, file) => {
    if (file) setFiles((prev) => ({ ...prev, [docKey]: file }))
  }

  const getFileKey = (label) => {
    const map = {
      "Passport Size Photo": "photo",
      "10th Marksheet": "marksheet10",
      "12th Marksheet": "marksheet12",
      "Aadhar Card": "aadhar",
      "Category Certificate (if applicable)": "categoryCert",
      "Signature": "signature",
    }
    return map[label]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert("Please accept the declaration to proceed.")
      return
    }
    setIsSubmitting(true)
    await new Promise((res) => setTimeout(res, 2000))
    console.log("Form Data:", formData)
    console.log("Files:", files)
    setIsSubmitting(false)
    alert("Application submitted successfully!")
  }

  return (
    <section className="relative py-20 bg-relative-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
            Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Online Admission Registration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form carefully. Our team will contact you soon.
          </p>
          <div className="w-24 h-1 bg-relative-to-r from-orange-500 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border border-gray-200 shadow-2xl rounded-2xl bg-white overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* 1. PERSONAL INFO */}
                <SectionTitle number="1" title="Personal Information" />

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <InputField icon={<User className="w-4 h-4 text-orange-600" />} label="First Name" placeholder="Enter your first name" value={formData.firstName} onChange={(v) => handleInputChange("firstName", v)} />
                  <InputField icon={<User className="w-4 h-4 text-orange-600" />} label="Last Name" placeholder="Enter your last name" value={formData.lastName} onChange={(v) => handleInputChange("lastName", v)} />
                  <InputField icon={<Mail className="w-4 h-4 text-orange-600" />} label="Email Address" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(v) => handleInputChange("email", v)} />
                  <InputField icon={<Phone className="w-4 h-4 text-orange-600" />} label="Phone Number" placeholder="+91 98765 43210" value={formData.phone} onChange={(v) => handleInputChange("phone", v)} />
                  <InputField icon={<Calendar className="w-4 h-4 text-orange-600" />} label="Date of Birth" type="date" value={formData.dob} onChange={(v) => handleInputChange("dob", v)} />
                  <div>
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <SquareUser className="w-4 h-4 text-orange-600" />
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.gender} onValueChange={(v) => handleInputChange("gender", v)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 2. PROGRAM */}
                <SectionTitle number="2" title="Program Selection" />

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="md:col-span-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <GraduationCap className="w-4 h-4 text-orange-600" />
                      Preferred Program <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.program} onValueChange={(v) => handleInputChange("program", v)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Choose your program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programOptions.map((p) => (
                          <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <InputField icon={<FileText className="w-4 h-4 text-orange-600" />} label="Qualifying Exam" placeholder="e.g., 12th CBSE, JEE Main" value={formData.qualifyingExam} onChange={(v) => handleInputChange("qualifyingExam", v)} />
                  <InputField icon={<Percent className="w-4 h-4 text-orange-600" />} label="Percentage / CGPA" placeholder="e.g., 95.5% or 9.8 CGPA" value={formData.percentage} onChange={(v) => handleInputChange("percentage", v)} />
                </div>

                {/* 3. ADDRESS */}
                <SectionTitle number="3" title="Address Information" />

                <div className="mt-4">
                  <TextareaField icon={<Home className="w-4 h-4 text-orange-600" />} label="Full Address" placeholder="House no., street, locality" value={formData.address} onChange={(v) => handleInputChange("address", v)} />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-4">
                  <InputField icon={<MapPin className="w-4 h-4 text-orange-600" />} label="City" placeholder="e.g., Mumbai" value={formData.city} onChange={(v) => handleInputChange("city", v)} />
                  <InputField icon={<Building className="w-4 h-4 text-orange-600" />} label="State" placeholder="e.g., Maharashtra" value={formData.state} onChange={(v) => handleInputChange("state", v)} />
                  <InputField icon={<MapPin className="w-4 h-4 text-orange-600" />} label="PIN Code" placeholder="e.g., 400001" value={formData.pincode} onChange={(v) => handleInputChange("pincode", v)} />
                </div>

                {/* 4. PARENTS */}
                <SectionTitle number="4" title="Parent / Guardian Information" />

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <InputField icon={<User className="w-4 h-4 text-orange-600" />} label="Father's Name" placeholder="Enter father's full name" value={formData.fatherName} onChange={(v) => handleInputChange("fatherName", v)} />
                  <InputField icon={<Briefcase className="w-4 h-4 text-orange-600" />} label="Father's Occupation" placeholder="e.g., Business, Service" value={formData.fatherOccupation} onChange={(v) => handleInputChange("fatherOccupation", v)} />
                  <InputField icon={<User className="w-4 h-4 text-orange-600" />} label="Mother's Name" placeholder="Enter mother's full name" value={formData.motherName} onChange={(v) => handleInputChange("motherName", v)} />
                </div>

                {/* 5. DOCUMENTS */}
                <SectionTitle number="5" title="Document Upload" />

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {documentsList.map((doc) => {
                    const fileKey = getFileKey(doc)
                    const file = files[fileKey]
                    return (
                      <div key={doc}>
                        <Label className="text-sm font-medium text-gray-700">{doc}</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition relative bg-gray-50">
                          <Upload className="mx-auto mb-3 text-orange-600 w-10 h-10" />
                          <p className="text-sm text-gray-600 font-medium">
                            {file ? file.name : "Click to upload or drag & drop"}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 2MB</p>
                          {file && (
                            <p className="text-xs text-green-600 mt-2 flex items-center justify-center gap-1">
                              <CheckCircle2 className="w-4 h-4" /> Uploaded
                            </p>
                          )}
                          <input
                            type="file"
                            accept={doc.includes("Photo") || doc.includes("Signature") ? "image/*" : "image/*,application/pdf"}
                            onChange={(e) => e.target.files?.[0] && handleFileChange(fileKey, e.target.files[0])}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* 6. ADDITIONAL INFO */}
                <SectionTitle number="6" title="Additional Information" />

                <div className="mt-4">
                  <TextareaField
                    icon={<MessageSquare className="w-4 h-4 text-orange-600" />}
                    label="Message (Optional)"
                    placeholder="Any additional information or queries..."
                    value={formData.message}
                    onChange={(v) => handleInputChange("message", v)}
                  />
                </div>

                {/* DECLARATION & SUBMIT */}
                <div className="border-t border-gray-200 pt-8 mt-10 space-y-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={setAgreeTerms}
                      className="mt-1 text-[#F46B13]"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                      I hereby declare that all the information provided above is true to the best of my knowledge. I agree to the terms and conditions of Smt. Manjira Devi University.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !agreeTerms}
                    className="w-full rounded-full bg-[#F46B13] hover:bg-[#F46B13]  cursor-pointer text-white font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting Application..." : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

/* REUSABLE COMPONENTS */
function SectionTitle({ number, title }) {
  return (
    <h3 className="flex items-center gap-4 text-xl font-bold text-gray-900">
      <span className="w-10 h-10 rounded-full bg-[#F46B13] text-white flex items-center justify-center text-sm font-bold shadow-md">
        {number}
      </span>
      <span>{title}</span>
    </h3>
  )
}

function InputField({ icon, label, placeholder, value, onChange, type = "text" }) {
  return (
    <div>
      <Label className="flex items-center gap-2 text-sm font-medium">
        {icon}
        {label} {type !== "date" && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5"
      />
    </div>
  )
}

function TextareaField({ icon, label, placeholder, value, onChange }) {
  return (
    <div>
      <Label className="flex items-center gap-2 text-sm font-medium">
        {icon}
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5"
        rows={4}
      />
    </div>
  )
}