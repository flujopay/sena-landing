import Button from "@/ui/shared/Button";

export type TPlan = {
  name: string;
  price: number;
  subtitle: string;
  includedClients: string;
  invoicesPerMonth: string;
  features: string[];
  variant: "starter" | "growth" | "enterprise";
  popular?: boolean;
  cta: string;
};

export const PlanCard = ({ plan }: { plan: TPlan }) => {
  const isStarter = plan.variant === "starter";
  const isGrowth = plan.variant === "growth";
  const isEnterprise = plan.variant === "enterprise";

  const wrapperClass = isStarter
    ? "relative rounded-3xl border border-orange-400 bg-gradient-to-b from-orange-400/95 to-orange-200/40 px-8 py-10"
    : isEnterprise
      ? "relative rounded-3xl border border-blue-500 bg-gradient-to-b from-blue-500/90 to-blue-200/40 px-8 py-10"
      : "relative rounded-3xl border border-blue-600 bg-white px-8 py-10";

  const nameClass = isGrowth
    ? "text-black font-extrabold text-3xl leading-none"
    : "text-white font-extrabold text-3xl leading-none";

  const subtitleClass = isGrowth
    ? "text-slate-500 text-xs"
    : "text-white/90 text-xs";

  const priceClass = isGrowth
    ? "text-black font-extrabold"
    : "text-black font-extrabold";

  const badgeClass = isStarter
    ? "mt-6 w-full rounded-xl bg-orange-500/90 px-4 py-3 text-white"
    : "mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-white";

  const listTextClass = isGrowth ? "text-slate-700" : "text-black";
  const checkColorClass = isStarter
    ? "text-orange-600"
    : isEnterprise
      ? "text-blue-600"
      : "text-orange-600";

  return (
    <div className={wrapperClass}>
      {plan.popular ? (
        <div className="absolute -left-4 top-10 rounded-r-2xl bg-blue-600 text-white text-xs font-extrabold px-2 py-3">
          <div className="flex flex-col items-center gap-1 tracking-widest">
            {"MASPOPULAR".split("").map((ch, idx) => (
              <span key={idx} className="leading-none">
                {ch}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="text-center">
        <p className={nameClass}>{plan.name.toUpperCase()}</p>
        <p className={subtitleClass}>{plan.subtitle}</p>
      </div>

      <div className="mt-6 text-center">
        <p className={priceClass}>
          <span className="text-xs font-bold">USD </span>
          <span className="text-4xl">{plan.price}</span>
          <span className="text-xs font-bold"> /mes</span>
        </p>
      </div>

      <div className={badgeClass}>
        <div className="flex items-center justify-between text-xs font-bold">
          <div>
            <p>Clientes incluidos</p>
            <p>Facturas / mes</p>
          </div>
          <div className="text-right">
            <p>{plan.includedClients}</p>
            <p>{plan.invoicesPerMonth}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ul className={"flex flex-col gap-2 text-xs " + listTextClass}>
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className={"mt-0.5 font-extrabold " + checkColorClass}>
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={isStarter ? "primaryFilled" : "secondaryFilled"}
        text={plan.cta}
      />
    </div>
  );
};
