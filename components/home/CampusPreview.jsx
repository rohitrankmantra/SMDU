import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"

const CampusPreview = () => {
    
  return (
     <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Campus"
            title="Experience World-Class Facilities"
            description="A sprawling campus with modern infrastructure designed for holistic learning."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: "/modern-university-building-architecture.jpg", span: "row-span-2" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=400&width=300", span: "row-span-2" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${item.span || ""} overflow-hidden rounded-2xl`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
              Explore Campus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
  )
}

export default CampusPreview