"use client";

import { useCountries } from "@/lib/services/countryService";
import Button from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import SimpleCountrySelect, { OptionSelect } from "@/ui/shared/SimpleCountrySelect";
import { useMemo, useState } from "react";

export const ContactForm = () => {
  const { data: countries = [] } = useCountries();

  console.log('countries',countries)

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    apellido: "",
    email: "",
    countryCode: "+51",
    celular: "",
    nombreEmpresa: "",
    comoLlegaste: "",
  });

  const countryOptions = useMemo(() => {
    if (!countries.length) return [];

    const priorityCountries = ['+51', '+56', '+57', '+593', '+52'];
    const priorityItems: OptionSelect[] = [];
    const otherItems: OptionSelect[] = [];

    countries.forEach((item) => {
      const option: OptionSelect = {
        id: item.country,
        label: item.country,
        icon: item.icon,
        subValue: item.country,
      };

      if (priorityCountries.includes(item.country)) {
        priorityItems.push(option);
      } else {
        otherItems.push(option);
      }
    });

    priorityItems.sort((a, b) => {
      return priorityCountries.indexOf(a.id) - priorityCountries.indexOf(b.id);
    });

    return [...priorityItems, ...otherItems];
  }, [countries]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  const opcionesLlegada = [
    { value: "google", label: "Google" },
    { value: "redes_sociales", label: "Redes sociales" },
    { value: "publicidad", label: "Publicidad" },
    { value: "referido", label: "Referido" },
    { value: "otro", label: "Otro" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex justify-between flex-col md:flex-row gap-2 px-4 items-start mt-6">
        <div className="flex flex-1">
            <div className="max-w-full text-left">
                <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
                    Estás a un paso de cobrar <span className="text-brand-primary font-caslon">mejor</span>
                    <span className="text-brand-secondary font-caslon">.</span> 
                </h2>
            </div>
        </div>
        <div className="flex flex-1 w-full">
            <form onSubmit={handleSubmit} className="w-full rounded-2xl bg-[#f4f4f4] px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Nombre completo"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Celular"
                    name="celular"
                    type="tel"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                    placeholder="Número"
                    leftElement={
                      <SimpleCountrySelect
                        value={formData.countryCode}
                        onChange={(code) => setFormData((prev) => ({ ...prev, countryCode: code }))}
                        options={countryOptions}
                      />
                    }
                  />
                </div>

                <div className="mb-4">
                  <Input
                    label="Nombre de la empresa"
                    name="nombreEmpresa"
                    value={formData.nombreEmpresa}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-black mb-2">
                    ¿Cómo llegaste a Sena?<span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {opcionesLlegada.map((opcion) => (
                      <label key={opcion.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="comoLlegaste"
                          value={opcion.value}
                          checked={formData.comoLlegaste === opcion.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-brand-primary accent-brand-primary"
                        />
                        <span className="text-sm text-black">{opcion.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <p className="text-xs mb-4">
                  Al hacer click en enviar, aceptas los{" "}
                  <span className="text-brand-primary font-semibold">Términos y Condiciones</span>
                  {" "}y la{" "}
                  <span className="text-brand-primary font-semibold">Política de Privacidad</span>
                </p>

                <Button
                    type="submit"
                    text="Enviar"
                    variant="primaryFilled"
                    size="md"
                    className="w-[200px]"
                />
            </form>
        </div>
      </div>
    </div>
  );
};