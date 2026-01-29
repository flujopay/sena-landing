type Props = {
  title: string;
  description: string;
};

export const TitleDescripction = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-adobe text-black text-xl sm:text-4xl font-black">{title}</p>
      <p className="font-adobe text-[#f6793a] mt-2 text-lg font-bold leading-5">
        {description}
      </p>
    </div>
  );
};
