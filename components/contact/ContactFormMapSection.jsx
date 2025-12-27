"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function ContactFormMapSection({
  inquiryTypes = [],
  socialLinks = [],
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert(
      "Thank you for your message! We will get back to you within 24-48 hours."
    )

    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    })
  }
  

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ================= CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8 h-auto">
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <span className="text-sm text-[#f97316] font-semibold uppercase tracking-wider">
                  Send a Message
                </span>
                <h2 className="font-serif text-2xl font-bold text-text-dark">
                  Get in Touch
                </h2>
              </div>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden h-auto">
              <CardContent className="p-8 ">
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-text-dark">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-1.5 py-4"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <Label className="text-text-dark">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1.5 py-4"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label className="text-text-dark">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="mt-1.5 py-4"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label className="text-text-dark">
                        Inquiry Type <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger className="mt-1.5 w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-text-dark">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        handleChange("subject", e.target.value)
                      }
                      required
                      className="mt-1.5"
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div>
                    <Label className="text-text-dark">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleChange("message", e.target.value)
                      }
                      required
                      className="mt-1.5"
                      placeholder="Write your message here..."
                      rows={12}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#f97316] hover:bg-[#f97316]-dark text-white shadow-lg shadow-[#f97316]/30"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* ================= MAP & SOCIAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <span className="text-sm text-[#f97316] font-semibold uppercase tracking-wider">
                  Location
                </span>
                <h2 className="font-serif text-2xl font-bold text-text-dark">
                  Find Us Here
                </h2>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-75">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.3465400109276!2d78.35545107537112!3d30.68703287460637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908ebbd487e609d%3A0x807acc9d2c510d3d!2zU210LiBNYW5qaXJhIERldmkgVW5pdmVyc2l0eSwgVXR0YXJrYXNoaSAo4KS24KWN4KSw4KWA4KSu4KSk4KWAIOCkruCkguCknOClgOCksOCkviDgpKbgpYfgpLXgpYAg4KS14KS_4KS24KWN4KS14KS14KS_4KSm4KWN4KSv4KS-4KSy4KSvLCDgpIngpKTgpY3gpKTgpLDgpJXgpL7gpLbgpYAp!5e1!3m2!1sen!2sin!4v1766814619736!5m2!1sen!2sin" width="100%" height="450"  loading="lazy" ></iframe>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-text-dark mb-4">
                  Connect With Us
                </h3>
                <p className="text-text-muted text-sm mb-6">
                  Follow us on social media to stay updated with the latest news and events.
                </p>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-12 h-12 rounded-full bg-grey-light flex items-center justify-center text-text-muted hover:text-white transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
