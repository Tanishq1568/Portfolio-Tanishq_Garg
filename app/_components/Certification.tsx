import Image from "next/image";
import img3 from "../certificates/communication certificate_page-0001.jpg"
import img1 from "../certificates/Cloud Computing_page-0001.jpg"
import img2 from "../certificates/ProfessionalCertificationDigitalCredentials20260407-30-175pv0_page-0001.jpg"
import img4 from "../certificates/infosys javascript completion_page-0001.jpg"
import img5 from "../certificates/Document from _Tanishq__page-0001.jpg"
import img6 from "../certificates/Programming in Java_page-0001.jpg"
import { useRef } from 'react';
import SectionTitle from "@/components/SectionTitle";




const certifications = [
  {
    title: "RHCSA(EX-200)",
    image: img2,
  },
  {
    title: "NPTEL (Cloud Computing)",
    image: img1,
  },
  {
    title: "TCS Communication",
    image: img3,
  },
  {
    title: "Infosys Springboard",
    image: img4,
  },
  {
    title: "FreeCodeCamp",
    image: img5,
  },
  {
    title: "Nptel (Programming in Java)",
    image: img6,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="container py-24"
    >
        <SectionTitle  title ="CERTIFICATIONS"/>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="
              group
              overflow-hidden
              rounded-2xl
              border-2
              border-orange-400
              bg-background
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_25px_#fb923c]
            "
          >
            <div className="overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                width={500}
                height={300}
                className="
                  w-full
                  h-64
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl md:text-2xl font-anton text-orange-400">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Certificate Achievement
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}