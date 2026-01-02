import React from 'react'
import { PageHero } from '@/components/page-hero';
import EnquiryForm from '../../../components/enquiry/EnquiryForm';

const page = () => {
  return (
    <>
<PageHero
  title="Enquiry"
  subtitle="Got questions? We’ve got answers."
  description="Whether you're curious about courses, eligibility, or the admissions process, send us your enquiry and our team will get back to you with all the information you need."
  image="/home/homebg.jpeg"
/>
<EnquiryForm/>
    </>
  )
}

export default page