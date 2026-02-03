import { AssetUsImage } from "@/lib/utils/assets/imageUs";
import { TitleDescripction } from "@/ui/shared/TitleDescripction";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "JAZMÍN JORQUERA",
    role: "CEO Sena",
    image: AssetUsImage.jazmin.src,
  },
  {
    name: "SEBASTIÁN GAJARDO",
    role: "Product Manager",
    image: AssetUsImage.seba.src,
  },
  {
    name: "FRANCISCO ORTEGA",
    role: "Sales Manager",
    image: AssetUsImage.francisco.src,
  },
  {
    name: "RENILDO CHAVEZ",
    role: "Full Stack Developer",
  },
  {
    name: "DIEGO MATEO",
    role: "Full Stack Developer",
  },
  {
    name: "ERICK VILLALOBOS",
    role: "Full Stack Developer",
    image: AssetUsImage.erick.src,
  },
];

export const OurTeam = () => {
  return (
    <section className="bg-white pb-12 max-w-[1280px] mx-auto">
      <div className="px-4 md:px-8">
        <TitleDescripction title="Nuestro" subtitle="equipo" description="" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-md md:max-w-none mx-auto mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 md:mb-4 bg-blue-400 ring-4 ring-blue-400">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-400" />
                )}
              </div>
              <h3 className="text-[10px] md:text-sm font-bold text-gray-900 uppercase">
                {member.name}
              </h3>
              <p className="text-[10px] md:text-sm text-gray-600 italic">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
