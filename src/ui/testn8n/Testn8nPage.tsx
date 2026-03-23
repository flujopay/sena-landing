"use client";
import {
  usePostContactForm,
  usePostTestn8n,
} from "@/lib/services/contactService";
import { useCountries } from "@/lib/services/countryService";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { useToastStore } from "@/lib/store/useToastStore";
import { ContactFormRequest } from "@/lib/types/contact";
import Button from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import SimpleCountrySelect, {
  OptionSelect,
} from "@/ui/shared/SimpleCountrySelect";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  nombre: string;
  apellido: string;
  empresa: string;
  email: string;
  whatsapp: string;
  facturas_pendientes: string;
  alguien_cobrando: string;
};

export const Testn8nPage = () => {
  const { postTestn8nMutate, isLoadingPostTestn8n } = usePostTestn8n();
  const { postContactFormMutate } = usePostContactForm();
  const { data: countries = [] } = useCountries();
  const { ipCurrency } = useCurrencyStore();
  const { showToast } = useToastStore();
  const searchParams = useSearchParams();
  const [countrySelect, setCountrySelect] = useState<string | null>(null);

  const utmSource = searchParams?.get("utm_source") || null;
  const utmMedium = searchParams?.get("utm_medium") || null;
  const utmCampaign = searchParams?.get("utm_campaign") || null;
  const utmContent = searchParams?.get("utm_content") || null;

  const countryOptions = useMemo(() => {
    if (!countries.length) return [];
    const priorityCountries = ["+51", "+56", "+57", "+593", "+52"];
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
    priorityItems.sort(
      (a, b) =>
        priorityCountries.indexOf(a.id) - priorityCountries.indexOf(b.id),
    );
    return [...priorityItems, ...otherItems];
  }, [countries]);

  useEffect(() => {
    const currencyMap: Record<string, string> = {
      PEN: "+51",
      CLP: "+56",
      COP: "+57",
      MXN: "+52",
      USD: "+593",
    };
    if (ipCurrency && currencyMap[ipCurrency]) {
      setCountrySelect(currencyMap[ipCurrency]);
    }
  }, [ipCurrency]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      nombre: "",
      apellido: "",
      empresa: "",
      email: "",
      whatsapp: "",
      facturas_pendientes: "",
      alguien_cobrando: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const pais =
      countries?.find((c) => c.country === countrySelect)?.country_code || "";
    const telefonoConPrefijo = (countrySelect || "") + data.whatsapp;

    // Payload para n8n webhook
    const payload = {
      ...data,
      codigo_pais: countrySelect || "",
      pais,
    };

    // Payload para API de contacto
    const contactPayload: ContactFormRequest = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.email,
      telefono: telefonoConPrefijo,
      formOrigin: "Formulario de Registro",
      countryName: pais,
      productType: "main",
      nombreEmpresa: data.empresa,
      mensaje: "",
      howFound: "",
      utmSource: utmSource || undefined,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
      utmContent: utmContent || undefined,
    };

    // Llamar ambas APIs
    postContactFormMutate(contactPayload);
    postTestn8nMutate(payload, {
      onSuccess: () => {
        showToast({
          iconType: "success",
          message: "Formulario enviado correctamente",
          subMessage: "Gracias, pronto nos pondremos en contacto contigo.",
        });
        reset();
      },
      onError: () => {
        showToast({
          iconType: "error",
          message: "Error al enviar el formulario",
          subMessage: "Por favor, intenta de nuevo.",
        });
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between flex-col md:flex-row gap-2 px-4 items-start mt-6">
            <div className="flex flex-1">
              <div className="max-w-full text-left">
                <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
                  Estás a un paso de cobrar{" "}
                  <span className="text-brand-primary font-caslon">mejor</span>
                  <span className="text-brand-secondary font-caslon">.</span>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
