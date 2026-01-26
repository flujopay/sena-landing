type Props = {
  bgColor?: string;
  whiteText: string;
  orangeItalicText: string;
};

export const SectionHeroTitle = ({
  bgColor = "bg-blue-500",
  whiteText,
  orangeItalicText,
}: Props) => {
  return (
    <section className={`${bgColor} py-20 md:py-28 h-[500px] flex items-center justify-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center max-w-[650px] mx-auto">
          <span className="text-white">{whiteText}</span> {" "}
          <span className="text-orange-400 italic">{orangeItalicText}</span>
        </h1>
      </div>
    </section>
  );
};
