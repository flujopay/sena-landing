import { ReactNode } from "react";

export type FeatureCardProps = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
};

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="h-full rounded-2xl bg-slate-50  px-6 py-6">
      {icon}
      <p className="mt-5 text-black font-extrabold uppercase leading-tight text-xl">
        {title}
      </p>
      <div className="mt-3 text-[#939393] text-sm leading-5">{description}</div>
    </div>
  );
};
