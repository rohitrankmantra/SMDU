import programmesData from "@/app/data/programmesData";
import { PageHero } from "./../../../components/page-hero";
import { notFound } from "next/navigation"; 
import CourseOverview from "./CourseOverview";


export function generateStaticParams() {
  return programmesData.map((programme) => ({
    slug: programme.slug,
  }));
}

/**
 * @param {{ params: Promise<{ slug: string }> }} props
 */
export default async function ProgrammePage({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound(); // Triggers 404 page
  }

  const programme = programmesData.find(
    (item) => item.slug === slug
  );

  if (!programme) {
    notFound();
  }

  return (
    <div className="min-h-screen">
           <PageHero
        title={programme.title}
        subtitle={programme.subtitle || "Undergraduate Programme"}
        description={
          programme.shortDescription ||
          "Build strong academic foundations with future-ready career pathways."
        }
        image="/home/coursebg.jpeg"
      />
       <CourseOverview programme={programme} />
     
    </div>
  );
}