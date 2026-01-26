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
    image: "",
  },
  {
    name: "SEBASTIÁN GAJARDO",
    role: "Product Manager",
  },
  {
    name: "JUAN CORDOVA",
    role: "Sales Manager",
  },
  {
    name: "FRANCISCO ORTEGA",
    role: "Account Executive",
  },
];

export const OurTeam = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-wide text-gray-900 text-center mb-12">
          NUESTRO EQUIPO
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 bg-blue-400">
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
              <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 italic">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
