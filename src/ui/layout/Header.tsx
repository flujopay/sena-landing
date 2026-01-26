import { AssetImage } from "@/lib/utils/assets/image";
import Image from "next/image";
import Button from "../shared/Button";

type Props = {
  variant: "primary" | "secondary";
};

export const Header = ({ variant }: Props) => {
  const logo =
    variant === "primary" ? AssetImage.logoBlack : AssetImage.logoBlack;

  const color = variant === "primary" ? "white" : "black";

  const sectiosnNavbar = [
    {
      id: 1,
      name: "Productos",
    },
    {
      id: 2,
      name: "Precios",
    },
    {
      id: 3,
      name: "Nosotros",
    },
    {
      id: 4,
      name: "Contacto",
    },
  ];

  return (
    <div className="flex items-center gap-2 justify-between p-4 ">
      <div>
        <Image src={logo} alt="Logo" className="w-36" />
      </div>
      <div className="flex items-center justify-between gap-12">
        {sectiosnNavbar.map((section, index) => {
          return (
            <div key={index}>
              <p className="text-white font-semibold">{section.name}</p>
            </div>
          );
        })}
      </div>
      <Button size="sm" text="Comenzar ahora" variant="primaryFilled" />
    </div>
  );
};
