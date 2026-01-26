type Props = {
  title: string;
  description: string;
};

export const TitleDescripction = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-black text-xl font-extrabold">{title}</p>
      <p className="text-orange-300 mt-2 text-lg font-bold leading-5">
        {description}
      </p>
    </div>
  );
};
