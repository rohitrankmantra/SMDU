import React from 'react'
import { PageHero } from '@/components/page-hero';
import EnquiryForm from '../../../components/enquiry/EnquiryForm';
import RegistrationForm from '../../../components/enquiry/RegistrationForm';

const page = () => {
  return (
    <>
<PageHero
  title="Student Registration"
  subtitle="Apply for Admission"
  description="Complete your registration to apply for admission at Smt. Manjira Devi University. Please fill in the required details carefully to begin the admission process."
  image="/home/homebg.jpeg"
/>
<RegistrationForm/>
    </>
  )
}

export default page