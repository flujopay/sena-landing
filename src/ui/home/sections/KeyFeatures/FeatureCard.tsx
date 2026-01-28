import { ReactNode } from "react";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="h-full rounded-2xl border border-white/30 bg-white/15 px-6 py-6 backdrop-blur-sm shadow-sm">
      {icon}
      <p className="mt-5 text-white font-extrabold uppercase leading-tight">
        {title}
      </p>
      <p className="mt-3 text-white/80 text-sm leading-5">{description}</p>
    </div>
  );
};
